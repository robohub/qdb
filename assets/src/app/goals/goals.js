angular.module("beam.goals", [
    'ui.router'
])

.config(function ($stateProvider) {
    $stateProvider.state('goals', {
        url: '/goals',
        views: {
            "main": {
                controller: 'GoalsController as model',
                templateUrl: 'goals/goals.tpl.html'
            }
        },
        data:{ pageTitle: 'Goals' }
    });
})

.controller('GoalsController', ['GoalsService', function GoalsController(service) {
    var model = this;

    init();

    function init() {
        service.init();

        model.init = function() {
            service.init();
        };
        model.addObjective = function() {
            service.addObjective();
        };
/*            model.addLink = function() {
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
        };*/
    }
}])

    .factory('GoalsService', function() {
        
        var scale;
        var graph;
        var paper;
        var paperScroller;
        var inc = 0;
        //var financialRect;
        
        return {
            init : function () {
                    
                $('#mySpinbox').spinbox();

                scale = 1;
                
                var beamDefaultLink = new joint.dia.Link({
                    attrs: {
                        '.connection': { stroke: '#E74C3C', 'stroke-width': 4 },
                        '.marker-target': { stroke: '#E74C3C', fill: '#E74C3C', d: 'M 10 0 L 0 5 L 10 10 z' }
                    }
                });

                graph = new joint.dia.Graph;
                paperScroller = new joint.ui.PaperScroller({
                    //autoResizePaper: true
                });

                paper = new joint.dia.Paper({
                    el: paperScroller.el,
                    width: 2000,
                    height: 500,
                    gridSize: 5,
                    //perpendicularLinks: true,
                    model: graph,
                    defaultLink : beamDefaultLink
                });
                paperScroller.options.paper = paper;

                $('#paper').append(paperScroller.render().el);

                //paperScroller.center();                
                //paper.on('blank:pointerdown', paperScroller.startPanning);
                
                /*var financialRect = new joint.shapes.beam.Organization({
                    position: { x: 0, y: 0 },
                    size: { width: 600, height: 400 }
                });
                graph.addCells([financialRect]);*/
               
                var selection = new Backbone.Collection;

                var selectionView = new joint.ui.SelectionView({
                    paper: paper,
                    graph: graph,
                    model: selection
                });
                
                selectionView.options.paper = paper;
                //paper.$el.append(selectionView.$el);
    
                //paper.on('blank:pointerdown', selectionView.startSelecting);
                
// Initiate selecting when the user grabs the blank area of the paper while the Shift key is pressed.
// Otherwise, initiate paper pan.
paper.on('blank:pointerdown', function(evt, x, y) {

    if (evt.ctrlKey || evt.metaKey) {
        selectionView.startSelecting(evt, x, y);
    } else {
        paperScroller.startPanning(evt, x, y);
    }
});

paper.on('cell:pointerdown', function(cellView, evt) {
    // Select an element if CTRL/Meta key is pressed while the element is clicked.
    if ((evt.ctrlKey || evt.metaKey) && !(cellView.model instanceof joint.dia.Link)) {
        selectionView.createSelectionBox(cellView);
        selection.add(cellView.model);
    }
});

selectionView.on('selection-box:pointerdown', function(evt) {
    // Unselect an element if the CTRL/Meta key is pressed while a selected element is clicked.
    if (evt.ctrlKey || evt.metaKey) {
        var cell = selection.get($(evt.target).data('model'));
        selectionView.destroySelectionBox(paper.findViewByModel(cell));
        selection.reset(selection.without(cell));
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
                
/*                // Keep child in parent rect!
                graph.on('change:position', function(cell) {

                    var parentId = cell.get('parent');
                    if (!parentId) return;

                    var parent = graph.getCell(parentId);
                    var parentBbox = parent.getBBox();
                    var cellBbox = cell.getBBox();

                    if (parentBbox.containsPoint(cellBbox.origin()) &&
                        parentBbox.containsPoint(cellBbox.topRight()) &&
                        parentBbox.containsPoint(cellBbox.corner()) &&
                        parentBbox.containsPoint(cellBbox.bottomLeft())) {

                        // All the four corners of the child are inside
                        // the parent area.
                        return;
                    }

                    // Revert the child position.
                    cell.set('position', cell.previous('position'));
                });*/
            },

            addObjective : function() {
                var rect = new joint.shapes.beam.Organization({
                    position: { x: 150, y: 30 },
                    size: { width: 120, height: 60 },
                    attrs: { rect: { fill: 'blue', stroke: 0 }, text: { text: 'Objective' + inc++, fill: 'white' } }
                });
                //financialRect.embed(rect);
                graph.addCells([rect]);
            }
        }
    });
