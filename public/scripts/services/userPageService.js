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
	sv.getUserInfo = function(user) {
		sv.user = JSON.parse(localStorage.getItem('userData'));
		sv.email = sv.user.email;
		console.log(sv.email);
		if (user === undefined) {
			// sv.userInfo = JSON.parse(localStorage.getItem('userData'));
			console.log('sv.userInfo', sv.userInfo);
			return $http.post('/userInfo', sv.email).then(function(res) {
				console.log('Back from userInfo.js with:', res);
			});
		} else {
			var userLogin = user[0];
			localStorage.setItem('userData', JSON.stringify(userLogin));
			// return $http.post('/userInfo', sv.email).then(function(res) {
			// console.log('Back from userInfo.js get with:', res);
			// })
			// sv.userdata = user;
		}
	}; // END getUserInfo

	// START updateUserInfo

	// END of updateUserInfo









}); //end of service
