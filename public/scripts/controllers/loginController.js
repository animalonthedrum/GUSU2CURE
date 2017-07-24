<<<<<<< HEAD
function loginController(UserInfoService) {
  var vm = this;


  vm.submitLogin = function() {
    var count = 0;
    var userLoginObject = {
         id:'signup',
         "First Name":vm.firstName,
         "Last Name":vm.lastName,
         email:vm.email,
         password:vm.password,
         "Confirm Password":vm.confirmPassword,
         terms: vm.termsAndConditions
      };//end of userLoginObject

    //makes sure everything is filled out correctly
    count = checkObject(userLoginObject);

    //will only run if everything is filled out correctly
    if (count === 0) {
    console.log('object is ok');
    UserInfoService.getUserInfo(userLoginObject);
    }//end of conditional statement
    };//end of submitLogin
}//end of loginController
=======
function loginController() {
	var vm = this;


	vm.submitLogin = function() {
		var count = 0;
		var userLoginObject = {
			firstName: vm.firstName,
			lastName: vm.lastName,
			email: vm.email,
			password: vm.password,
			confirmPassword: vm.confirmPassword,
			terms: vm.termsAndConditions
		}; //end of userLoginObject

		//makes sure everything is filled out correctly
		count = checkobject(userLoginObject);

		//will only run if everything is filled out correctly
		if (count === 0) {

			console.log('object is all filled out', userLoginObject);
		} //end of conditional statement
	}; //end of submitLogin
} //end of loginController


function checkobject(object) {
	var count = 0;
	for (var x in object) {
		if (object.hasOwnProperty(x)) {
			if (object[x] === undefined || object[x] === "") {
				if (x === 'email') {
					console.log('please enter a valid email');
					count++;
					break;
				} else {
					console.log('please fill out', x);

					count++;
					break;
				} //end of conditional statements
			} //end of if
		} //end of if

	} //end of loop
	if (object.password !== object.confirmPassword) {
		console.log('Passwords do not match');
		count++;
	}
	return count;
} //end of checkobject function
>>>>>>> registration-login
