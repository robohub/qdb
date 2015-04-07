var _ = require('lodash');
var bb = require('bluebird');

//var ds = require('../services/robDB');
console.log("----DIAGRAMCONTROLLER require robdb....db = ", robDB.db);



var excelReport = require("../../node_modules/excel-report/excelReport");


//var excelbuilder = require('msexcel-builder');


module.exports = {
    
/////////////////////////////////////////////////////////////////////////////////////
    getExcel: function(req, res) {

//
// TODO: check credentials since a hacker can go directly to /api/excel !!!
// 
//

        var jlc = require('./JobListController');
        jlc.serverGetAll().then(function (joblist) {
            console.log('---- Loaded joblist:');

            var data = {
                title: 'Joblist',
                company: 'VCC',
                address: 'Torslanda',
                user_created: 'Dennis W'
            }
            
            var rows = [];
       
            for (var i = 0; i < joblist.length; i++) {

                var row = { 
                    dealer: joblist[i]["RepairingDealer"],
                    vType: joblist[i]["VehicleFamily"],
                    vVariant: joblist[i]["VehicleVariant"],
                    roNo: joblist[i]["RepairOrderNo"],
                    roSfx: joblist[i]["RepairOrderSuffix"],
                    mainOp: joblist[i]["MainOperationDesc"],
                    repDate: joblist[i]["RepairDate"],
                    VIN: joblist[i]["VIN"],
                    jobNo: joblist[i]["JobNo"],
                    VRT: joblist[i]["VRT"],
                    CSC: joblist[i]["CSC"],
                    CCC: joblist[i]["CCC"]
                };

                rows.push(row);
            }
            data.table1 = rows;
            
            var template_file ='./qdb joblist template.xlsx';

            excelReport(template_file, data, function(error, binary) {
                if (error){
                    res.writeHead(400, {'Content-Type': 'text/plain'});
                    res.end(error);
    console.log("ERROR EXCEL: ", error);
                    return
                }
    console.log("SKICKAR EXCEL: ");
                res.set('Content-Type', 'application/vnd.openxmlformats');
                res.set("Content-Disposition", "attachment; filename=report.xlsx");
                res.end(binary, 'binary');
            }); 
        })
        .catch(function(err) {
            console.log('---- Error loading joblist:');
        });

 /*
        console.log("SKAPAR EXCEL: ");
              // Create a new workbook file in current working-path 
              var workbook = excelbuilder.createWorkbook('/Users/robert/Documents/Development/sailng-master/assets/', 'sample.xlsx')

              // Create a new worksheet with 10 columns and 12 rows 
              var sheet1 = workbook.createSheet('sheet1', 10, 12);

              // Fill some data 
              sheet1.set(1, 1, 'I am title');
              for (var i = 2; i < 5; i++)
                sheet1.set(i, 1, 'test'+i);
            
              sheet1.set(2,4, 'ROBBAN');

              // Save it 
              workbook.save(function(ok){
              })
              res.set('Content-Type', 'application/vnd.openxmlformats');
              res.download('/Users/robert/Documents/Development/sailng-master/assets/sample.xlsx');
              res.end();*/
      
    },
  /////////////////////////////////////////////////////////////////////////////////////
    getAll: function(req, res) {
        console.log("ROBERT HÄMTAR ALLA");  
        // TODO : code
    },
/////////////////////////////////////////////////////////////////////////////////////
    getTree: function(req, res) {
        console.log("ROBERT HÄMTAR TRÄD:", req.param('id')); 
        
//console.log("----DIAGRAMCONTROLLER db", robDB.getdb());

        robDB.getdb().select("@this.toJSON('fetchPlan:*:-1')").from('#' + req.param('id')).all()
        .then(function (tree) {
            console.log('Tree  :  ', tree[0].this);
            res.json(tree[0].this);
        })
        .catch(function(err) {
            res.send(404);
        });
    },
/////////////////////////////////////////////////////////////////////////////////////
    getOne: function(req, res) {
        console.log("ROBERT HÄMTAR EN SPARNING MED ID: ", req.param('id'));  

        
        robDB.getdb().select().from('Diagrams').where({diagramType: 'orgProc'}).one()
        .then(function (diag) {
            console.log('Loaded diagram', diag.diagram);
            res.json(diag.diagram);
        })
        .catch(function(err) {
            res.send(404);
        });
/*        
        robDB.getdb().record.get('#' + req.param('id'))
        .then(function (model) {
            console.log('Loaded model:', model.diagram);
            res.json(model.diagram);
        })
        .catch(function(err) {
            res.send(404);
        });*/
    },
/////////////////////////////////////////////////////////////////////////////////////
    create: function (req, res) {
        console.log("ROBERT TESTAR EN SPARNING: ", req.param('diagram'));
        
        
        // TODO: hantera borttagning av noder - hur vet om noder blivit borttagna från diagrammet?
              
        var noder = JSON.parse(req.param('diagram')).cells;
        var promises = [];
        var returnDiag = {};

        // Create new or update nodes in DB if necessary
        for (i = 0; i < noder.length; i++)
        {
            nod = noder[i];
            if (nod.type !== 'link') {
                name = nod.attrs.text.text;
                console.log(i + "Nod: ", nod.type, "Id: ", nod.id, "Name: ", name);

                if (nod.dbId === -1) {
                    // This nod doesn't exist in db, create it...
                    var model = {
                        name: name
                    };
                    if (nod.type === 'beam.Organization') {
                        promises.push(robDB.Organization().create(model));
                    }
                    else if (nod.type === 'beam.Process') {
                        promises.push(robDB.Process().create(model));                    
                    }
                }
                else {
                    // Update existing node with changed attributes
                }
            }
        }   

        bb.all(promises).then(function(result) {            
            console.log("Nu skall alla noder vara sparade/ändrade! Kör ev. ihoplänkning!");

            // Gå igenom noderna igen: alla icke-links med dbId = -1 ska få nytt från results[]!!!
            var j = 0;  // Iterator för result
            for (i = 0; i < noder.length; i++) {
                nod = noder[i];
                if (nod.type !== 'link') {
                    if (nod.dbId === -1) {
                        nod.dbId = result[j++];
                        console.log("NY NOD: ", nod);
                    }
                }
            }
            for (i = 0; i < noder.length; i++)
            {
                nod = noder[i];    
                if (nod.type === 'link') {
                    name = "T: " + nod.target.id + " S: " + nod.source.id;
                    console.log(i + " Nod: ", nod.type, "Id: ", nod.id, "Name: ", name);

                    source = _.find(noder, { 'id': nod.source.id });
                    console.log('Link source: ', source);
                    target = _.find(noder, { 'id': nod.target.id });
                    console.log('Link target: ', target);
                    if (source !== undefined && target !== undefined) {
                        sId = robDB.getIdFromShape(source);
                        tId = robDB.getIdFromShape(target);

                        if (source.type === 'beam.Organization') {
                            if (target.type === 'beam.Organization') {
                                robDB.connectOrgOrg(sId, tId);
                            }
                            else {// target.type = 'beam.Process'
                                robDB.connectOrgProc(sId, tId);
                            }
                        }
                        else if (source.type === 'beam.Process') {
                            // Assumes target.type == 'beam.Process'
                            robDB.connectProcProc(sId, tId);
                        }
                    }
                }
            }
        })
        .finally(function() {
            // Spara diagrammet - med sina dbId!!!!

            var returnDiag = JSON.stringify({ cells: noder });
            var model = {
                diagramType : 'orgProc',
                diagram: returnDiag
            };
            console.log("ROBERT sparar diagrammet ", returnDiag);  

            robDB.getdb().update('Diagrams').set(model).where({diagramType: 'orgProc'}).scalar()
            .then(function (total) {
                console.log('updated', total);
                if (total === '0') {
                    console.log('skapar VERTEX diagrams!!!!!!!!!!!!');

                    robDB.getdb().create('VERTEX', 'Diagrams')
                    .set(model)
                    .one()
                    .then(function (vertex) {
                        console.log('Created vertex', vertex);
                    }).catch(function(err) {
                        console.log('Create diagrams error:', err);
                    });
                }
            })
            .catch(function(err) {
                console.log('UPDATE diagrams error:', err);
                res.send(404);
            });
            
            console.log('--- .... Returnerar uppdaterat diagram');
            res.json(returnDiag);
        })

        
    },
/////////////////////////////////////////////////////////////////////////////////////
    destroy: function (req, res) {
/*        var id = req.param('id');
        if (!id) {
            return res.badRequest('No id provided.');
        }

        // Otherwise, find and destroy the model in question
        TestModel.find( {id: id} ).exec(function(err, model) {
            if (err) {
                return res.serverError(err);
            }
            if (!model) {
                return res.notFound();
            }
            TestModel.destroy(id, function(err) {
            if (err) {
              return res.serverError(err);
            }

            //TestModel.publishDestroy(model.id);
            return res.json(model);
            });
        });*/
    }
};