function userController(UserInfoService, userPageService, adminService) {
  var vm = this;

  //globals


  vm.getUserInfo = function() {
      userPageService.getUserInfo().then(function() {
          vm.thisUser = userPageService.userLoggedInInfo;
      });

  };//end of getUserInfo

  vm.uploadImg = filestack.init('Ad5IIaaqyTY60IGIwPCg9z');
  vm.showPicker = function() {
    vm.uploadImg.pick({}).then(function(response) {
      vm.img = response.filesUploaded[0].url;
      userPageService.updateImage(vm.img).then(function() {

      });
    }); //end uploadImg
};//end of showPicker


vm.logout = function () {
    adminService.logout();
};//end of logout
}//end of controller
