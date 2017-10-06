// Name: rentControllers
// Dependencies: rentServices
angular.module('rentControllers', ['rentServices'])

.controller('rentCtrl', function($http, $location, $timeout, Rent) {
  var vm = this;

  vm.rentHelicopter = function(rentData) {
    vm.loading = true;
    vm.errorMsg = false;
    
    Rent.create(vm.rentData).then(function(data) {
      
      if (data.data.success) {  
        vm.loading = false;
        vm.successMsg = data.data.message + '... Redirecting';

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
});

