
// Singleton?
/*
module.exports = function() {
    return new RobDatastore();
}

function RobDatastore() {
    // Do some initialization? Open db?
    console.log('ROBDATASTORE CONSTRUCTOR ---------->...');
    
    var self = this;
    var db = { name: 'rob-undefined' };
    var xObjective = null;
    var xOrganization = null;
    var xProcess = null;
    var xDiagrams = null;

    // PUBLIC
    
    self.init = function () {
console.log(" INIT --> ROBDATASTORE.....");
    }

    self.opendb = function() {
        var Oriento = require("oriento");

        var server = Oriento({
          host: 'localhost',
          //host: 'orientdb34757-beamsails.jelastic.elastx.net',
          port: 2424,
          username: 'root',
          password: 'ocarlox65!'
          //password: 'wY9NXkhf71'
        });
        
console.log(' 1 MODULEN  Datastore opendb: ds, db === ', this.db.name);
        this.db = server.use('robdb');
        console.log('Using database: ' + this.db.name);
console.log(' 2 MODULEN  Datastore opendb: ds, db === ', this.db.name);

        initDB();
    }

    self.getdb = function() {
console.log('MODULEN Datastore  getdb: ds, db === ', this.db.name);
        return this.db;
    }
    
    self.Organization = function() {
        return xOrganization;
    }
    
    self.Process = function() {
        return xProcess;
    }

    // Retreives orientdb database id from a shape; se robShapes.js
    self.getIdFromShape = function(shape) {
        if (shape.dbId['@rid'].cluster === undefined) {
            console.log('--- hittat gammalt @rid', shape.dbId['@rid']);
            return shape.dbId['@rid'];     // existing in db
        }
        else {
            console.log('--- hittat nyskapat @rid', '#' + shape.dbId['@rid'].cluster + ':' + shape.dbId['@rid'].position);            
            return '#' + shape.dbId['@rid'].cluster + ':' + shape.dbId['@rid'].position;   // newly created in db
        }
    }

    self.connectOrgOrg = function(sourceId, targetId) {
        console.log("VILL koppla ihop O -> P", sourceId, targetId);
        db.select().from('myOrganizations').where({out: sourceId, in: targetId}).all()
        .then(function (hits) {
            console.log('Hittade så här många länkar:', hits);
            if (hits.length === 0) {
                db.create('EDGE', 'myOrganizations').from(sourceId).to(targetId).one()
                .then(function (edge) {
                    console.log('created edge: O -> O', edge);
                });
            }
        });
    }

    self.connectOrgProc = function(sourceId, targetId) {
        console.log("VILL koppla ihop O -> P", sourceId, targetId);
        db.select().from('myProcesses').where({out: sourceId, in: targetId}).all()
        .then(function (hits) {
            console.log('Hittade så här många länkar:', hits);
            if (hits.length === 0) {
                db.create('EDGE', 'myProcesses').from(sourceId).to(targetId).one()
                .then(function (edge) {
                    console.log('created edge: O -> P', edge);
                });
            }
        });
    }

    self.prototype.connectProcProc = function(sourceId, targetId) {
        console.log("VILL koppla ihop P -> P", sourceId, targetId);
        db.select().from('myProcesses').where({out: sourceId, in: targetId}).all()
        .then(function (hits) {
            console.log('Hittade så här många länkar:', hits);
            if (hits.length === 0) {
                db.create('EDGE', 'myProcesses').from(sourceId).to(targetId).one()
                .then(function (edge) {
                    console.log('created edge: P -> P', edge);
                });
            }
        });
    }
    
    
    function initDB() {
console.log('ROBDATASTORE----- db name', db.name);
        db.class.get('Objective').then(function (myClass) {
            xObjective = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Objective', 'V')
            .then(function (myClass) {
                xObjective = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });        
        db.class.get('Organization').then(function (myClass) {
            xOrganization = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Organization', 'V')
            .then(function (myClass) {
                xOrganization = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });
        db.class.get('Process').then(function (myClass) {
            xProcess = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Process', 'V')
            .then(function (myClass) {
                xProcess = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });
        db.class.get('Diagrams').then(function (myClass) {
            xDiagrams = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Diagrams', 'V')
            .then(function (myClass) {
                xDiagrams = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });
        db.class.get('myProcesses').then(function (myClass) {
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('myProcesses', 'E')
            .then(function (myClass) {
                console.log('Created class: ' + myClass.name);
            });
        }); 
        db.class.get('myOrganizations').then(function (myClass) {
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('myOrganizations', 'E')
            .then(function (myClass) {
                console.log('Created class: ' + myClass.name);
            });
        });        
        db.class.get('myObjectives').then(function (myClass) {
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('myObjectives', 'E')
            .then(function (myClass) {
                console.log('Created class: ' + myClass.name);
            });
        });  
    }
    
}*/

    var db = 'a';
    var xOrganization = null;
    var xProcess = null;
    var xDiagrams = null;
    
    
