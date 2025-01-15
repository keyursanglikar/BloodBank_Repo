const admin = require('firebase-admin'); // Adjust the path accordingly

const serviceAccount = require('../config/serviceAccountKey.json'); // Path to your Firebase service account key

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), // Use .cert() method to initialize with the service account
    databaseURL: "https://bloodbank-44825.firebaseio.com" // Correct URL for the Realtime Database
});

module.exports = admin;
