import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        chat_id: {
            type: String,
            required: true
        },
        chatroom_id: {
            type: String,
            required: true
        },
        userFrom: {
            type: String,
            required: true
        },
        userTo: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;