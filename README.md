
## To get up and running ##
You will need to have Sails 0.11.0-rc5 installed on your machine (sudo npm install sails@0.11.0-rc5 -g) and then clone the repo, cd into the project directory and run

    $ npm install
    $ cd assets
    $ bower install
    $ cd ../
    $ sails lift

Check it out at [http://localhost:1337](http://localhost:1337)

## DEPLOY JELASTIC - robert ###

 $ set correct db credentials in api/services/robDB.js
 $ set port=8080 in config/env/development.js
 
 
 ## FIX for IE 9 and up
 
 ngsails.io.js in HOME directory should be placed in:
 
 assets/bower_components/angularSails/dist (replace original file...)
 
 