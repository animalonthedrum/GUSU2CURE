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

	// START sv.getRelStatusMenu
	sv.getRelStatusMenu = function() {
		return $http.get('/menuRelStatus').then(function(resultSet) {
			console.log('Back from dB with:', resultSet.data);
			sv.rel_status = resultSet.data;
		});
	};
	// END sv.getRelStatusMenu

	// START sv.getLangMenu
	sv.getLangMenu = function() {
		return $http.get('/menuLang').then(function(resultSet) {
			console.log('Back from dB with:', resultSet.data);
			sv.lang = resultSet.data;
		});
	};
	// END sv.getLangMenu



}); //end of service
