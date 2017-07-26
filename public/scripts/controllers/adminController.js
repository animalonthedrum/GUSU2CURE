function adminController(adminService) {
  console.log('adminController');
  var vm = this;
  vm.mentorsMentees = function() {
      adminService.getMentorsMentees().then(function() {
          vm.users = adminService.users;
          vm.users.forEach(function(user) {
              console.log('users', user);
              if (user.access_lvl === 1) {
                  console.log('this is mentor');
                  user.access_lvl = 'Mentor';
                  return user.access_lvl;
              } else if (user.access_lvl === 2) {
                  user.access_lvl = 'Mentee';
                  return user.access_lvl;
              }
          });
          console.log(vm.users);
      });

  };


}
