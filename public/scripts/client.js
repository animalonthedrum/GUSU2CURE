var myApp = angular.module('myApp', ['ngRoute']).
controller('gusuController', gusuController).
controller('registerController', registerController).
controller('signupController', signupController).
controller('injuryController', injuryController).
controller('bioController', bioController).
controller('hobbyController', hobbyController).
controller('questionController', questionController).
controller('adminController', adminController).
controller('userController', userController).
controller('loginController', loginController).
controller('visitUserPage', visitUserPage);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/register.html',
    controller: "gusuController"
  }).when('/register', {
    templateUrl: "views/partials/register.html",
    controller: "registerController as lc"
  }).when('/signup', {
    templateUrl: "views/partials/signup.html",
    controller: "signupController as sc"
  }).when('/injury', {
    templateUrl: "views/partials/injury.html",
    controller: "injuryController as ic"
  }).when('/bio', {
    templateUrl: "views/partials/bio.html",
    controller: "bioController as bc"
  }).when('/hobby', {
    templateUrl: "views/partials/hobby.html",
    controller: "hobbyController as hc"
  }).when('/question', {
    templateUrl: "views/partials/question.html",
    controller: "questionController as qc"
  }).when('/admin', {
    templateUrl: "views/partials/admin.html",
    controller: "adminController as ac"
  }).when('/user', {
    templateUrl: "views/partials/user.html",
    controller: "userController as uc"
  }).when('/login', {
    templateUrl: "views/partials/login.html",
    controller: "loginController as lc"
  }).when('/visit', {
    templateUrl: "views/partials/visitUserPage.html",
    controller: "visitUserPage as vc"
  });
});



myApp.filter('phoneNumber', function() {
  return function(number) {
    if (!number) {
      return '';
    }
    number = String(number);
    number = number.replace(/[^0-9]*/g, '');
    var formattedNumber = number;

    var c = (number[0] == '1') ? '1' : '';
    number = number[0] == '1' ? number.slice(1) : number;

    var area = number.substring(0, 3);
    var front = number.substring(3, 6);
    var end = number.substring(6, 10);

    if (front) {
      formattedNumber = (c + "(" + area + ") " + front);
    }
    if (end) {
      formattedNumber += ("-" + end);
    }
    return formattedNumber;
  };
});
