angular.module( 'beam.joblist', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'joblist', {
		url: '/joblist',
		views: {
			"main": {
				controller: 'JoblistCtrl',
				templateUrl: 'joblist/joblist.tpl.html'
			}
		}
	});
})

.controller( 'JoblistCtrl', [ 'DiagramHeaders', 'JoblistRest',  '$scope', 'utils', '$sailsSocket', function JobListController(DiagramHeaders, JoblistRest, $scope, utils, $sailsSocket ) {
	//titleService.setTitle('Joblist');

    // Hämta variabler från Actual vs Target  -------------
    $scope.plantStr = DiagramHeaders.plantStr;
    $scope.tmyStr = DiagramHeaders.tmyStr;
    $scope.modelStr = DiagramHeaders.modelStr;
    $scope.vrtStr = DiagramHeaders.vrtStr;
    
    
        var url = utils.prepareUrl('joblist');

        $sailsSocket.get(url)
        .success(function(model) {
            $scope.myItems = model;
        })
        .error(function(err) {
            var x = err;
        });

}]);