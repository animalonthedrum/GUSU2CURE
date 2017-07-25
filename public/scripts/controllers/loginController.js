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
                console.log('user does not exist');
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
                console.log('saving this data', vm.userData);
                userPageService.saveUserInfo(vm.userData);
                window.location.href = '#!/user';
            }
        });//end of service
    };//end of login
}//end of loging controller
