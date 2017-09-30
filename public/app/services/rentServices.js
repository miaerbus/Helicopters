angular.module('rentServices', [])

.factory('Rent', function($http) {
  rentFactory = {};

  rentFactory.create = function(rentData) {
    return $http.post('/api/rents', rentData)
  }

  return rentFactory;
});
