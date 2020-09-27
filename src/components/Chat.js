import React, { useState } from "react";
import "../assets/Chat.css";
import axios from "../axios";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const time = new Date().toLocaleTimeString();

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      name: "user1",
      message: input,
      timestamp: time,
      received: true,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((msg) => (
          <p className={`chat__message ${msg.received && "chat__reciever"}`}>
            <span className="chat__name">{msg.name}</span>
            {msg.message}
            <span className="chat__timestamp ">{msg.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="输入文字"
          />
          <button onClick={sendMessage} type="submit">
            发送
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
