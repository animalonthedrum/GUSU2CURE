function loginController(UserInfoService) {
    var vm = this;

    vm.login = function() {
        console.log('clicked');
        console.log(vm.email, vm.password);
        var userCredentials = {
            email:vm.email,
            password:vm.password
        };//end of userCredentials
        UserInfoService.loginUser(userCredentials);
    };//end of login
}
