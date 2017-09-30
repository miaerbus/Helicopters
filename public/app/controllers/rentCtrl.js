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
        
        // Don't show loading banner on click
        app.loading = false;
        
        // Create Success Message
        app.successMsg = data.data.message + '... Redirecting';
        
        // Redirect to Home page with 2 second delay
        $timeout(function() {
          $location.path('/');
        }, 2000);
      
      } else {
        app.loading = false;
        
        // Create Error Message
        app.errorMsg = data.data.message;
      }
    });
  };
});

