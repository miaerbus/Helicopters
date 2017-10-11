// Name: rentControllers
// Dependencies: rentServices
angular.module('rentControllers', ['rentServices', 'helicopterServices'])

.controller('rentCtrl', function($http, $routeParams, $location, $timeout, Rent, Helicopter) {
  var vm = this;

  vm.rentHelicopter = function(rentData) {
    vm.loading = true;
    vm.errorMsg = false;
    
    Rent.create(vm.rentData).then(function(data) {
      
      if (data.data.success) {  
        vm.loading = false;
        vm.successMsg = data.data.message + '... Redirecting';

        // Set helicopter to not available, add price to total earnings, add rent to helicopter history
        Helicopter.update($routeParams.helicopterId, { 
          "isAvailable": false,
          "rents": vm.rentData
        });

        // Redirect to home page with 2 second delay
        $timeout(function() {
          $location.path('/');
        }, 2000);
      
      } else {
        vm.loading = false;
        vm.errorMsg = data.data.message;
      }
    });
  };

  vm.cancelHelicopter = function() {
    console.log("Canceling the rent...");

    // Set helicopter to available, add 500€ for cancelation
    Helicopter.update($routeParams.helicopterId, { 
      "isAvailable": true
    });

  };
});

