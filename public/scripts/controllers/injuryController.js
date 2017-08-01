function injuryController(UserInfoService, menuService, $window) {
	var vm = this;
	var count = 0;


	vm.submit = function() {
		vm.levelArray = [];

		var l = document.getElementsByName('level');

		for (var i = 0; i < l.length; i++) {
			if (l[i].checked) {
				vm.levelType = l[i].defaultValue;

				vm.levelArray.push(vm.levelType);
			}
		} //end of loop

		injuryObject = {
			id: 'injury',
			sciRel: vm.sciRelation,
			cause: vm.cause,
			injAge: vm.injAge,
			level: vm.injLevel,
			asia: vm.asia,
			mobility: vm.mobility,
			trans_type: vm.trans
		};

		count = checkObject(injuryObject);

		if (count === 0) {
			UserInfoService.getUserInfo(injuryObject);
			window.location.href = '#!/bio';
		}
	}; //end of submit


	// START getSciRelMenu
	vm.getSciRelMenu = function() {
		menuService.getSciRelMenu().then(function() {
			menuService.sci_rel;
			vm.sci_rel = menuService.sci_rel;
			// console.log('ic:45', vm.sci_rel);
		});
	}
	// END getSciRelMenu

	// START getSciCauseMenu
	vm.getSciCauseMenu = function() {
		menuService.getSciCauseMenu().then(function() {
			vm.sci_cause = menuService.sci_cause;
		});
	}
	// END getSciCauseMenu

	// START getTransTypeMenu
	vm.getTransTypeMenu = function() {
		menuService.getTransTypeMenu().then(function() {
			vm.trans_type = menuService.trans_type;
		});
	}
	// END getTransTypeMenu


} // END of injuryController
