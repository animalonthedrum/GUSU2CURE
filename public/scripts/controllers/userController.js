function userController(UserInfoService, userPageService, adminService) {
  var vm = this;

  //globals


  vm.getUserInfo = function() {
    userPageService.getUserInfo().then(function() {
      vm.thisUser = userPageService.userLoggedInInfo;
      console.log('this is the user', vm.thisUser);
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
          type: vm.thisUser.access_lvl,
          asia: vm.thisUser.asia_score,
          ed_lvl: vm.thisUser.ed_lvl,
          gender: vm.thisUser.gender,
          matched: vm.thisUser.matched,
          pets: vm.thisUser.pets,
          sci_age: vm.thisUser.sci_age,
          rel_status: vm.thisUser.rel_status,
          sci_cause: vm.thisUser.sci_cause,
          zip: vm.thisUser.zip,
          lang: vm.thisUser.lang,
          fam_status: vm.thisUser.fam_status,
          age: vm.thisUser.age
        };
        adminService.matchingUsers(userToMatch).then(function() {
          vm.matchContent = adminService.matchedUsers;
        });
    };//end of showMathces

    vm.matchMeWithThisUser = function(index) {
        console.log('index', vm.matchContent[index].first_name + " "+vm.matchContent[index].last);
        adminService.matchMeNow(vm.matchContent[index].email);

    };//end of matchMeWithThisUser

    vm.showMatchUser = function(index) {
        vm.showMatchedUserInfo = vm.matchContent[index];
          UserInfoService.seeOtherUsersPage(vm.showMatchedUserInfo);
          window.location.href = '#!/visit';
    };//showMatchUser

    vm.unmatchMe = function() {
        userPageService.unmatchMe();
    };//end of unmatchMe

    

} //end of controller
