function visitUserPage(UserInfoService) {
    var vm = this;

    vm.checkForUserSearched = function() {
        console.log('inside of checkForUserSearched');
        UserInfoService.seeOtherUsersPage();

    };//end of function
}//end of controller
