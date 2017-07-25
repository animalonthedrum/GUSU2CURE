function hobbyController(UserInfoService) {
	var vm = this;
	var count = 0;

	vm.submit = function() {
		console.log('clicked ');
		var hobbies = document.getElementsByName('hobby');
		vm.hobbiesArr = [];

		//creates a date stamp
		var month = new Date().getMonth() + 1;
		var year = new Date().getFullYear();
		var day = new Date().getDate();
		var dateUserCreated = month + "/" + day + "/" + year;


		//adds hobbies to vm.hobbiesArr
		for (var i = 0; i < hobbies.length; i++) {
			if (hobbies[i].checked) {
				vm.hobbiesArr.push(hobbies[i].defaultValue);
			}
		} //end of for loop

		var hobbiesObject = {
			id: 'hobbies',
			hobbies: vm.hobbiesArr,
			dateStamp: dateUserCreated
		}; //end of hobbiesArr

		// count = checkObjectArr(hobbiesObject);

		//only runs if array has 3 or more items
		if (count === 0) {
			// UserInfoService.getUserInfo(hobbiesObject);
			UserInfoService.sendRegistration();
		} //end of conditional statement
	}; //end of submit
} //end of controller

//checks if array is valid
function checkObjectArr(object) {
	var count = 0;
	for (var x in object) {
		if (object.hasOwnProperty(x)) {
			if (object[x].length < 3) {
				sweetAlert({
					title: "Hobbies",
					text: "Please choose atleast three hobbies",
					type: "warning"
				}); //end of sweetAlert
				count++;
				break;
			}
		}
	}
	return count;
}
