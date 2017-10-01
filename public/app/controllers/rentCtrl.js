// Name: rentControllers
// Dependencies: rentServices
angular.module('rentControllers', ['rentServices'])

.controller('rentCtrl', function($http, $location, $timeout, Rent) {

  var app = this; // this variable can be accessed outside this scope

  this.rentHelicopter = function(rentData) {
    app.loading = true;
    app.errorMsg = false;
    
    Rent.create(app.rentData).then(function(data) {
      
      if (data.data.success) {  
        app.loading = false;
        app.successMsg = data.data.message + '... Redirecting';
        // Redirect to home page with 2 second delay
        $timeout(function() {
          $location.path('/');
        }, 2000);
      
      } else {
        app.loading = false;
        app.errorMsg = data.data.message;
      }
    });
  };
});

