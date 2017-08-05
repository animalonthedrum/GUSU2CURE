myApp.service('userPageService', function($http) {
	var sv = this;

	sv.saveUserInfo = function(user) {
		if (user === undefined) {
			console.log('this is undefined');
			console.log(JSON.parse(localStorage.getItem('userData')));
			sv.userInfo = JSON.parse(localStorage.getItem('userData'));
			console.log('sv.userInfo', sv.userInfo);
		} else {
			localStorage.setItem('userData', JSON.stringify(user));
		}
	}; //end of saveUserInfo


	// START getUserInfo
	sv.getUserInfo = function() {
		sv.user = JSON.parse(localStorage.getItem('userData')).data.email
		var sendEmail = {
			email: sv.user
		}
		console.log(sendEmail);
		return $http.post('/userInfo', sendEmail).then(function(res) {
			sv.userLoggedInInfo = res.data.rows[0];
			console.log('back from the server with user info', res.data.rows[0]);
		}).catch(function(err) {
			window.location.href = '#!/register'
		});
	};
	// END getUserInfo

	// START getAllUserInfo
	sv.getAllUserInfo = function() {
		return $http.get('/userInfo').then(function(res) {
			console.log('Back from userInfo.js with:', res);
		});
	};
	// END getAllUserInfo

	// START updateUserInfo

	// END of updateUserInfo


	sv.updateImage = function(img) {
		var image = {
			imagePic:img
		}
		return $http.put('/userInfo', image).then(function(res) {
			console.log('back from the server with', res.data.rows[0].image);
			sv.userImage = res.data.rows[0].image;
		}).catch(function(err) {
			console.log('err', err);
		})
	}


	sv.submitBio = function(bio) {
		console.log('bio', bio);
		var user = {
			Bio:bio
		}
		return $http.put('/userBio', user).then(function(res){
			console.log('back from the server with', res);
		})
	}



}); //end of service
