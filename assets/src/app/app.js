angular.module( 'qdb', [
    'ui.router',
    //'ngSails',
    'angularMoment',
    'lodash',
    'angularMoment',
    'ui.bootstrap',
    'templates-app',
    'services',
    'models',

    'beam.header',
    'beam.home',
    'beam.diagram',
    'beam.about',
    'beam.organization',
    'beam.goals',
    'beam.analysis',
    'beam.toplist',
    'beam.joblist',
    'angularjs-dropdown-multiselect',
    'trNgGrid'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
	// $urlRouterProvider.otherwise( '/home' );
	$urlRouterProvider.otherwise(function ($injector, $location) {
		if ($location.$$url === '/') {
			window.location = '/home';
		}
		else {
			// pass through to let the web server handle this request
			window.location = $location.$$absUrl;
		}
	});
	$locationProvider.html5Mode(true);
})

.factory('DiagramHeaders', function () {
    var plantStr = "";
    var tmyStr = "";
    var modelStr = "";
    var vrtStr = "";
    
    return {         
        plantStr : plantStr,
        tmyStr : tmyStr,
        modelStr : modelStr,
        vrtStr : vrtStr       
    };
})

.run( function run () {
	moment.lang('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
	config.currentUser = window.currentUser;
});