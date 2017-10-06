angular.module('helicopterServices', [])

.factory('Helicopter', function($http) {
  helicopterFactory = {};

  helicopterFactory.getHelicopters = function() {
    return $http.get('/api/helicopters');
  }

  helicopterFactory.getHelicopter = function(id) {
    return $http.get('/api/helicopters/' + id);
  }
  
  return helicopterFactory;
});
