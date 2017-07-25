function questionController(UserInfoService, $window) {
  console.log('questionController');
  var vm = this;
  var count = 0;

  vm.submit = function() {
    vm.heardArray = [];
    var h = document.getElementsByName('heardAbout');

    for (var i = 0; i < h.length; i++) {
      if (h[i].checked) {
        console.log('this is true');
        vm.heardType = h[i].defaultValue;

        console.log(vm.heardType);
        vm.heardArray.push(vm.heardType);
      }
    } //end of loop

    var questionToSend = {
      id: 'question',
      question: vm.question,
      experience: vm.experience,
      additional: vm.additional,
      comment: vm.comment,
      heardAbout: vm.heardArray
    }; //end object
    console.log(questionToSend);
    count = checkObject(questionToSend);

    //only runs of object is correctly filled out
    if (count === 0) {
      console.log('object is ok');
      UserInfoService.getUserInfo(questionToSend);
      window.location.href = '#!/hobby';
    }
  };

} //end controller
