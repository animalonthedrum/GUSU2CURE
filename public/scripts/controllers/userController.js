function userController(UserInfoService, userPageService) {
  var vm = this;

  //globals


  vm.getUserInfo = function() {
      console.log('in this');
      userPageService.getUserInfo().then(function() {
          console.log('user info', userPageService.userLoggedInInfo);
          vm.thisUser = userPageService.userLoggedInInfo;
      });

  };//end of getUserInfo

  vm.uploadImg = filestack.init('Ad5IIaaqyTY60IGIwPCg9z');
  vm.showPicker = function() {
    vm.uploadImg.pick({}).then(function(response) {
      // console.log(response);

      vm.img = response.filesUploaded[0].url;
      userPageService.updateImage(vm.img).then(function() {
          console.log(userPageService.userImage);
          vm.userImage = userPageService.userImage;
      });
    }); //end uploadImg
  };


}//end of controller
