import { Avatar } from "@material-ui/core";
import React from "react";
import "../assets/SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the test message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
