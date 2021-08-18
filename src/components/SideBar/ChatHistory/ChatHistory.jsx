import React from "react";
import ChatSingle from "../ChatSingle/ChatSingle";

const ChatHistory = () => {
  return (
    <div className="chat-history">
      <h3 className="sidebar-title">Chat</h3>
      <ChatSingle></ChatSingle>
      <ChatSingle></ChatSingle>
      <ChatSingle></ChatSingle>
      <ChatSingle></ChatSingle>
    </div>
  );
};

export default ChatHistory;
