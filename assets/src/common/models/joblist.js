
angular.module('rest.joblist', ['sails.io'])

.service('JoblistRest', function(/*$q,*/ utils, $sailsSocket, $http){

    this.getAll = function() {
        //var deferred = $q.defer();
        var url = utils.prepareUrl('joblist');

        $sailsSocket.get(url)
        .success(function(model) {
            //return deferred.resolve(model);
            return model;
        })
        .error(function(err) {
            var x = err;
        });
        //return deferred.promise;
    };

});