angular.module('createHelicopterController', ['helicopterServices'])

.controller('createHelicoptersCtrl', function(Helicopter) {
  var vm = this;

  console.log("Creating...!");

  vm.createHelicopter = function() {
    vm.loading = true;
    vm.errorMsg = false;

    vm.helicopterData.picture = "test.jpg";
    vm.helicopterData.name = "Testni helikopter";
    vm.helicopterData.power = 500;
    vm.helicopterData.passengers = 400;
    vm.helicopterData.speed = 300;
    vm.helicopterData.isAvailable = true;
    
    Helicopter.create(vm.helicopterData).then(function(data) {
      
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