import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProfile } from "../../../redux/actions/authAction";

const SideTopNav = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.loggedInUser);
  return (
    <div className="sidebar-nav">
      <div className="avatar online" onClick={() => dispatch(showProfile())}>
        <img src={authUser.photoUrl} alt="user" />
      </div>
      <div className="search">
        <div className="input-group">
          <i className="fa fa-search icon"></i>
          <input className="input-field" type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default SideTopNav;
