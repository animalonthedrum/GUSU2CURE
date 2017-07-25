	myApp.service('UserInfoService', function($http) {

		var sv = this;

		//will contain the users full information
		sv.dummyObject = {};
		sv.dummyObject.bio = {
			edLevel: "Undergraduate degree",
			famStatus: "Children at Home",
			id: "bio",
			lang: "2",
			relStatus: "Married",
			pets: 'FALSE'
		}
		sv.dummyObject.hobbies = {
			dateStamp: "7/24/2017",
			hobbies: ['basketball', 'crafting', 'baking'],
			id: 'hobbies'
		}
		sv.dummyObject.injury = {
			asia: "B",
			cause: "2",
			id: "injury",
			level: ['C6', 'C7', 'C8', 'T1 - T5'],
			sciRel: "Self",
			yrInjury: 1999,
			mobility: 'Wheelchair (manual)'
		}
		sv.dummyObject.login = {
			confirmPassword: "go",
			email: "moises@gmail.com",
			firstName: "Moises",
			id: "login",
			lastName: "Miguel",
			password: "go",
			terms: true
		}
		sv.dummyObject.question = {
			additional: "asdfasd",
			comment: "asdfasdf",
			experience: "adsfasdf",
			heardAbout: ['Personal Reference'],
			id: "question",
			question: "Yes",
		}
		sv.dummyObject.signup = {
			address: "22407 Center St, # 23",
			city: "Minneapolis",
			dob: '11/29/1980',
			gender: "Male",
			id: "signup",
			phone: "9878764563",
			phoneType: "Home",
			state: "MN",
			typeOfUser: "Mentor",
			visitType: ['Hospital'],
			zip: 55044
		}


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
			return $http.post('/login', user).then(function(res) {
				console.log('back from the server with', res);
			})
		}

	}); //end of service
