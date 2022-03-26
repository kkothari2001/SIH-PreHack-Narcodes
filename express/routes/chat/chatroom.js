import express from "express";
import Chatroom from "../../models/Chatroom";
import { v4 as uuid } from "uuid";

const router = express.Router();

router.post("/chatroom/create", (req, res) => {
    const { user1, user2 } = req.body;
    Chatroom
        .find({
            "user1": { $in: [user1, user2] },
            "user2": { $in: [user1, user2] },
        })
        .exec((err, doc) => {
            if (err) res.sendStatus(500);
            else if (doc.length > 0) res.json({ chatroom_id: doc[0].chatroom_id })
            else {
                const chatroom_id = uuid();
                const chatroom = new Chatroom({ chatroom_id, user1, user2 });
                chatroom.save();
                res.json({ chatroom_id: "" });
            }
        })
})

router.get("/chatrooms/fetch/:user", (req, res) => {
    Chatroom
        .find({
            $or: [
                { user1: req.params.user },
                { user2: req.params.user }
            ]
        })
        // .sort('-createdAt')
        .exec((err, docs) => {
            if (err) res.sendStatus(500)
            const users = docs.map(val => {
                if (val.user1 === req.params.user) {
                    return {
                        ...val,
                        user: val.user2
                    }
                }
                else {
                    return {
                        ...val,
                        user: val.user1
                    }
                }
            })
            res.json(users);
        })
})

router.get("/chats/fetch/:chatroom_id", (req, res) => {
    Chat
        .find({ chatroom_id: req.params.chatroom_id })
        .sort('createdAt')
        .exec((err, docs) => {
            if (err) res.sendStatus(500)

            res.json(docs);
        })
})