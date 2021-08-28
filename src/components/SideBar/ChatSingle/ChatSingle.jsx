import axios from "axios";
import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import {
  resetNewMessage,
  setActiveConversation,
} from "../../../redux/actions/chatAction";
import Avater from "../../Avater/Avater";

const ChatSingle = ({ conversation }) => {
  const dispatch = useDispatch();
  const startChat = (participant_id) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/message/new-conversation`, {
        participant_id: participant_id,
      })
      .then(({ data }) => {
        const { receiver, messages, conversation } = data.data;
        dispatch(resetNewMessage([]));
        dispatch(setActiveConversation({ receiver, messages, conversation }));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="chat-single"
      onClick={() => startChat(conversation.currentReceiver._id)}
    >
      <Avater user={conversation.currentReceiver} />
      <div className="chat-info">
        <h3>
          {conversation.currentReceiver.name}
          <span style={{ float: "right", fontSize: "10px" }}>
            {conversation.message && (
              <Moment date={conversation.message.createdAt} fromNow />
            )}
          </span>{" "}
        </h3>
        <p>
          {conversation.message?.text.length > 20
            ? conversation.message?.text.substring(0, 20) + "..."
            : conversation.message?.text}{" "}
        </p>
      </div>
    </div>
  );
};

export default ChatSingle;
