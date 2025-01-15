// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { signup, login, signupWithGoogle, checkUser, googleLogin } = require('../Controllers/authController');



router.post('/signup', signup );

router.post('/login', login);   


router.post('/google-signup', signupWithGoogle);
router.post('/check-user', checkUser);

// router.post('/google-login', googleLogin);


// Routes for fetching states, districts, and cities
// router.get('/states', getStates);
// router.get('/districts/:stateCode', getDistricts);
// router.get('/cities/:stateCode/:districtCode', getCities);


module.exports = router;

