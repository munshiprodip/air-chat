import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decoratErr } from "../../lib/helpers/helpers";
import { setLoggedIn } from "../../redux/actions/authAction";

const LoginForm = () => {
  const [formError, setFormError] = useState();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        inputData
      );
      const { user } = res.data.data;
      dispatch(setLoggedIn(user));
    } catch (error) {
      const { errors } = error.response.data;
      setFormError(decoratErr(errors));
    }
  };

  return (
    <>
      <div className="sidebar"></div>

      <div className="chat-start">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="d-flex">
            <input
              name="email"
              className="input-primary"
              type="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <small className="input-error">{formError?.email}</small>
          <div className="d-flex">
            <input
              name="password"
              className="input-primary"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <small className="input-error">{formError?.password}</small>

          <div className="d-flex mt-20">
            <input className="button-secondary" type="reset" value="Cancel" />
            <input className="button-primary" type="submit" value="Login" />
          </div>

          <div className="d-flex">
            <div className="form-footer">
              Dont hav an account? <Link to="/register">Sign up</Link>{" "}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
