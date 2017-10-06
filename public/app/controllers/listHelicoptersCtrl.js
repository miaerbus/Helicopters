angular.module('listHelicoptersController', ['helicopterServices'])

.controller('listHelicoptersCtrl', function(Helicopter) {
  var vm = this;

  vm.loading = true;
  vm.errorMsg = false;

  Helicopter.getHelicopters().then(function(data) {
    //console.log(data);
    if (data.data.success) {
      vm.helicopters = data.data.helicopters;
      vm.loading = false;

    } else {
      vm.errorMsg = data.data.message;
      vm.loading = false;
    }
  });

});