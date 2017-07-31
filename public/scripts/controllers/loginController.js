function loginController(UserInfoService, userPageService) {
    var vm = this;

    vm.login = function() {
        console.log('clicked');
        console.log(vm.email, vm.password);
        var userCredentials = {
            email:vm.email,
            password:vm.password
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
}//end of loging controller
