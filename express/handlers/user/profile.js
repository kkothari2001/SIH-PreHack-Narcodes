import db from "../../models/index.js";

export const getProfile = async (req, res) => {
    try {
        const user = await db.User.findById(req.params.id);
        return res.status(200).json({
            data: {
                user
            }
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

export const editProfile = async (req, res) => {
    try {
        const user = await db.User.findByIdAndUpdate(
            req.params.id,
            req.body.data,
            { new: true }
        );

        return res.status(200).json({
            user
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}