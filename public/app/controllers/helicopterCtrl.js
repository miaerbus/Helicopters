angular.module('helicopterController', ['helicopterServices'])

.controller('helicopterCtrl', function(Helicopter) {
  var app = this;

  app.loading = true;
  app.errorMsg = false;

  Helicopter.getHelicopters().then(function(data) {
    if (data.data.success) {
      app.helicopters = data.data.helicopters;
      app.loading = false;

    } else {
      app.errorMsg = data.data.message;
      app.loading = false;
    }
  });
});