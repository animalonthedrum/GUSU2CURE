function userController(UserInfoService, userPageService) {
  var vm = this;
  vm.getUserInfo = function() {
      userPageService.getUserInfo().then(function() {
          vm.user = userPageService.userLoggedInInfo;
          localStorage.setItem('userLoggedIn', JSON.stringify(vm.user));
      });
  };//end of getUserInfo
  vm.userData = JSON.parse(localStorage.getItem('userLoggedIn'));
  vm.userProfileImage = "";
}//end of controller
