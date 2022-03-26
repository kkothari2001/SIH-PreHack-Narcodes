import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import { Server } from "socket.io";
import { v4 as uuid } from "uuid";
import Chat from "./models/Chat.js";
import dotenv from "dotenv";
dotenv.config();

// Express client
const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "The server is UP and RUNNING" }));
app.use("/api", routes);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log("Express server listening on PORT:", port));

const io = new Server(server);
io.on('connection', (socket) => {
    console.log("Created new socket connection", socket.id);

    socket.on("room", (chatroom_id) => {
        socket.join(chatroom_id);
    })

    socket.on("send", (data) => {
        const chat_id = uuid();
        const docs = {
            chat_id,
            chatroom_id: data.chatroom_id,
            userFrom: data.userFrom,
            userTo: data.userTo,
            text: data.text
        }

        const chat = Chat({
            ...docs
        })
        chat.save();
        io.to(data.chatroom_id).emit('message', docs);
    })
})