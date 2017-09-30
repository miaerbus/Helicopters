angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	// when the user types in default location
	$routeProvider

	.when('/', {
		templateUrl: 'app/views/helicopters/all.html',
    controller: 'helicopterCtrl',
    controllerAs: 'helicopter' // nickname (view model?)
	})

/*	.when('/view', {
		templateUrl: 'app/views/helicopters/view.html',
    controller: 'viewCtrl',
    controllerAs: 'view'
	})

*/
	.when('/rent', {
		templateUrl: 'app/views/helicopters/rent.html',
    controller: 'rentCtrl',
    controllerAs: 'rent'
	})

/*	.when('/cancel', {
		templateUrl: 'app/views/helicopters/cancel.html',
    controller: 'cancelCtrl',
    controllerAs: 'cancel'
	})

	.when('/create', {
		templateUrl: 'app/views/helicopters/create.html',
    controller: 'createCtrl',
    controllerAs: 'create'
	})
*/
	.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});