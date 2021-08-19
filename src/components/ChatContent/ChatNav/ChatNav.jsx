import React from "react";

const ChatNav = () => {
  return (
    <div className="chat-nav">
      <div className="avatar">
        <img src="./images/user1.png" alt="user" />
      </div>
      <div className="user-info">
        <p>Md. Najmul Alom</p>
        <small>online</small>
      </div>
    </div>
  );
};

export default ChatNav;
