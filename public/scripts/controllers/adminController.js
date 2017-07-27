function adminController(adminService) {
  console.log('adminController');
  var vm = this;
  vm.mentorsMentees = function() {
      adminService.getMentorsMentees().then(function() {
          vm.users = adminService.users;
          vm.users.forEach(function(user) {
              if (user.access_lvl === 1) {
                  console.log('this is mentor');
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

  };//end of function

  vm.switchEnabled = function(index) {
      var enabled = vm.users[index].enabled;
      enabled = !enabled;

      adminService.switchUserEnabled(vm.users[index]);
  };//end of funciton


}//end of controller