var datastore = (function () {


    console.log("MODULEN robDB: db === ", db);

    // PRIVATE
    var initDB = function(db) {
/*
        db.class.get('Objective').then(function (myClass) {
            xOrganization = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Objective', 'V')
            .then(function (myClass) {
                xOrganization = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });        
        db.class.get('Organization').then(function (myClass) {
            xOrganization = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Organization', 'V')
            .then(function (myClass) {
                xOrganization = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });
        db.class.get('Process').then(function (myClass) {
            xProcess = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Process', 'V')
            .then(function (myClass) {
                xProcess = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });
        db.class.get('Diagrams').then(function (myClass) {
            xDiagrams = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('Diagrams', 'V')
            .then(function (myClass) {
                xDiagrams = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });
        db.class.get('myProcesses').then(function (myClass) {
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('myProcesses', 'E')
            .then(function (myClass) {
                console.log('Created class: ' + myClass.name);
            });
        }); 
        db.class.get('myOrganizations').then(function (myClass) {
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('myOrganizations', 'E')
            .then(function (myClass) {
                console.log('Created class: ' + myClass.name);
            });
        });        
        db.class.get('myObjectives').then(function (myClass) {
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('myObjectives', 'E')
            .then(function (myClass) {
                console.log('Created class: ' + myClass.name);
            });
        });
*/
        db.class.get('joblist').then(function (myClass) {
            xjoblist = myClass;
            console.log('Got class: ' + myClass.name);
        }, function(err) {
            db.class.create('joblist')
            .then(function (myClass) {
                xjoblist = myClass;
                console.log('Created class: ' + myClass.name);
            });
        });  
    }
    
    // PUBLIC
    var getdb = function() {
        return db;
    }
/*
    var Organization = function() {
        return xOrganization;
    }

    var Process = function() {
        return xProcess;
    }
*/   
    var JobList = function() {
        return xjoblist;
    }
    var opendb = function() {
        var Oriento = require("oriento");

        var server = Oriento({
          host: 'localhost',
          //host: 'orientdb34757-beamsails.jelastic.elastx.net',
          port: 2424,
          username: 'root',
          password: 'ocarlox65!'
          //password: 'wY9NXkhf71'
        });

        db = server.use('robdb');
        console.log('Using database: ' + db.name);

        initDB(db);
    }
    
    // Retreives orientdb database id from a shape; se robShapes.js
    var getIdFromShape = function(shape) {
        if (shape.dbId['@rid'].cluster === undefined) {
            console.log('--- hittat gammalt @rid', shape.dbId['@rid']);
            return shape.dbId['@rid'];     // existing in db
        }
        else {
            console.log('--- hittat nyskapat @rid', '#' + shape.dbId['@rid'].cluster + ':' + shape.dbId['@rid'].position);            
            return '#' + shape.dbId['@rid'].cluster + ':' + shape.dbId['@rid'].position;   // newly created in db
        }
    }
    
    var connectOrgOrg = function(sourceId, targetId) {
        console.log("VILL koppla ihop O -> P", sourceId, targetId);
        db.select().from('myOrganizations').where({out: sourceId, in: targetId}).all()
        .then(function (hits) {
            console.log('Hittade så här många länkar:', hits);
            if (hits.length === 0) {
                db.create('EDGE', 'myOrganizations').from(sourceId).to(targetId).one()
                .then(function (edge) {
                    console.log('created edge: O -> O', edge);
                });
            }
        });
    }
    
    var connectOrgProc = function(sourceId, targetId) {
        console.log("VILL koppla ihop O -> P", sourceId, targetId);
        db.select().from('myProcesses').where({out: sourceId, in: targetId}).all()
        .then(function (hits) {
            console.log('Hittade så här många länkar:', hits);
            if (hits.length === 0) {
                db.create('EDGE', 'myProcesses').from(sourceId).to(targetId).one()
                .then(function (edge) {
                    console.log('created edge: O -> P', edge);
                });
            }
        });
    }

    var connectProcProc = function(sourceId, targetId) {
        console.log("VILL koppla ihop P -> P", sourceId, targetId);
        db.select().from('myProcesses').where({out: sourceId, in: targetId}).all()
        .then(function (hits) {
            console.log('Hittade så här många länkar:', hits);
            if (hits.length === 0) {
                db.create('EDGE', 'myProcesses').from(sourceId).to(targetId).one()
                .then(function (edge) {
                    console.log('created edge: P -> P', edge);
                });
            }
        });
    }
    return {
        /*
        Organization : Organization,
        Process : Process,
        */
        JobList : JobList,
        getIdFromShape: getIdFromShape,
        opendb: opendb,
        getdb : getdb,
        connectOrgOrg: connectOrgOrg,
        connectOrgProc: connectOrgProc,
        connectProcProc: connectProcProc
    };

})();
/*
exports.Organization = datastore.Organization;
exports.Process = datastore.Process;
*/
exports.JobList = datastore.JobList;
exports.getIdFromShape = datastore.getIdFromShape;
exports.opendb = datastore.opendb;
exports.getdb = datastore.getdb;
exports.createEdge = datastore.createEdge;
exports.connectOrgOrg = datastore.connectOrgOrg;
exports.connectOrgProc = datastore.connectOrgProc;
exports.connectProcProc = datastore.connectProcProc;

