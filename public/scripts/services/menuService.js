myApp.service('menuService', function($http) {
	var sv = this;

	sv.getSciRelMenu = function() {
		return $http.get('/sciMenu').then(function(resultSet) {
			console.log('Back from dB with:', resultSet.data);
			sv.sci_rel = resultSet.data;
			// return resultSet.data;
		});
	};
	// END getUserInfo

}); //end of service
