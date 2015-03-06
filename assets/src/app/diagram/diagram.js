angular.module( 'beam.diagram', [
])

.config(function ($stateProvider) {
    $stateProvider.state('diagram', {
        url: '/diagram',
        views: {
            "main": {
                controller: 'DiagramController as model',
                templateUrl: 'diagram/diagram.tpl.html'
            }
        },
        data:{ pageTitle: 'Diagram' }
    });
})

//.controller('DiagramController', ['DiagramService', function (service) {
.controller('DiagramController', ['DiagramService', function DiagramController(service) {
        var model = this;

        init();
            
        function init() {
            service.init();

            model.init = function() {
                service.init();
            };
            model.addOrganization = function() {
                service.addOrganization();
            };
            model.addProcess = function() {
                service.addProcess();
            };
            model.addLink = function() {
                service.addLink();
            };
            model.zoomIn = function() {
                service.zoomIn();
            };  
            model.zoomOut = function() {
                service.zoomOut();
            };
            model.clear = function() {
                service.clear();
            };
            model.save = function() {
                service.save();
            };
            model.load = function() {
                service.load();
            };
            model.excel = function() {
                service.excel();
            };
        }
    }])

.factory('DiagramService', [ 'DiagramsRest', function(DiagramsRest) {

        var scale;
        var graph;
        var paper;
        var paperScroller;
        var inc = 0;
         
        var load = function () {
            DiagramsRest.getOne(1).then(function(diag) {
                graph.fromJSON(diag);
            })
            .catch(function(err) {
                alert("ERROR: " + err);
            });
            
            DiagramsRest.getTree("33:112").then(function(tree) {
                //setupTreeView(JSON.parse(tree));
                setupTreeView(tree);
            })
            .catch(function(err) {
                alert("ERROR: " + err);
            });
        }
        
        var setupTreeView = function(dbTree) {               
            var root = 
                (function recursiveBuildTree(pointer) {
                    var node = {
                        text: pointer.name,
                        icon : 'fa fa-building-o',
                        color : '#000000',
                        backColor : '#fafafa',
                        nodes: []
                    };
                    if (pointer.out_myOrganizations !== undefined) {
                        for (var i=0; i < pointer.out_myOrganizations.length; i++) {
                            node.nodes.push(recursiveBuildTree(pointer.out_myOrganizations[i].in));
                        }
                    }
                    var offset = (pointer.out_myOrganizations !== undefined) ? pointer.out_myOrganizations.length : 0;
                    if (pointer.out_myProcesses !== undefined) {
                        for (var i=0; i < pointer.out_myProcesses.length; i++) {
                            node.nodes.push(recursiveBuildTree(pointer.out_myProcesses[i].in));
                            node.nodes[i + offset].icon = 'fa fa-cog';
                       }
                    }
                    return node;  
                })(dbTree);
            
            var tree = [ root ];       
            $('#tree').treeview({data: tree});
        }
         
        return {
                // paper : paper,

            init : function () {
                scale = 1;
                
                var beamDefaultLink = new joint.dia.Link({
                    attrs: {
                        '.connection': { stroke: '#E74C3C', 'stroke-width': 4 },
                        /*'.marker-source': { stroke: '#E74C3C', fill: '#E74C3C', d: 'M 10 0 L 0 5 L 10 10 z' },*/
                        '.marker-target': { stroke: '#E74C3C', fill: '#E74C3C', d: 'M 10 0 L 0 5 L 10 10 z' }
                    }
                });

                graph = new joint.dia.Graph;
                paperScroller = new joint.ui.PaperScroller({
                    autoResizePaper: true
                });

                paper = new joint.dia.Paper({
                    el: paperScroller.el,
                    width: 2000,
                    height: 2000,
                    gridSize: 5,
                    //perpendicularLinks: true,
                    model: graph,
                    defaultLink : beamDefaultLink
                });
                paperScroller.options.paper = paper;
                
                // Fix - when cloning a shape the new cell may receive dbId > -1 (indicates new cell to server)! ANVÄNDS DENNA?
                graph.on('add', function(cell) { 
                    cell.dbId = -1; 
                });
                // TODO: hanterar inte kloning! Behöver inte kolla circular ref här, då det nya objektet bara har en input!
                graph.on('change:source change:target', function(link) { 
                    if (link.get('source').id && link.get('target').id) {
                        var links = _.filter(graph.toJSON().cells, { 'type' : 'link' });

                        // Check if target can reach source - if true deny this connection
                        var target = link.get('target').id;
                        var source = link.get('source').id;
                        
                    }
                });                


                $('#paper').append(paperScroller.render().el);

                //paperScroller.center();                
                paper.on('blank:pointerdown', paperScroller.startPanning);
                
                var selection = new Backbone.Collection;

                var selectionView = new joint.ui.SelectionView({
                    paper: paper,
                    graph: graph,
                    model: selection
                });
                
                selectionView.options.paper = paper;
                paper.$el.append(selectionView.$el);
                
                paper.on('cell:pointerdown', function(cellView, evt) {
                    // Select an element if CTRL/Meta key is pressed while the element is clicked.
                    if ((evt.ctrlKey || evt.metaKey) && !(cellView.model instanceof joint.dia.Link)) {
                        selectionView.createSelectionBox(cellView);
                        selection.add(cellView.model);
                    }
                });
                
                
                paper.on('cell:pointerup', function(cellView, evt) {
                    if (cellView.model instanceof joint.dia.Link || selection.contains(cellView.model)) return;
                    var halo = new joint.ui.Halo({
                        graph: graph,
                        paper: paper,
                        cellView: cellView,
                        linkAttributes: {
                            '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z', transform: 'scale(0.001)' },
                      // @TODO: scale(0) fails in Firefox
                            '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }
                        }
                    });
                    halo.render();
                  //createInspector(cellView);
                });

                this.load();
            },

            addOrganization : function() {
                var rect = new joint.shapes.beam.Organization({
                    position: { x: 150, y: 30 },
                    size: { width: 120, height: 60 },
                    attrs: { rect: { fill: 'orange', stroke: 0 }, text: { text: 'Organization' + inc++, fill: 'white' } }
                });
                graph.addCells([rect]);
            },

            addProcess : function() {
                var rect = new joint.shapes.beam.Process({
                    position: { x: 150, y: 30 },
                    size: { width: 120, height: 60 },
                    attrs: { rect: { fill: 'green', stroke: 0 }, text: { text: 'Process' + inc++, fill: 'white' } }
                });
                graph.addCells([rect]);
            },

            addLink : function() {
                var link2 = new joint.dia.Link({
                    source: { x: 10, y: 80 },
                    target: { x: 350, y: 80 },
                    attrs: {
                        '.connection': { stroke: '#E74C3C', 'stroke-width': 4 },
                        /*'.marker-source': { stroke: '#E74C3C', fill: '#E74C3C', d: 'M 10 0 L 0 5 L 10 10 z' },*/
                        '.marker-target': { stroke: '#E74C3C', fill: '#E74C3C', d: 'M 10 0 L 0 5 L 10 10 z' }
                    }
                });

                graph.addCells([link2]);
            },

            zoomIn : function () {
                scale = scale * 1.25;
                paper.scale(scale, scale);
                //paperScroller.zoom(0.2, { max: 2 });
            },

            zoomOut : function () {
                scale = scale * 0.8;
                paper.scale(scale, scale);
                //paperScroller.zoom(-0.2, { min: 0.2 });
            },

            clear : function () {
                graph.clear();
            },

            save : function () {
                try {
                    var param = { 'diagram' : JSON.stringify(graph.toJSON()) };
                }
                catch (err) {
                    alert("ERROR: " + err);
                }
                DiagramsRest.create(param).then(function(diag) {
                    alert("SPARAT");
                    graph.fromJSON(JSON.parse(diag));
                });
            },

            load : load,
  /*          
            excel : function () {
                DiagramsRest.getExcel().then (function(a) {
                    //alert("SPARAT");
                    window.open("http://127.0.0.1:1337/sample.xlsx", "_blank");
                })
                .catch(function(err) {
                    alert("ERROR: " + err);
                });
            }*/
        };
    }])
 
    ;
