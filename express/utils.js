import jwt from "jsonwebtoken";

export const generateAccessToken = (data) => {
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ message: "JSON Token not found" });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
        if (err) return res.status(403).json({ message: err.message })

        next()
    })
}