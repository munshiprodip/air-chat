import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SignIn from "../../components/SignIn/SignIn";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();
  if (isLoggedIn) {
    history.push("/");
  }
  return (
    <>
      <div className="sidebar"></div>
      <SignIn></SignIn>
    </>
  );
};

export default Login;
