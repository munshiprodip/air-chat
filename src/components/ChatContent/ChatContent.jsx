import React from "react";
import { useSelector } from "react-redux";
import ChatBody from "./ChatBody/ChatBody";
import ChatStart from "./ChatStart/ChatStart";

const ChatContent = () => {
  const { chatOpen } = useSelector((state) => state.chat);

  return (
    <div className="content">{!chatOpen ? <ChatStart /> : <ChatBody />}</div>
  );
};

export default ChatContent;
