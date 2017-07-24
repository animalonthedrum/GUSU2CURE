function signupController(UserInfoService, $window) {
	var vm = this;



	vm.submit = function() {
		var count = 0;
		vm.visitArray = [];
		var v = document.getElementsByName('visit');

		for (var i = 0; i < v.length; i++) {
			if (v[i].checked) {
				console.log('this is true');
				vm.visitType = v[i].defaultValue;

				console.log(vm.visitType);
				vm.visitArray.push(vm.visitType);
			}
		} //end of loop

		var signupObject = {
			id: 'signup',
			typeOfUser: vm.radioValue,
			dob: vm.dateBirth,
			gender: vm.gender,
			address: vm.address,
			city: vm.city,
			state: vm.state,
			zipcode: vm.zipcode,
			phone: vm.phone,
			phoneType: vm.phoneType,
			visitType: vm.visitArray
		}; //end of signupObject

		//checks if object is filled out
		count = checkObject(signupObject);

		//only runs of object is correctly filled out
		if (count === 0) {
			console.log('object is ok');
			UserInfoService.getUserInfo(signupObject);
			$window.location.href = '#!/injury';
		}


	}; //end of submit funciton
}


function checkObject(object) {
	var count = 0;
	for (var x in object) {
		if (object.hasOwnProperty(x)) {
			if (object[x] === undefined || object[x] === null || object[x] === " ") {
				if (x === 'phone') {
					sweetAlert({
						title: "Error!",
						text: "Please enter a valid phone number",
						type: "warning"
					}); //end of sweetAlert;
					count++;
					break;
				} else if (x === 'Type of User') {
					sweetAlert({
						title: "Error!",
						text: "Please choose type of user",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'Date of birth') {
					sweetAlert({
						title: "Error!",
						text: "Please fill out your date of birth",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else {
					sweetAlert({
						title: "Error!",
						text: "Please fill out " + x,
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
			} //end of if
		} //end of if hasOwnProperty
	} //emd of for loop
	return count;
}
