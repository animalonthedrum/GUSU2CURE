function bioController(UserInfoService) {
  console.log('bioController');
  var vm = this;

  vm.submit= function() {
      console.log('clicked');
      var count = 0;
      console.log(vm.familyStatus);
      var bioObject = {
          id:"bio",
          relationShipStatus:vm.relationshipStatus,
          familyStatus:vm.familyStatus,
          educationLevel:vm.educationLevel,
          language:vm.language
      };//end bio object

      //check if object has any err
      count = checkObject(bioObject);

      //only runs if err count is 0
      if (count === 0) {
          UserInfoService.getUserInfo(bioObject);
      }

  };//end of submit button
}

function checkObject(object) {
    var count = 0;
    for(var x in object) {
        if (object.hasOwnProperty(x)) {
            if (object[x] === undefined || object[x] === null || object[x] === " ") {
                alert('Please fill out ' + x);
                count++;
                break;
            }//end of if
        }//end of if hasOwnProperty
    }//emd of for loop
    return count;
}
