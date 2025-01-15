const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret-123'; // Replace with your actual JWT secret

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header

    if (!token) return res.sendStatus(401); // Unauthorized if no token

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden if token is invalid
        req.user = user; // Attach user info to request
        next(); // Proceed to next middleware or route handler
    });
};

module.exports = authenticateToken;