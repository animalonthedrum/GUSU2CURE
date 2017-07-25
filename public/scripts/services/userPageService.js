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

        console.log('in another scope', JSON.parse(localStorage.getItem('userData')));

		// if (user === undefined) {
		// 	sv.userInfo = JSON.parse(localStorage.getItem('userData'));
		// 	console.log('sv.userInfo', sv.userInfo);
		// 	var email = sv.userInfo.email;
		// 	console.log(email);
		// 	return $http.get('/userInfo', email).then(function(res) {
		// 		console.log('Back from userInfo.js with:', res);
		// 	});
		// } else {
		// 	var userLogin = user[0];
		// 	localStorage.setItem('userData', JSON.stringify(userLogin));
		// 	sv.userdata = user;
		// }
	}; //end of getUserInfo

	// START updateUserInfo
	// sv.updateUserInfo = function(user) {
	// 	if (user === undefined) {
	// 		sv.userInfo = JSON.parse(localStorage.getItem('userData'));
	// 		console.log('sv.userInfo', sv.userInfo);
	// 		var email = sv.userInfo.email;
	// 		console.log(email);
	// 		return $http.put('/userInfo', email).then(function(res) {
	// 			console.log('Back from userInfo.js with:', res);
	// 		});
	// 	} else {
	// 		var userLogin = user[0];
	// 		localStorage.setItem('userData', JSON.stringify(userLogin));
	// 		sv.userdata = user;
	// 	}
	//}; //end of updateUserInfo









}); //end of service
