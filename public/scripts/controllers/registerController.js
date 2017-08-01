function registerController(UserInfoService, userPageService) {
	var vm = this;


	vm.login = function() {
        var userCredentials = {
            email:vm.Lemail,
            password:vm.Lpassword
        };//end of userCredentials
        UserInfoService.loginUser(userCredentials).then(function() {
            vm.userData = UserInfoService.backFromServer;
            if (vm.userData === 'Not in system' ) {
                sweetAlert({
                    title: "Error!",
                    text: "No user Found",
                    type: "error"
                }); //end of sweetAlert
            } else if (vm.userData.data === 'Unauthorized') {
                sweetAlert({
                    title: "Error!",
                    text: "Password does not match",
                    type: "error"
                }); //end of sweetAlert
            } else {
                if (vm.userData.data.access_lvl === 3) {
                    window.location.href = '#!/admin';
                } else {
                    window.location.href = '#!/user';
                }
                userPageService.saveUserInfo(vm.userData);
            }
        });//end of service
    };//end of login




	vm.submitLogin = function() {
		var count = 0;
		var userLoginObject = {
			id: 'login',
			firstName: vm.firstName,
			lastName: vm.lastName,
			email: vm.email,
			password: vm.password,
			confirmPassword: vm.confirmPassword,
			terms: vm.termsAndConditions
		}; //end of userLoginObject

		//makes sure everything is filled out correctly
		count = checkObject(userLoginObject);

		//will only run if everything is filled out correctly
		if (count === 0) {
			UserInfoService.getUserInfo(userLoginObject);
			window.location.href = '#!/signup';
		} //end of conditional statement
	}; //end of submitLogin
} //end of loginController
