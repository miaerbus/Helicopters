angular.module('rentServices', [])

.factory('Rent', function($http) {
  rentFactory = {};

  rentFactory.create = function(rentData) {
    //console.log(rentData);
    return $http.post('/api/rents', rentData)
  }

  return rentFactory;
});
