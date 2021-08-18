import React from "react";

const SideTopNav = () => {
  return (
    <div className="sidebar-nav">
      <div className="avatar">
        <img src="./images/user1.png" alt="user" />
      </div>
      <div className="search">
        <div class="input-group">
          <i class="fa fa-search icon"></i>
          <input class="input-field" type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default SideTopNav;
