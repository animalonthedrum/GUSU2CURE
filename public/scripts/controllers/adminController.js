function adminController(adminService, UserInfoService) {

	var vm = this;
	vm.users = [];

	// START mentorsMentees
	vm.mentorsMentees = function() {
		adminService.getMentorsMentees().then(function() {
			vm.users = adminService.users;
			vm.users.forEach(function(user) {
				if (user.access_lvl === 1) {
					user.access_lvl = 'Mentor';
					return user.access_lvl;
				} else if (user.access_lvl === 2) {
					user.access_lvl = 'Mentee';
					return user.access_lvl;
				} //end of conditional statement
			}); //end of loop
			for (var i = 0; i < vm.users.length; i++) {
				vm.enabled = vm.users[i].enabled;
			}
		}); //end of promise
		return vm.users;
	};
	// END mentorsMentees

	// START switchEnabled
	vm.switchEnabled = function(index) {
		var enabled = vm.users[index].enabled;
		enabled = !enabled;
		adminService.switchUserEnabled(vm.users[index]);
	};
	// END switchEnabled


	// START displayUserModal
	vm.displayUserModal = function(index) {
		vm.userInModal = vm.users[index];
	};
	// END displayUserModal


	// START goToUserPage
	vm.goToUserPage = function() {
		vm.userToLogIn = vm.userInModal;
		UserInfoService.seeOtherUsersPage(vm.userToLogIn);
		window.location.href = '#!/visit';
	};
	// END goToUserPage


	// START searchUser
	vm.search = function() {
		adminService.getMentorsMentees().then(function() {
			vm.typeUserSearch = adminService.users;
			searchDatabase(vm, vm.users);
			vm.users.forEach(function(user) {
				if (user.access_lvl === 1) {
					user.access_lvl = 'Mentor';
					return user.access_lvl;
				} else if (user.access_lvl === 2) {
					user.access_lvl = 'Mentee';
					return user.access_lvl;
				} //end of conditional statement
			}); //end of loop
		}); //end of promise
	};
	// END searchUser


	// START getMatches
	vm.getMatches = function(index) {
		var userToMatch = {
			email: vm.users[index].email,
			type: vm.users[index].access_lvl,
			asia: vm.users[index].asia_score,
			ed_lvl: vm.users[index].ed_lvl,
			gender: vm.users[index].gender,
			matched: vm.users[index].matched,
			pets: vm.users[index].pets,
			sci_age: vm.users[index].sci_age,
			rel_status: vm.users[index].rel_status,
			sci_cause: vm.users[index].sci_cause,
			zip: vm.users[index].zip,
			lang: vm.users[index].lang,
			fam_status: vm.users[index].fam_status,
			age: vm.users[index].age
		};
		adminService.matchingUsers(userToMatch);
	};
	// END getMatches


	// START logout
	vm.logout = function() {
		adminService.logout();
	};
	// END logout


} //end of controller

function searchDatabase(vm) {
	var usersFound = [];
	for (var i = 0; i < vm.typeUserSearch.length; i++) {
		for (var x in vm.typeUserSearch[i]) {
			if (vm.searchUserBy.toLowerCase().indexOf(String(vm.typeUserSearch[i][x]).toLowerCase()) === 0) {
				usersFound.push(vm.typeUserSearch[i]);
				vm.users = usersFound;
			}
		}
	}
	return vm.users
}
