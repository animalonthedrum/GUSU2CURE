function injuryController() {
    var vm = this;
    var count = 0;
    vm.submit = function() {
        console.log('clicked');

        injuryObject = {
            "SCI Relation": vm.sciRelation,
            cause: vm.cause,
            "Year of Injury":vm.yearInjury,
            level: vm.level,
            "ASIA Score": vm.asia,

        };

        count = checkOBject(injuryObject);

        if (count ===0) {
            console.log('object is ready', injuryObject);
        }
    };//end of submit
}

function checkOBject(object) {
    var count =0;
    for(var x in object) {
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
