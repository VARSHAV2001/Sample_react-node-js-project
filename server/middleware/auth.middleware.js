const jwt = require('jsonwebtoken');

function authenticationMiddleware(req, res, next) {
    if (req.url.includes('/login')) {
        return next();
    }
    
    let token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({err: 'Unauthorized access'});
    }

    token = req.headers.authorization.split(' ')[1];
    
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedToken;
        return next();
    } catch (err) {
        return res.status(403).json({err});
    }
}

module.exports = {
    authenticationMiddleware
};