const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    console.log(req.header)

    if (!token)
    return res.status(401).json({ error: 'Access denied, token missing' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(500).json({ message: "Invalid Token!", error });
    }
}

module.exports = verifyToken;