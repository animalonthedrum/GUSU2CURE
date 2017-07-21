function injuryController() {
  var vm = this;
  var count = 0;
  vm.levelArray = [];

  vm.submit = function() {
    console.log('clicked');

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
      "SCI Relation": vm.sciRelation,
      cause: vm.cause,
      "Year of Injury": vm.yearInjury,
      level: vm.levelArray,
      "ASIA Score": vm.asia,
    };

    count = checkOBject(injuryObject);

    if (count === 0) {
      console.log('object is ready', injuryObject);
    }
  }; //end of submit
}

function checkOBject(object) {
  var count = 0;
  for (var x in object) {
    if (object.hasOwnProperty(x)) {
      if (object[x] === undefined || object[x] === null || object[x] === "") {
        alert('Please fill out ' + x);
        count++;
        break;
      }
    }
  }
  return count;
}
