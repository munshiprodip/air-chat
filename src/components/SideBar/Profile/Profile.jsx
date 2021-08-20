import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../firebase/firebaseAuth";
import { showProfile } from "../../../redux/actions/authAction";

const Profile = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.loggedInUser);
  return (
    <div className="sidebar">
      <div className="close-button">
        <i className="fas fa-times" onClick={() => dispatch(showProfile())}></i>
      </div>
      <div className="profile-content">
        <div className="profile-details">
          <div className="avatar">
            <img src={authUser.photoUrl} alt="user" />
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
