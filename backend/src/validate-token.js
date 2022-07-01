const jwt = require('jsonwebtoken')
import { config as dotenv } from "dotenv";
dotenv();

export const validateToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({
            error: 'No token provided'
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded.userID;
        req.tunaid = decoded.tunaID;
        req.role = decoded.role;
        next();
    } catch (err) {
        console.log(err)
        return res.status(401).json({
            error: 'Invalid token'
        });
    }
}
