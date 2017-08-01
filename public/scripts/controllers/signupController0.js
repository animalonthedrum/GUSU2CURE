function signupController(UserInfoService) {
	var vm = this;



	vm.submit = function() {
		var count = 0;
		vm.visitArray = [];
		var v = document.getElementsByName('visit');

		for (var i = 0; i < v.length; i++) {
			if (v[i].checked) {
				vm.visitType = v[i].defaultValue;

				vm.visitArray.push(vm.visitType);
			}
		} //end of loop

		//functionality for dates

		vm.userAge = new Date().getFullYear() - vm.dateBirth.getFullYear()
		vm.dateOfBirth = vm.dateBirth.getMonth() + "/" + vm.dateBirth.getDate() + "/" + vm.dateBirth.getFullYear();

		var signupObject = {
			id: 'signup',
			typeOfUser: vm.radioValue,
			dob: vm.dateOfBirth,
			gender: vm.gender,
			address: vm.address,
			city: vm.city,
			state: vm.state,
			zip: vm.zipcode,
			phone: vm.phone,
			phoneType: vm.phoneType,
			visitType: vm.visitArray,
			age:vm.userAge
		}; //end of signupObject


		//checks if object is filled out
		count = checkObject(signupObject);

		//only runs of object is correctly filled out
		if (count === 0) {
			UserInfoService.getUserInfo(signupObject);
			window.location.href = '#!/injury';
		}//end of conditional statements;


	}; //end of submit funciton
}


function checkObject(object) {
	var count = 0;
	for (var x in object) {
		if (object.hasOwnProperty(x)) {
			if (object[x] === undefined || object[x] === null || object[x] === " " || object[x] === "") {
				if (x === 'phone') {
					sweetAlert({
						title: "Error!",
						text: "Please enter a valid phone number",
						type: "warning"
					}); //end of sweetAlert;
					count++;
					break;
				} else if (x === 'firstName') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Your First Name",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'lastName') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Your Last Name",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'email') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter A Valid Email Address",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'terms') {
					sweetAlert({
						title: "Error!",
						text: "Please Agree To Terms And Conditions",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'typeOfUser') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Type of User",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'dob') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Date Of Birth",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'phoneType') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter A Phone Type",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'visitType') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter A Visit Type",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'sciRel') {
					sweetAlert({
						title: "Error!",
						text: "Please Choose Type Of Patient",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'trans_type') {
					sweetAlert({
						title: "Error!",
						text: "Please Choose transportation Type",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'injAge') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Injury Age",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'relStatus') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Relationship Status",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'famStatus') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Family Status",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}
				else if (x === 'edLevel') {
					sweetAlert({
						title: "Error!",
						text: "Please Enter Education Level",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'lang') {
					sweetAlert({
						title: "Error!",
						text: "Please Choose a Language",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}  else if (x === 'emp') {
					sweetAlert({
						title: "Error!",
						text: "Please Fill Out Occupation",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				} else if (x === 'heardAbout') {
					sweetAlert({
						title: "Error!",
						text: "How did you hear About Us",
						type: "warning"
					}); //end of sweetAlert
					count++;
					break;
				}


				else {
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
	if (object.password !== object.confirmPassword) {
		sweetAlert({
			title: "Error!",
			text: "Passwords do not match",
			type: "warning"
		}); //end of sweetAlert
		count++;
	}//end of object

	return count;
}
