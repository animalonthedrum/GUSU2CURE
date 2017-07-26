myApp.service('menuService', function($http) {
	var sv = this;

	// START getSciRelMenu
	sv.getSciRelMenu = function() {
		return $http.get('/menuSciRel').then(function(resultSet) {
			console.log('Back from dB with:', resultSet.data);
			sv.sci_rel = resultSet.data;
		});
	};
	// END getSciRelMenu

	// START getSciCauseMenu
	sv.getSciCauseMenu = function() {
		return $http.get('/menuSciCause').then(function(resultSet) {
			console.log('Back from dB with:', resultSet.data);
			sv.sci_cause = resultSet.data;
		});
	};
	// END getSciCauseMenu

	// START getTransTypeMenu
	sv.getTransTypeMenu = function() {
		return $http.get('/menuTransType').then(function(resultSet) {
			console.log('Back from dB with:', resultSet.data);
			sv.trans_type = resultSet.data;
		});
	};
	// END getTransTypeMenu



}); //end of service
