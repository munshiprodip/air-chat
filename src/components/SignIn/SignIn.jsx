import React from "react";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../../firebase/firebaseAuth";
import { setLoggedIn, setLoggedOut } from "../../redux/actions/authAction";

const SignIn = () => {
  const dispatch = useDispatch();

  const googleAuth = async () => {
    const user = await signInWithGoogle();
    if (user.loggedIn) {
      dispatch(setLoggedIn(user));
    } else {
      dispatch(setLoggedOut({}));
    }
  };

  return (
    <div className="chat-start">
      <div className="chat-icon">
        <i className="far fa-comment-alt"></i>
      </div>
      <p>Sign In to Start Conversation</p>
      <button type="button" className="signin-btn" onClick={googleAuth}>
        Signin with google
      </button>
    </div>
  );
};

export default SignIn;
