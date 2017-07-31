/* REQUIRES for matching.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.use(bodyParser.json());

/* dB Config */
var config = {
	database: 'db_gusu',
	host: 'localhost',
	port: '5432',
	max: 20
};

var pool = new pg.Pool(config);

var matchUserType = userType;
var matchAgeX = userAge - Math.ceil(userAge - ((userAge / 1.75) + 7));
var matchAgeY = userAge + Math.ceil(userAge - ((userAge / 1.75) + 7));
var matchSciAge = sci_age + /-5;
var matchUserZIP = usersZipCode.slice(0, 2) + '%';

console.log('matchUserType:', matchUserType);
console.log('matchAgeX:', matchAgeX);
console.log('matchAgeY:', matchAgeY);
console.log('matchSciAge:', matchSciAge);
console.log('matchUserZIP:', matchUserZIP);

// switch (userAge) {
// 	case userAge < 2:
// 		ageX = 0;
// 		ageY = 1;
// 		break;
// 	case userAge > 1 && userAge < 5:
// 		ageX = 2;
// 		ageY = 4;
// 		break;
// 	case userAge > 4 && userAge < 8:
// 		ageX = 5;
// 		ageY = 7;
// 		break;
// 	case userAge > 6 && userAge < 10:
// 		ageX = 7;
// 		ageY = 9;
// 		break;
// 	case userAge > 9 && userAge < 13:
// 		ageX = 10;
// 		ageY = 12;
// 		break;
// 	case userAge > 11 && userAge < 18:
// 		ageX = 12;
// 		ageY = 17;
// 		break;
// 	case userAge > 17 && userAge < 23:
// 		ageX = 18;
// 		ageY = 22;
// 		break;
// 	case userAge > 21 && userAge < 30:
// 		ageX = 22;
// 		ageY = 29;
// 		break;
// 	case userAge > 29 && userAge < 39:
// 		ageX = 30;
// 		ageY = 38;
// 		break;
// 	case userAge > 38 && userAge < 47:
// 		ageX = 39;
// 		ageY = 46;
// 		break;
// 	case userAge > 46 && userAge < 55:
// 		ageX = 47;
// 		ageY = 54;
// 		break;
// 	case userAge > 54 && userAge < 66:
// 		ageX = 55;
// 		ageY = 65;
// 		break;
// 	case userAge > 65:
// 		ageX = 66;
// 		ageY = 150;
// 		break;
// }


var asia = asia;




// START GET matchingUsers
router.get('/', function(req, res) {
	console.log('viewMatchNonMatched ');
	pool.connect().then(function(client) {
			client.query("SELECT * FROM tbl_user WHERE access_lvl NOT IN ('" + userType + "', '3') AND matched = '" + matchedType + "';").then(function(matchedUsers) {
				client.release();
				res.send(matchedUsers.rows);
			});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500);
		});

});
// END GET matchingUsers

/* Exports for matching */
module.exports = router;
