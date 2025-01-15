// backend/config/firebase-config.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Update the path to your service account key

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://bloodbank-44825.firebaseio.com', // Update with your Firebase Database URL
});

// Export the auth instance
const auth = admin.auth();

module.exports = { auth };
