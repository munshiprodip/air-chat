import React from "react";
import Avater from "../../Avater/Avater";

const ChatSingle = ({ user }) => {
  return (
    <div className="chat-single">
      <Avater img={user.photoUrl} />
      <div className="chat-info">
        <h3>
          {user.name}
          <span style={{ float: "right", fontSize: "10px" }}>
            12:22 pm
          </span>{" "}
        </h3>
        <p>I'm working on this project</p>
      </div>
    </div>
  );
};

export default ChatSingle;
