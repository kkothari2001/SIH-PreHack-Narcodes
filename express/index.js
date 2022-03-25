import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

// Express client
const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

// Middleware
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "The server is UP and RUNNING" }));
app.use("/api", routes);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log("Express server listening on PORT:", port));