function injuryController(UserInfoService, menuService, $window) {
	var vm = this;
	var count = 0;


	vm.submit = function() {
		console.log('clicked');
		vm.levelArray = [];

		var l = document.getElementsByName('level');

		for (var i = 0; i < l.length; i++) {
			if (l[i].checked) {
				console.log('this is true');
				vm.levelType = l[i].defaultValue;

				console.log(vm.levelType);
				vm.levelArray.push(vm.levelType);
			}
			console.log(l[i].checked);
		} //end of loop

		injuryObject = {
			id: 'injury',
			sciRel: vm.sciRelation,
			cause: vm.cause,
			injAge: vm.injAge,
			level: vm.levelArray,
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
			console.log(vm.trans_type);
		});
	}
	// END getTransTypeMenu


} // END of injuryController
