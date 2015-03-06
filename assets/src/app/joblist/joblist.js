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

.controller( 'JoblistCtrl', function JobListController(JoblistRest, $scope, titleService) {
	titleService.setTitle('Joblist');
    
    JoblistRest.getAll().then(function(list) {
        $scope.myItems = list;
    })
    .catch(function(err) {
        alert("ERROR: " + err);
    });
/*
    $scope.myItems = [
        { jobNo : 1, roNo : 'x' ,roSuffix : 1, entryDate : 'x', repairDate : 1, partNo : 'x', failPart : 1, mainOp : 'x', mainOpDesc : 1, totCost : 'x', matCost : 1, labCost : 'x', }, 
        { jobNo : 2, roNo : 'x' ,roSuffix : 1, entryDate : 'x', repairDate : 1, partNo : 'x', failPart : 1, mainOp : 'x', mainOpDesc : 1, totCost : 'x', matCost : 1, labCost : 'x', },
        { jobNo : 3, roNo : 'x' ,roSuffix : 1, entryDate : 'x', repairDate : 1, partNo : 'x', failPart : 1, mainOp : 'x', mainOpDesc : 1, totCost : 'x', matCost : 1, labCost : 'x', },
        { jobNo : 4, roNo : 'x' ,roSuffix : 1, entryDate : 'x', repairDate : 1, partNo : 'x', failPart : 1, mainOp : 'x', mainOpDesc : 1, totCost : 'x', matCost : 1, labCost : 'x', },        

    ];
*/
});