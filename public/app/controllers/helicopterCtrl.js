angular.module('helicopterController', ['helicopterServices'])

.controller('helicopterCtrl', function($routeParams, Helicopter) {
  var vm = this;

  vm.loading = true;
  vm.errorMsg = false;
  vm.helicopter = null;

  Helicopter.getHelicopter($routeParams.helicopterId).then(function(data) {
    if (data.data.success) {
      vm.helicopter = data.data.helicopter;
      vm.loading = false;
    } else {
      vm.errorMsg = data.data.message;
      vm.loading = false;
    }
  });

});
