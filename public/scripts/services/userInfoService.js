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
	  }; //end of getUserInfo

	  sv.sendRegistration = function() {
	    return $http.post('/register', sv.fulluserObject).then(function(response) {
	    })
	  }

	  sv.loginUser = function(user) {
	    return $http.post('/', user).then(function(res) {
	      console.log('back from the server with', res);
	      sv.backFromServer = res
	    }).catch(function(err) {
	      sv.backFromServer = err
	    })
	  }

	  // START sv.getSciRelMenu
	  sv.getSciRelMenu = function() {
	    return $http.get('/sciMenu').then(function(res) {
	      console.log('Back from dB with:', res);
	    });
	  };
	  // END sv.getSciRelMenu

	  sv.seeOtherUsersPage = function(user) {
	    if (user === undefined) {
	      var userSearchEmail = JSON.parse(localStorage.getItem('userSearched')).email
	      return $http.get('/userSearch/' + userSearchEmail).then(function(res) {
	        console.log('back from the server with from visit', res);
	      })
	    } else {
	      localStorage.setItem('userSearched', JSON.stringify(user))
	    }
	  }; //end of function



	}); //end of service
