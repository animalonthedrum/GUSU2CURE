myApp.service('adminService', function($http) {
    var sv = this;
    sv.admins = [];
    sv.users = [];
    sv.getMentorsMentees = function() {
        return $http.get('/allUsers').then(function(res) {
            sv.allUsers = res.data;
            sv.allUsers.forEach(function(user) {
                if (user.access_lvl === 3) {
                    //if we need them we have info to admins
                    sv.admins.push(user);
                } else {
                    sv.users.push(user);
                }
            });//end of loop
        });//end of promise)
    };//end of sv.getMentorsMentees

    sv.switchUserEnabled = function(user) {
        console.log(user);
        return $http.put('/allUsers', user).then(function(res) {
            console.log('back from the server with', res);
        });
    };//end of function


});//end of service
