import React from "react";
import TextField from "@mui/material/TextField";
import "../css/Chat.css";

const Chat = () => {
  return (
    <div className="main">
      <div className="fit">
        <div className="b1"></div>
        <div className="mid">
          <div>
            <div className="ct1">Sir, I have doubt in Maths</div>
            <div className="ct2">Okay, So what is the question?</div>
          </div>
        </div>
        <div className="textt">
          <div class="user1">
            <TextField
              placeholder="Type a message ..."
              className="userinp"
              id="outlined-basic"
            />
            <div className="CTA2">Send</div>
          </div>
        </div>
      </div>
      <div className="line">Get Your Doubt Solved With Expert Tutors! ✨</div>
    </div>
  );
};

export default Chat;
