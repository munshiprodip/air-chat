import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNewMessage,
  setActiveConversation,
} from "../../redux/actions/chatAction";
import Avater from "../Avater/Avater";
import ChatHistory from "./ChatHistory/ChatHistory";
import SideTopNav from "./SideTopNav/SideTopNav";

const SideBar = () => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const dispatch = useDispatch();
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/get-all-users`)
      .then(({ data }) => {
        const { user } = data.data;
        setAllUser(user);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

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
    <div className="sidebar">
      <SideTopNav></SideTopNav>
      <div className="sidebar-content">
        <ChatHistory></ChatHistory>

        <div className="chat-history">
          <h3 className="sidebar-title">Users</h3>
          {allUser.map((user) => (
            <div
              key={user._id}
              className="chat-single"
              onClick={() => startChat(user._id)}
            >
              <Avater user={user} />
              <div className="chat-info">
                <h3>
                  {user.name}
                  <span style={{ float: "right", fontSize: "10px" }}>
                    12:22 pm
                  </span>{" "}
                </h3>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
