angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'app/views/helicopters/all.html',
    controller: 'listHelicoptersCtrl',
    controllerAs: 'vm' // nickname (view model?)
  })

  // doesn't load view if /:helicopterId is before /rent 
  .when('/rent', {
    templateUrl: 'app/views/helicopters/rent.html',
    controller: 'rentCtrl',
    controllerAs: 'rent'
  })

  .when('/:helicopterId', {
    templateUrl: 'app/views/helicopters/view.html',
    controller: 'helicopterCtrl',
    controllerAs: 'vm'
  })
  
  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});