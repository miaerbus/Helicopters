angular.module('helicopterServices', [])

.factory('Helicopter', function($http) {
  helicopterFactory = {};

  helicopterFactory.createHelicopter = function(data) {
    console.log(data);
    return $http.post('/api/rents', data)
  }

  helicopterFactory.getHelicopters = function() {
    return $http.get('/api/helicopters');
  }

  helicopterFactory.getHelicopter = function(id) {
    return $http.get('/api/helicopters/' + id);
  }
  
  return helicopterFactory;
});
