import React, { useEffect, useState } from "react";
import { socketIo } from "../../../App";

const ChatNav = ({ receiver }) => {
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    socketIo.on("receiver-typing", function (data) {
      if (receiver._id === data.userId) {
        setTyping(data.status);
      }
    });
  }, []);
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
        {typing ? <small>typing...</small> : <small>online</small>}
      </div>
    </div>
  );
};

export default ChatNav;
