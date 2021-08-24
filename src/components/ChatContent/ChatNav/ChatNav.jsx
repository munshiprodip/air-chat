import React from "react";

const ChatNav = ({ receiver, typing }) => {
  return (
    <div className="chat-nav">
      <div className="avatar">
        <img
          src={`${process.env.REACT_APP_API_URL}/avaters/${receiver.photoUrl}`}
          alt="user"
        />
      </div>
      <div className="user-info">
        <p>{receiver.name}</p>
        <small>online</small>
      </div>
    </div>
  );
};

export default ChatNav;
