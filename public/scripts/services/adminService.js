myApp.service('adminService', function($http) {

	var sv = this;
	sv.admins = [];
	sv.users = [];

	// START getMentorsMentees
	sv.getMentorsMentees = function() {
		return $http.get('/allUsers').then(function(res) {
			sv.allUsers = res.data;
			sv.users = [];
			sv.admins = [];
			sv.allUsers.forEach(function(user) {
				if (user.access_lvl === 3) {
					//if we need them we have info to admins
					sv.admins.push(user);
				} else {
					sv.users.push(user);
				}
			}); //end of loop
		}).catch(function(err) {
			window.location.href = '#!/register'
		}); //end of promise
	};
	// END getMentorsMentees


	// START switchUserEnabled
	sv.switchUserEnabled = function(user) {
		return $http.put('/allUsers', user).then(function() {

		});
	};
	// END switchUserEnabled


	// START getMatches
	sv.matchingUsers = function(user) {
		return $http.post('/matching', user).then(function(res) {
			sv.matchedUsers = res.data;
		})
	}
	// END getMatches


	// START logout
	sv.logout = function() {
		$http.put('/').then(function(res) {
			window.location.href = '#!/register'
		})
	}
	// END of logout
	sv.matchMeNow = function(email) {
		var user = {
			Email:email
		};//end of user
		$http.put('/viewMatchNonMatched', user).then(function(res){
			console.log('back from the server with', res);
		});//end of promise
	};//enf of matchMeNow


});
// END of service
