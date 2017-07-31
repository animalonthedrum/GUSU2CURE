function userController(UserInfoService, userPageService) {
  var vm = this;
  vm.getUserInfo = function() {
      console.log('in this');
      userPageService.getUserInfo();
  };//end of getUserInfo
}//end of controller
