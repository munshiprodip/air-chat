import React from "react";

const Avater = ({ img }) => {
  return (
    <div className="avatar online">
      <img src={`${process.env.REACT_APP_API_URL}/avaters/${img}`} alt="user" />
    </div>
  );
};

export default Avater;
