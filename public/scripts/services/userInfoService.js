myApp.service('UserInfoService', function($http) {

	var sv = this;

	//will contain the users full information
	sv.fulluserObject = {};

	sv.getUserInfo = function(data) {
		if (data.id === "injury") {
			sv.fulluserObject.injury = data;
		} else if (data.id === "signup") {
			sv.fulluserObject.signup = data;
		} else if (data.id === "bio") {
			sv.fulluserObject.bio = data;
		} else if (data.id === "question") {
			sv.fulluserObject.question = data;
		} else if (data.id === "login") {
			sv.fulluserObject.login = data;
		} else if (data.id === "hobbies") {
			sv.fulluserObject.hobbies = data;
		}
		console.log(sv.fulluserObject);
	}; //end of getUserInfo

	sv.sendRegistration = function() {
		console.log(sv.fulluserObject);
		return $http.post('/register', sv.fulluserObject).then(function(response) {
			console.log(response);
		})
	}


}); //end of service
