function userController(menuService, $http) {
	var vm = this;

	vm.getSciRelMenu = function() {
		menuService.getSciRelMenu();
	}; //end of getUserInfo
} //end of controller
