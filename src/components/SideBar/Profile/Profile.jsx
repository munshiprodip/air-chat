import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedOut, showProfile } from "../../../redux/actions/authAction";

const Profile = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.loggedInUser);
  const signOut = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`)
      .then((res) => {
        dispatch(setLoggedOut({}));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sidebar">
      <div className="close-button">
        <i className="fas fa-times" onClick={() => dispatch(showProfile())}></i>
      </div>
      <div className="profile-content">
        <div className="profile-details">
          <div className="avatar">
            <img
              src={`${process.env.REACT_APP_API_URL}/avaters/${authUser.photoUrl}`}
              alt="user"
            />
          </div>
          <p className="profile-name">{authUser.name}</p>
          <p className="profile-mail">{authUser.email}</p>
        </div>

        <div className="profile-footer">
          <button className="btn-signout" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
