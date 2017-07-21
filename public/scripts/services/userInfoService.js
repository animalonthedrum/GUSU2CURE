myApp.service('UserInfoService', function($http) {
  var sv = this;
  console.log('inside of ');
  //will contain the users full information
  var fulluserObject = {};

  sv.getUserInfo = function(data) {
    console.log('inside of getUserInfo');
    if (data.id === "injury") {
      fulluserObject.injury = data;
    } else if (data.id === "signup") {
      fulluserObject.signup = data;
    }
    localStorage.setItem("fulluserObject", fulluserObject);
    console.log(localStorage.getItem("fulluserObject"));
  }; //end of getUserInfo

});
