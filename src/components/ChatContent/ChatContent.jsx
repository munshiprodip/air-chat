import React, { useEffect, useRef } from "react";
import ChatNav from "./ChatNav/ChatNav";

const ChatContent = () => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, []);
  return (
    <div className="content">
      {/* <ChatStart></ChatStart> */}
      <ChatNav></ChatNav>
      <div className="chat-body">
        <div className="message-container">
          <div className="messages">
            <p>Hello</p>
          </div>
          <div className="messages">
            <p>How are you?</p>
          </div>
          <div className="messages message-right">
            <p>I'm fine</p>
          </div>
          <div className="messages message-right">
            <p>What's you?</p>
          </div>

          <div className="messages">
            <p>I am so so.</p>
          </div>
          <div className="messages">
            <p>Hello</p>
          </div>
          <div className="messages">
            <p>How are you?</p>
          </div>
          <div className="messages message-right">
            <p>I'm fine</p>
          </div>
          <div className="messages message-right">
            <p>What's you?</p>
          </div>

          <div className="messages">
            <p>I am so so.</p>
          </div>
          <div className="messages">
            <p>Hello</p>
          </div>
          <div className="messages">
            <p>How are you?</p>
          </div>
          <div className="messages message-right">
            <p>I'm fine</p>
          </div>
          <div className="messages message-right">
            <p>What's you?</p>
          </div>

          <div className="messages">
            <p>I am so so.</p>
          </div>
          <div className="messages">
            <p>Hello</p>
          </div>
          <div className="messages">
            <p>How are you?</p>
          </div>
          <div className="messages message-right">
            <p>I'm fine</p>
          </div>
          <div className="messages message-right">
            <p>What's you?</p>
          </div>

          <div className="messages">
            <p>I am so so.</p>
          </div>
          <div className="messages">
            <p>Hello</p>
          </div>
          <div className="messages">
            <p>How are you?</p>
          </div>
          <div className="messages message-right">
            <p>I'm fine</p>
          </div>
          <div className="messages message-right">
            <p>What's you?</p>
          </div>

          <div className="messages">
            <p>I am so so.</p>
          </div>
          <div className="messages">
            <p>Hello</p>
          </div>
          <div className="messages">
            <p>How are you?</p>
          </div>
          <div className="messages message-right">
            <p>I'm fine</p>
          </div>
          <div className="messages message-right">
            <p>What's you?</p>
          </div>

          <div className="messages">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eum iste necessitatibus dolore rerum fugiat ut, nihil
              in vitae quas. Earum provident dignissimos porro architecto?
            </p>
          </div>
          <div className="messages">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eum iste necessitatibus dolore rerum fugiat ut, nihil
              in vitae quas. Earum provident dignissimos porro architecto?
            </p>
          </div>
          <div className="messages">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eum iste necessitatibus dolore rerum fugiat ut, nihil
              in vitae quas. Earum provident dignissimos porro architecto?
            </p>
          </div>
          <div className="messages message-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eum iste necessitatibus dolore rerum fugiat ut, nihil
              in vitae quas. Earum provident dignissimos porro architecto?
            </p>
          </div>
          <div className="messages message-right">
            <p>What's you?</p>
          </div>

          <div className="messages">
            <p>I am so so.</p>
          </div>
        </div>

        <div ref={messagesEndRef}></div>
      </div>
      <div className="chat-footer">
        <form style={{ width: "100%" }}>
          <div className="chat-form">
            <input type="text" name="" id="" />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatContent;
