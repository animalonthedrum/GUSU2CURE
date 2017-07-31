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

	  sv.loginUser = function(user) {
	    console.log('inside of loginUser', user);
	    return $http.post('/', user).then(function(res) {
	      console.log('back from the server with', res);
	      sv.backFromServer = res
	    }).catch(function(err) {
	      console.log('err', err);
	      sv.backFromServer = err
	      console.log('err', sv.backFromServer);
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
	      console.log('looking for new user');
	      return $http.get('/userSearch/' + userSearchEmail).then(function(res) {
	        console.log('back from the server with', res);
	      })
	    } else {
	      localStorage.setItem('userSearched', JSON.stringify(user))
	    }
	  }; //end of function



	}); //end of service
