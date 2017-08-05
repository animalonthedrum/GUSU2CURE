function userController(UserInfoService, userPageService, adminService) {
  var vm = this;

  //globals


  vm.getUserInfo = function() {
    userPageService.getUserInfo().then(function() {
      vm.thisUser = userPageService.userLoggedInInfo;
    });

  }; //end of getUserInfo

  vm.uploadImg = filestack.init('Ad5IIaaqyTY60IGIwPCg9z');
  vm.showPicker = function() {
    vm.uploadImg.pick({}).then(function(response) {
      vm.img = response.filesUploaded[0].url;
      userPageService.updateImage(vm.img).then(function() {

      });
    }); //end uploadImg
  }; //end of showPicker


  vm.logout = function() {
    adminService.logout();
  }; //end of logout




  vm.submitUserBio = function() {
    userPageService.submitBio(vm.userBio);
  }; //end of submitUserBio

  vm.showMatches = function() {
    var userToMatch = {
      email: vm.thisUser.email,
      type: 'Mentor',
      asia: vm.thisUser.asia_score,
      ed_lvl: vm.thisUser.ed_lvl,
      gender: vm.thisUser.gender,
      matched: vm.thisUser.matched,
      pets: vm.thisUser.pets,
      sci_age: vm.thisUser.sci_age,
      rel_status: "Single",
      sci_cause: "Fall",
      zip: vm.thisUser.zip,
      lang: "English",
      fam_status: vm.thisUser.fam_status,
      age: 59
    };
    adminService.matchingUsers(userToMatch).then(function() {
      vm.matchContent = adminService.matchedUsers;
    });
  };

} //end of controller
