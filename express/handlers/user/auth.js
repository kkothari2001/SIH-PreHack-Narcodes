import db from "../../models/index.js";
import { generateAccessToken } from "../../utils.js";

export const signup = async (req, res) => {
    try {
        const user = await db.User.create({
            ...req.body.data
        })
    
        return res.status(200).json({
            user
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
}

export const signin = async (req, res) => {
    try {
        const { password } = req.body.data;
        delete req.body.data.password;

        const user = await db.User.findOne(req.body.data);
        if (user.comparePassword(password)) {
            const token = generateAccessToken(user.toJSON());
            return res.status(200).json({
                _id: user._id,
                token
            });
        }
        else {
            return res.status(400).json({
                message: "Wrong Password!"
            });
        }
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
}