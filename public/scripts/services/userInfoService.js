myApp.service('UserInfoService', function($http) {
    var sv = this;
    console.log('inside of ');
    //will contain the users full information
    sv.fulluserObject = {};

    sv.getUserInfo = function(data) {
        console.log('inside of getUserInfo');
        if (data.id === "injury") {
            sv.fulluserObject.injury = data;
        } else if(data.id === "signup") {
            sv.fulluserObject.signup = data;
        }
        console.log(sv.fulluserObject);
    };//end of getUserInfo

});
