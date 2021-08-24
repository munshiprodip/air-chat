import React from "react";
import { useSelector } from "react-redux";
import ChatContent from "../../components/ChatContent/ChatContent";
import Profile from "../../components/SideBar/Profile/Profile";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  const showProfile = useSelector((state) => state.auth.showProfile);
  return (
    <>
      {showProfile ? <Profile /> : <SideBar />}
      <ChatContent />
    </>
  );
};

export default Home;
