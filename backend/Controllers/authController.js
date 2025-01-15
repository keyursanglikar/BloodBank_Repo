// backend/controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret-123'; 
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client( process.env.REACT_APP_GOOGLE_CLIENT_ID);


// Signup Controller
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

const signupWithGoogle = async (req, res) => {
    try {
        const { username, email, uid, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists. Please log in.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            uid,
            password: hashedPassword // Store hashed password
        });
        await newUser.save();

        res.status(201).json({ message: 'User signed up successfully with Google!' });
    } catch (error) {
        console.error('Google signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};




const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        // Send token to client
        res.json({ jwtToken: token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};


// const googleLogin = async (req, res) => {
//     try {
//         const { token } = req.body;
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience:  process.env.REACT_APP_GOOGLE_CLIENT_ID
//         });
//         const payload = ticket.getPayload();
//         const email = payload.email;

//         // Optionally, check if the user exists in your DB and register if not
//         const jwtToken = jwt.sign({ email }, 'JWT_SECRET', { expiresIn: '24h' });
//         res.json({ jwtToken });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ message: 'Google login failed' });
//     }
// };


// Check User Controller
const checkUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ exists: true });
        }
        return res.json({ exists: false });
    } catch (error) {
        console.error('Error checking user:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};



const fetchStates = async () => {
    try {
        const states = await State.find({});
        return states.map(state => ({
            name: state.name,
            code: state.code
        }));
    } catch (error) {
        throw new Error("Error fetching states: " + error.message);
    }
};

// Fetch districts based on state code from the database
const fetchDistricts = async (stateCode) => {
    try {
        const districts = await District.find({ stateCode: stateCode });
        return districts.map(district => ({
            name: district.name,
            code: district.code
        }));
    } catch (error) {
        throw new Error("Error fetching districts: " + error.message);
    }
};

// Fetch cities based on state and district codes from the database
const fetchCities = async (stateCode, districtCode) => {
    try {
        const cities = await City.find({ stateCode: stateCode, districtCode: districtCode });
        return cities.map(city => ({
            name: city.name,
            code: city.code
        }));
    } catch (error) {
        throw new Error("Error fetching cities: " + error.message);
    }
};
module.exports={
    signupWithGoogle,
    login,
    signup,
    checkUser,
    fetchStates,
    fetchDistricts,
    fetchCities,
    // googleLogin
}