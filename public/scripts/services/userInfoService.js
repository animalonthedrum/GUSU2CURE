myApp.service('UserInfoService', function($http) {
    var sv = this;
    console.log('inside of ');
    //will contain the users full information
    var fulluserObject = Object;

    sv.getUserInfo = function(data) {
        console.log('inside of getUserInfo');
        if (data === "signupObject") {
            console.log('from log in');
        }
    };//end of getUserInfo

});
