function adminController(adminService, UserInfoService) {
  var vm = this;
  vm.users = [];
  vm.mentorsMentees = function() {
      adminService.getMentorsMentees().then(function() {

          vm.users = adminService.users;
          vm.users.forEach(function(user) {
              if (user.access_lvl === 1) {
                  user.access_lvl = 'Mentor';
                  return user.access_lvl;
              } else if (user.access_lvl === 2) {
                  user.access_lvl = 'Mentee';
                  return user.access_lvl;
              }//end of conditional statement
          });//end of loop
          for (var i = 0; i < vm.users.length; i++) {
              vm.enabled = vm.users[i].enabled;
          }
      });//end of promise
      return vm.users;
  };//end of function

  vm.switchEnabled = function(index) {
      var enabled = vm.users[index].enabled;
      enabled = !enabled;

      adminService.switchUserEnabled(vm.users[index]);
  };//end of funciton


  vm.displayUserModal = function(index) {
      vm.userInModal = vm.users[index];
  };//end of funciton

  vm.goToUserPage = function() {
      vm.userToLogIn = vm.userInModal;
      UserInfoService.seeOtherUsersPage(vm.userToLogIn);
      window.location.href = '#!/visit';
  };//end of function


  vm.search = function() {
      console.log(vm.users);
       adminService.getMentorsMentees().then(function() {
           vm.typeUserSearch = adminService.users;

           for (var i = 0; i < vm.typeUserSearch.length; i++) {
               if (vm.searchUserBy === vm.typeUserSearch[i].first_name) {
                   vm.users.pop([i]);
                   vm.users.unshift(vm.typeUserSearch[i]);

               }
           }//end of for loop
           vm.users.forEach(function(user) {
               if (user.access_lvl === 1) {
                   user.access_lvl = 'Mentor';
                   return user.access_lvl;
               } else if (user.access_lvl === 2) {
                   user.access_lvl = 'Mentee';
                   return user.access_lvl;
               }//end of conditional statement
           });//end of loop
       });//end of promise

  };//end of searchUser



}//end of controller
