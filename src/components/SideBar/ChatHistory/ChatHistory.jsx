import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatSingle from "../ChatSingle/ChatSingle";

const ChatHistory = () => {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/get-all-users`)
      .then(({ data }) => {
        const { user } = data.data;
        setAllUser(user);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="chat-history">
      <h3 className="sidebar-title">Chat</h3>
      {allUser.map((user) => (
        <ChatSingle key={user._id} user={user} />
      ))}
    </div>
  );
};

export default ChatHistory;
