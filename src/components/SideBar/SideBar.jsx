import axios from "axios";
import React, { useEffect, useState } from "react";
import Avater from "../Avater/Avater";
import ChatHistory from "./ChatHistory/ChatHistory";
import SideTopNav from "./SideTopNav/SideTopNav";

const SideBar = () => {
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
    <div className="sidebar">
      <SideTopNav></SideTopNav>
      <div className="sidebar-content">
        <ChatHistory></ChatHistory>

        <div className="chat-history">
          <h3 className="sidebar-title">Users</h3>
          {allUser.map((user) => (
            <div key={user.id} className="chat-single">
              <Avater img={user.photoUrl} />
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
