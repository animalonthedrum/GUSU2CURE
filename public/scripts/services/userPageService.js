myApp.service('userPageService', function($http) {
	var sv = this;

	sv.saveUserInfo = function(user) {
		if (user === undefined) {
			sv.userInfo = JSON.parse(localStorage.getItem('userData'));
			console.log('sv.userInfo', sv.userInfo);
			var email = sv.userInfo.email;
			console.log(email);
			// return $http.post('/login', email).then(function(res) {
			// 	console.log('back from the server with', res);
			// });
		} else {
			var userLogin = user[0];
			localStorage.setItem('userData', JSON.stringify(userLogin));
		}
	}; //end of saveUserInfo


	// START getUserInfo
	sv.getUserInfo = function() {
		sv.user = JSON.parse(localStorage.getItem('userData'));
		sv.email = sv.user.email;
		var sendEmail = {
			email: sv.email
		}
		// console.log(sendEmail);
		// console.log(sv.email);
		return $http.post('/userInfo', sendEmail).then(function(res) {
			console.log('Back from userInfo.js with:', res);
		});
	}; // END getUserInfo

	// START updateUserInfo

	// END of updateUserInfo









}); //end of service
