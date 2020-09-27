import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import React from "react";
import "../assets/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://i.ytimg.com/vi/F-8Gh2jHq-A/hqdefault.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="搜索或开始新的聊天" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
