const jwt = require('jsonwebtoken')
import { config as dotenv } from "dotenv";
dotenv();

export const validateToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            error: 'No token provided'
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            error: 'Invalid token'
        });
    }
}
