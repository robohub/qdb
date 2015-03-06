angular.module( 'beam.header', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config ) {
    $scope.currentUser = config.currentUser;

    var navItems = [
        /*{title: 'Messages', translationKey: 'navigation:messages', url: '/messages', cssClass: 'fa fa-comments'},
        {title: 'Test', translationKey: 'navigation:test', url: '/test', cssClass: 'fa fa-comments'},*/
        {title: 'Diagram', translationKey: 'navigation:diagram', url: '/diagram', cssClass: 'fa fa-comments'},
        {title: 'About', translationKey: 'navigation:about', url:'/about',cssClass: 'fa fa-info-circle'}
    ];

    if (!$scope.currentUser) {
        navItems.push({title: 'Register', translationKey: 'navigation:register', url: '/register', cssClass: 'fa fa-briefcase'});
        navItems.push({title: 'Login', translationKey: 'navigation:login', url: '/login', cssClass: 'fa fa-comments'});
    }
    
    $scope.navItems = navItems;
    

});