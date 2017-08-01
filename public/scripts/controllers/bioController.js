function bioController(UserInfoService, menuService, $window) {
  var vm = this;

  vm.submit = function() {
    var count = 0;
    var bioObject = {
      id: "bio",
      relStatus: vm.relationshipStatus,
      famStatus: vm.familyStatus,
      edLevel: vm.educationLevel,
      lang: vm.language,
      pets: vm.pets,
      emp: vm.work
    }; //end bio object

    //check if object has any err
    count = checkObject(bioObject);

    //only runs if err count is 0
    if (count === 0) {
      UserInfoService.getUserInfo(bioObject);
      window.location.href = '#!/hobby';
    }

  }; //end of submit button

  // START getRelStatusMenu
  vm.getRelStatusMenu = function() {
    menuService.getRelStatusMenu().then(function() {
      vm.rel_status = menuService.rel_status;
    });
  }
  // END getRelStatusMenu

  // START getLangMenu
  vm.getLangMenu = function() {
    menuService.getLangMenu().then(function() {
      vm.lang = menuService.lang;
    });
  }
  // END getLangMenu


}
