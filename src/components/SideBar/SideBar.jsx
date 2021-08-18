import React from "react";
import ChatHistory from "./ChatHistory/ChatHistory";
import SideTopNav from "./SideTopNav/SideTopNav";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideTopNav></SideTopNav>
      <div className="sidebar-content">
        <ChatHistory></ChatHistory>
      </div>
    </div>
  );
};

export default SideBar;
