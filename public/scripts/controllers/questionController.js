function questionController(UserInfoService, $window) {
  var vm = this;
  var count = 0;

  vm.submit = function() {
    vm.heardArray = [];
    var h = document.getElementsByName('heardAbout');

    for (var i = 0; i < h.length; i++) {
      if (h[i].checked) {
        vm.heardType = h[i].defaultValue;
        vm.heardArray.push(vm.heardType);
      }
      swal(
        'Thank You For Signing Up!',
        'Login to create a profile',
        'success'
      );
    } //end of loop

    var questionToSend = {
      id: 'question',
      question: vm.question,
      experience: vm.experience,
      additional: vm.additional,
      comment: vm.comment,
      heardAbout: vm.heardArray
    }; //end object
    count = checkObject(questionToSend);

    //only runs of object is correctly filled out
    if (count === 0) {
      UserInfoService.getUserInfo(questionToSend);
      UserInfoService.sendRegistration();
      window.location.href = '#!/register';

    }
  };

} //end controller
