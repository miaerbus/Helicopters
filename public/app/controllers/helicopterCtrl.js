angular.module('helicopterController', [])

.controller('helicopterCtrl', function(Helicopter, $scope) {
  var app = this;

  app.loading = true;
  app.errorMsg = false;

  Helicopter.getHelicopters().then(function(data) {
    if (data.data.success) {
      app.helicopters = data.data.helicopters;
      $scope.helicopters = app.helicopters;
      //console.log(app.helicopters);
      app.loading = false;

    } else {
      app.errorMsg = data.data.message;
      app.loading = false;
    }
  });
});