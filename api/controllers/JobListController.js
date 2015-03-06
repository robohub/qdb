var _ = require('lodash');
var bb = require('bluebird');

module.exports = {
    
    getAll: function(req, res) {
        console.log("ROBERT HÄMTAR ALLA");  
        
        robDB.getdb().select().from('joblist').all()
        .then(function (list) {
            console.log('---- Loaded joblist:');
            console.log(list);
            res.json(list);
        })
        .catch(function(err) {
            res.send(404);
        });
    },
    
    
    save: function(data) {
        console.log("Ska spara json till databasen...");
        for (i = 0; i < data.length; i++) {
            var ins = JSON.stringify(data[i]);
            //var newString = ins.replace(/ /g,"");
            var qstr = "insert into joblist content " + ins;
            console.log(i, qstr);
            robDB.getdb().query(qstr)
            .then(function (response){
                console.log(i); //an Array of records inserted
            });
        }
    }
};