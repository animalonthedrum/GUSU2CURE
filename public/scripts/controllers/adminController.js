function adminController(adminService, UserInfoService) {

	var vm = this;
	vm.users = [];
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
	}; //end of function

	vm.switchEnabled = function(index) {
		var enabled = vm.users[index].enabled;
		enabled = !enabled;

		adminService.switchUserEnabled(vm.users[index]);
	}; //end of funciton


	vm.displayUserModal = function(index) {
		vm.userInModal = vm.users[index];
	}; //end of funciton

	vm.goToUserPage = function() {
		vm.userToLogIn = vm.userInModal;
		UserInfoService.seeOtherUsersPage(vm.userToLogIn);
		window.location.href = '#!/visit';
	}; //end of function


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

	}; //end of searchUser

	// START getMatches
	vm.getMatches = function(index) {
		console.log(vm.users[index].age);
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

  vm.logout = function () {
      adminService.logout();
  };//end of logout


} //end of controller

// console.log('searching my nigga', vm.searchUserBy.toLowerCase().indexOf("mentor"));
// console.log(/Moises/i.test(vm.searchUserBy));

function searchDatabase(vm) {
	var usersFound = [];
	for (var i = 0; i < vm.typeUserSearch.length; i++) {
		for(var x in vm.typeUserSearch[i]) {
			if (vm.searchUserBy.toLowerCase().indexOf(String(vm.typeUserSearch[i][x]).toLowerCase()) === 0) {
				usersFound.push(vm.typeUserSearch[i]);
				vm.users = usersFound;
			}
		}
	}
	return vm.users
}







// function searchDatabase(vm) {
// 	console.log('searching my nigga', vm.searchUserBy.toLowerCase().indexOf("mentor"));
// 	console.log(!/Mentor/i.test(vm.searchUserBy));
// 	var usersFound = [];
// 	for (var i = 0; i < vm.typeUserSearch.length; i++) {
// 		for (var x in vm.typeUserSearch[i]) {
// 			if (vm.typeUserSearch[i].hasOwnProperty(x)) {
// 				if (vm.searchUserBy === vm.typeUserSearch[i][x]) {
// 					usersFound.push(vm.typeUserSearch[i]);
// 					vm.users = usersFound;
// 				} else if (vm.typeUserSearch[i][x] === 'access_lvl') {}
// 			} //end of has ownProperty
// 		} //end of for loop var x
// 	} //end of for loop
// 	return vm.users;
// }
