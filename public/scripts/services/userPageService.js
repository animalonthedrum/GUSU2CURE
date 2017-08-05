myApp.service('userPageService', function($http) {
	var sv = this;

	sv.saveUserInfo = function(user) {
		if (user === undefined) {
			sv.userInfo = JSON.parse(localStorage.getItem('userData'));
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
		return $http.post('/userInfo', sendEmail).then(function(res) {
			sv.userLoggedInInfo = res.data.rows[0];
		}).catch(function(err) {
			window.location.href = '#!/register'
		});
	};
	// END getUserInfo

	// START getAllUserInfo
	sv.getAllUserInfo = function() {
		return $http.get('/userInfo').then(function(res) {
		});
	};

	sv.updateImage = function(img) {
		var image = {
			imagePic:img
		}
		return $http.put('/userInfo', image).then(function(res) {
			sv.userImage = res.data.rows[0].image;
		}).catch(function(err) {
		})
	}


	sv.submitBio = function(bio) {
		var user = {
			Bio:bio
		}
		return $http.put('/userBio', user).then(function(res){
		})
	}



}); //end of service
