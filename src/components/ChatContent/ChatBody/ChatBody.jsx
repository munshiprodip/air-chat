import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import ChatNav from "../ChatNav/ChatNav";

const ChatBody = () => {
  const [newMessage, setNewMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const { activeConversation, receiver, messages, chatOpen } = useSelector(
    (state) => state.chat
  );

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const socket = io("/");
  useEffect(() => {
    scrollToBottom();

    socket.on("message-sent", function (message) {
      if (message.conversation === activeConversation._id) {
        setNewMessage([...newMessage, message]);
      }
    });
    return () => {
      socket.disconnect();
    };
  });

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.replace(/\s/g, "")) {
      const data = {
        conversation: activeConversation._id,
        receiver: receiver._id,
        text: inputMessage,
      };
      axios
        .post(`/message/new-message`, data)
        .then((res) => {
          console.log(res);
          setInputMessage("");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <ChatNav receiver={receiver} />

      <div className="chat-body">
        <div className="message-container">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`${
                message.sender === receiver._id
                  ? "messages"
                  : "messages message-right"
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))}

          {newMessage.map((message) => (
            <div
              key={message._id}
              className={`${
                message.sender === receiver._id
                  ? "messages"
                  : "messages message-right"
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div ref={messagesEndRef}></div>
      </div>
      <div className="chat-footer">
        <form style={{ width: "100%" }} onSubmit={sendMessage}>
          <div className="chat-form">
            <input
              onChange={(e) => setInputMessage(e.target.value)}
              type="text"
              name=""
              id=""
              value={inputMessage}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBody;
