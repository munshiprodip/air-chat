import React from "react";
import Avater from "../../Avater/Avater";

const ChatSingle = () => {
  return (
    <div className="chat-single">
      <Avater></Avater>
      <div className="chat-info">
        <h3>
          Prodip M{" "}
          <span style={{ float: "right", fontSize: "10px" }}>12:22 pm</span>{" "}
        </h3>
        <p>I'm working on this project</p>
      </div>
    </div>
  );
};

export default ChatSingle;
