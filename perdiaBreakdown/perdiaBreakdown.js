angular.module("beam.perdiaBreakdown", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('perdiaBreakdown', {
        url: '/perdiaBreakdown',
        views: {
            "main": {
                controller: 'PerdiaBreakdownController as model',
                templateUrl: 'perdiaBreakdown/perdiaBreakdown.tpl.html'
            }
        },
        data:{ pageTitle: 'Perdia Breakdown' }
    });
})

.controller('PerdiaBreakdownController', [ '$scope', '$location', 'DiagramHeaders', function PerdiaBreakdownController($scope, $location, DiagramHeaders) {

	// Hämta variabler från Actual vs Target  -------------
	$scope.plantStr = DiagramHeaders.plantStr;
	$scope.tmyStr = DiagramHeaders.tmyStr;
	$scope.modelStr = DiagramHeaders.modelStr;
	$scope.vrtStr = DiagramHeaders.vrtStr;

    
}]);
