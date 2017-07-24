	myApp.service('UserInfoService', function($http) {

	var sv = this;

	//will contain the users full information
	sv.dummyObject = {};
	sv.dummyObject.bio = {
		edLevel:"Some College",
		famStatus:"childrenAtHome",
		id:"bio",
		lang:"2",
		relStatus:"married"
	}
	sv.dummyObject.hobbies = {
		dateStamp:"7/24/2017",
		hobbies:['basketball', 'crafting', 'baking'],
		id:'hobbies'
	}
	sv.dummyObject.hobbies = {
		asia:"B",
		cause:"2",
		id:"injury",
		level:['C1-C4', 'C5'],
		sciRel:"Parent",
		yrInjury:1999
	}
	sv.dummyObject.login = {
		confirmPassword:"go",
		email:"moises@gmail.com",
		firstName:"moises",
		id:"login",
		lastName:"miguel",
		password:"go",
		terms:true
	}

	sv.dummyObject.question = {
		additional:"asdfasd",
		comment:"asdfasdf",
		experience:"adsfasdf",
		heardAbout:['Personal Reference'],
		id:"question",
		question:"Yes",
	}
	sv.dummyObject.signup = {
		address:"asdfasdf",
		city:"asdfasdf",
		dob:'Thu Aug 03 2017 00:00:00 GMT-0500 (CDT)',
		gender:"Male",
		id:"signup",
		phone:"9878764563",
		phoneType:"Home",
		state:"mn",
		typeOfUser:"mentor",
		visitType:['Hospital'],
		zip:55044
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


}); //end of service
