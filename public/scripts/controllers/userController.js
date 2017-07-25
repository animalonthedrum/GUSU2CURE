function userController(UserInfoService, userPageService) {
  var vm = this;

  vm.getUserInfo = function() {
      userPageService.saveUserInfo();
  };//end of getUserInfo
}//end of controller
