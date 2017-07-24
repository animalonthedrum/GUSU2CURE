function bioController(UserInfoService, $window) {
	console.log('bioController');
	var vm = this;

	vm.submit = function() {
		console.log('clicked');
		var count = 0;
		console.log(vm.familyStatus);
		var bioObject = {
			id: "bio",
			relStatus: vm.relationshipStatus,
			famStatus: vm.familyStatus,
			edLevel: vm.educationLevel,
			lang: vm.language
		}; //end bio object

		//check if object has any err
		count = checkObject(bioObject);

		//only runs if err count is 0
		if (count === 0) {
			UserInfoService.getUserInfo(bioObject);
			window.location.href = '#!/question';
		}

	}; //end of submit button
}
