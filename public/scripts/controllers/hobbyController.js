function hobbyController(UserInfoService) {
  var vm = this;
  var count = 0;
  vm.hobbiesArr = [];
  vm.active = false;


  vm.submitHobby = function(index) {
    vm.hobbiesArr.push(vm.hobbyArr[index].name);
  }; //end of submitHobby function



  vm.submit = function() {
    var hobbies = document.getElementsByName('hobby');
    vm.hobbiesArr.push(vm.otherHobby);


    //creates a date stamp

    //adds hobbies to vm.hobbiesArr

    for (var i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) {
        vm.hobbiesArr.push(hobbies[i].defaultValue);
      }
      swal(
        'Thank You For Signing Up!',
        'Login to create a profile',
        'success'
      );
    } //end of for loop

    vm.hobbiesArr = checkArr(vm.hobbiesArr);
    console.log(vm.hobbiesArr);

    var hobbiesObject = {
      id: 'hobbies',
      hobbies: vm.hobbiesArr,
      dateStamp: new Date(),
      img: "images/gusu-SIGNUP.png"
    }; //end of hobbiesArr
    count = checkObjectArr(hobbiesObject);

    //only runs if array has 3 or more items
    if (count === 0) {
      UserInfoService.getUserInfo(hobbiesObject);
      window.location.href = '#!/register';
    } //end of conditional statement
  }; //end of submit


  vm.hobbyArr = [{
      name: 'Baking',
      url: 'images/gusustock/baking.jpg',
    },
    {
      name: 'Billards',
      url: 'images/gusustock/billiards2.jpg'
    },
    {
      name: 'Fishing',
      url: 'images/gusustock/fishing.jpg'
    },
    {
      name: 'Cooking',
      url: 'images/gusustock/cooking.jpg'
    },
    {
      name: 'Reading',
      url: 'images/gusustock/reading.jpg'
    },
    {
      name: 'Writing',
      url: 'images/gusustock/writing.jpg'
    },
    {
      name: 'Crafts',
      url: 'images/gusustock/crafts.jpg'
    },
    {
      name: 'Wilderness/Hiking',
      url: 'images/gusustock/hiking.jpg'
    },
    {
      name: 'Photography',
      url: 'images/gusustock/photo.jpg'
    },
    {
      name: 'Board/Video Games',
      url: 'images/gusustock/gaming.jpg'
    },
    {
      name: 'Drawing',
      url: 'images/gusustock/drawing.jpg'
    },
    {
      name: 'Beer/Wine',
      url: 'images/gusustock/beerandwine.jpg'
    },
    {
      name: 'Painting',
      url: 'images/gusustock/painting.jpg'
    },
    {
      name: 'Sports/Recreation',
      url: 'images/gusustock/hockey.png'
    },
    {
      name: 'Gardening',
      url: 'images/gusustock/gardening.jpg'
    },
    {
      name: 'Swimming',
      url: 'images/gusustock/swimming.jpg'
    },
    {
      name: 'Traveling',
      url: 'images/gusustock/traveling.jpg'
    },
    {
      name: 'Movies/Television',
      url: 'images/gusustock/movies.jpg'
    },
    {
      name: 'Music',
      url: 'images/gusustock/music.jpg'
    }

  ]; //end hoobyArr

} //end of controller


function checkArr(array) {
  var tmp = [];
  for (var i = 0; i < array.length; i++) {
    if (tmp.indexOf(array[i]) == -1) {
      tmp.push(array[i]);
    }
  }
  return tmp;
} //end of checkArr




//checks if array is valid
function checkObjectArr(object) {
  var count = 0;
  for (var x in object) {
    if (object.hasOwnProperty(x)) {

      if (object[x].length <= 3) {
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
