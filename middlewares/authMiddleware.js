const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if(!token){
        return res.status({ error: "Access Denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(500).json({ error: "Invalid Token!" });
    }
}

module.exports = verifyToken;