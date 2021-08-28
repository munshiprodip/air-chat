import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socketIo } from "../../../App";
import { setNewMessages } from "../../../redux/actions/chatAction";
import ChatNav from "../ChatNav/ChatNav";

const ChatBody = () => {
  const dispatch = useDispatch();
  const timerRef = useRef(null);
  const [typing, setTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const { activeConversation, receiver, messages, chatOpen, newMessages } =
    useSelector((state) => state.chat);

  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    socketIo.on("message-sent", function (message) {
      if (message.conversation === activeConversation._id) {
        dispatch(setNewMessages(message));
      }
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [newMessages]);

  //on change, start the countdown
  const startTyping = () => {
    if (!typing) {
      socketIo.emit("typing", { userId: loggedInUser.id, status: true });
      setTyping(true);
      console.log("start typing...");
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      socketIo.emit("typing", { userId: loggedInUser.id, status: false });
      setTyping(false);
      console.log("stop typing");
    }, 2000);
  };

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
          setInputMessage("");
        })
        .catch((error) => console.log(error));
    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    startTyping();
  };

  return (
    <>
      <ChatNav receiver={receiver} typing={typing} />

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

          {newMessages.map((message) => (
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
              onChange={handleInputChange}
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
