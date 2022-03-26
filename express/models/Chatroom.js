import mongoose from "mongoose";

const chatroomSchema = new mongoose.Schema(
    {
        chatroom_id: {
            type: String,
            required: true
        },
        user1: {
            type: String,
            required: true
        },
        user2: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Chatroom = mongoose.model("Chatroom", chatroomSchema);
export default Chatroom;