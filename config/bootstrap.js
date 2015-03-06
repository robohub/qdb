/**
 * Bootstrap
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */


require('../api/services/robDB');

module.exports.bootstrap = function(cb) {

    robDB.opendb();   // require('../api/services/robDB') ---> GlobalID robDB singleton! Used for database operations in other parts...
    
console.log("ROBDB object: ", robDB);
    
/* Initialize database with joblist!   

  var jlc = require('../api/controllers/JobListController');
  
  xlsxj = require("xlsx-to-json");
  xlsxj({
    input: "Joblist.xlsx", 
    output: "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log("DET GICK BRA ATT HÄMTA EXCEL!...Antal rader = ", result.length);
      jlc.save(result);
    }
  });
*/
    // It's very important to trigger this callack method when you are finished 
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};