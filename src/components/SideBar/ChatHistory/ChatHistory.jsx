import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllConversation } from "../../../redux/actions/chatAction";
import ChatSingle from "../ChatSingle/ChatSingle";

const ChatHistory = () => {
  const dispatch = useDispatch();
  const { allConversations } = useSelector((state) => state.chat);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/message/get-all-conversation`)
      .then(({ data }) => {
        const { conversations, msg } = data.data;
        console.log(msg);
        dispatch(setAllConversation(msg));
      })
      .catch((error) => console.log(error.response));
  }, []);
  return (
    <div className="chat-history">
      <h3 className="sidebar-title">Chat</h3>
      {allConversations.map(
        (conversation) =>
          conversation.message && (
            <ChatSingle
              key={conversation.currentReceiver._id}
              conversation={conversation}
            />
          )
      )}
    </div>
  );
};

export default ChatHistory;
