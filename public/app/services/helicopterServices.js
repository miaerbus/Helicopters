angular.module('helicopterServices', [])

.factory('Helicopter', function($http) {
  helicopterFactory = {};

  helicopterFactory.create = function(data) {
    //console.log(data);
    return $http.post('/api/helicopters', data)
  }

  helicopterFactory.getHelicopters = function() {
    return $http.get('/api/helicopters');
  }

  helicopterFactory.getHelicopter = function(id) {
    return $http.get('/api/helicopters/' + id);
  }

  helicopterFactory.update = function(id, data) {
    return $http.put('/api/helicopters/' + id, data);
  }
  
  return helicopterFactory;
});
