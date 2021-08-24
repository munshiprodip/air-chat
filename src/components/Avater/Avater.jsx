import React from "react";

const Avater = ({ user }) => {
  return (
    <div className= {`${user.isOnline? "online": ""} avatar`}>
      <img src={`${process.env.REACT_APP_API_URL}/avaters/${user.photoUrl}`} alt="user" />
    </div>
  );
};

export default Avater;
