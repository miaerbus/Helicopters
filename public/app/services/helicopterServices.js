angular.module('helicopterServices', [])

.factory('Helicopter', function($http) {
  helicopterFactory = {};

  helicopterFactory.getHelicopters = function() {
    return $http.get('/api/helicopters')
  }

  helicopterFactory.getHelicopterById = function() {
    return $http.get('/api/helicopters')
  }

  return helicopterFactory;
});
