myApp.service('userPageService', function() {
    console.log('inside of userPageService');
    var sv = this;

    sv.saveUserInfo = function(user) {
        console.log('hello world', user);
        if (user === undefined) {
            console.log('retriving user data');

            var data = JSON.parse(localStorage.getItem('userData'));
            console.log('this is always here', data);

        } else {
            var userLogin = user[0];
            console.log('saving user data', user[0]);
            localStorage.setItem('userData', JSON.stringify(userLogin));
            sv.userdata = user;

        }
    };//end of saveUserInfo
});//end of service
