function loginController(UserInfoService) {
  var vm = this;


  vm.submitLogin = function() {
    var count = 0;
    var userLoginObject = {
         id:'signup',
         "First Name":vm.firstName,
         "Last Name":vm.lastName,
         email:vm.email,
         password:vm.password,
         "Confirm Password":vm.confirmPassword,
         terms: vm.termsAndConditions
      };//end of userLoginObject

    //makes sure everything is filled out correctly
    count = checkObject(userLoginObject);

    //will only run if everything is filled out correctly
    if (count === 0) {
    console.log('object is ok');
    UserInfoService.getUserInfo(userLoginObject);
    }//end of conditional statement
    };//end of submitLogin
}//end of loginController
