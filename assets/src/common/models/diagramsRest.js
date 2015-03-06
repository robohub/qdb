//angular.module('rest.diagrams', ['ngSails',])
angular.module('rest.diagrams', ['sails.io'])

.service('DiagramsRest', function($q, utils, $sailsSocket, $http){
/* 
    this.getExcel = function() {
        var deferred = $q.defer();

        $http({
            url: '/api/excel',
            method: "get",
        })
        .success(function (a) {
            return deferred.resolve(a);
        })
        return deferred.promise;
    };
*/
    this.getAll = function() {
        var deferred = $q.defer();
        var url = utils.prepareUrl('diagrams');

        $sailsSocket.get(url)
        .success(function(model) {
            return deferred.resolve(model);
        })
        .error(function(err) {
            var x = err;
        });
        return deferred.promise;
    };

    this.create = function(diagram) {
        var deferred = $q.defer();
        var url = utils.prepareUrl('diagrams');

        $sailsSocket.post(url)
        .success(function(model) {
            return deferred.resolve(model);
        })
        .error(function(err) {
            var x = err;
        });
        return deferred.promise;
    },

    this.getOne = function(id) {
        var deferred = $q.defer();
        var url = utils.prepareUrl('diagrams/' + id);

        $sailsSocket.get(url)
        .success(function(model) {
            return deferred.resolve(model);
        })
        .error(function(err) {
            var x = err;
        });
        return deferred.promise;
    },
        
    this.getTree = function(id) {
        var deferred = $q.defer();
        var url = utils.prepareUrl('diagrams/tree/' + id);
        
        $sailsSocket.get(url)
        .success(function(tree) {
            return deferred.resolve(tree);
        })
        .error(function(err) {
            var x = err;
        });
        return deferred.promise;
    };
    
/*	this.delete = function(model) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('message/' + model.id);

		$sails.delete(url, function(model) {
			return deferred.resolve(model);
		});

		return deferred.promise;
	};*/
});