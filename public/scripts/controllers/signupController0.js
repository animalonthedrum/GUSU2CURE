function signupController(UserInfoService) {
  var vm = this;
  vm.visitArray = [];


  vm.submit = function() {
    var count = 0;

    var v = document.getElementsByName('visit');

      for (var i = 0; i < v.length; i++) {
          if (v[i].checked) {
              console.log('this is true');
              vm.visitType = v[i].defaultValue;

             console.log(vm.visitType);
             vm.visitArray.push(vm.visitType);
          }
      }//end of loop

          var signupObject = {
            "Type of User":vm.radioValue,
            "Date of birth":vm.dateBirth,
            gender:vm.gender,
            address:vm.address,
            city:vm.city,
            state:vm.state,
            zipcode:vm.zipcode,
            phone:vm.phone,
            "phone type":vm.phoneType,
            "visit type":vm.visitArray
          };//end of signupObject

          //checks if object is filled out
          count = checkObject(signupObject);

      //only runs of object is correctly filled out
      if (count === 0) {
          console.log('object is ok');
          UserInfoService.getUserInfo(signupObject);
      }


  };//end of submit funciton
}


function checkObject(object) {
    var count = 0;
    for(var x in object) {
        if (object.hasOwnProperty(x)) {
            if (object[x] === undefined || object[x] === null || object[x] === " ") {
                if (x === 'phone') {
                    alert('please enter a valid phone number');
                    count++;
                    break;
                } else if (x === 'typeUser' ) {
                    alert('Please choose Mentor/Mentee');
                    count++;
                    break;
                } else if (x === 'dateOfBirth'){
                    alert('please fill enter date of birth' );
                    count++;
                    break;
                } else {
                    alert('please fill out ' +  x);
                    count++;
                    break;
                }
            }//end of if
        }//end of if hasOwnProperty
    }//emd of for loop
    return count;
}
