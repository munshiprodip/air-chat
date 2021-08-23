import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decoratErr } from "../../lib/helpers/helpers";
import { setLoggedIn } from "../../redux/actions/authAction";

const Register = () => {
  const [inputData, setInputData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [formError, setFormError] = useState({});
  const dispatch = useDispatch();

  const fileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedFile) {
      formData.append("photoUrl", selectedFile, selectedFile.name);
    }
    Object.keys(inputData).forEach((key) => {
      formData.append(key, inputData[key]);
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        formData
      );
      console.log(res);
      const { user } = res.data.data;
      dispatch(setLoggedIn(user));
    } catch (error) {
      const { errors } = error.response.data;

      console.log(errors);
      setFormError(decoratErr(errors));
    }
  };

  return (
    <>
      <div className="sidebar"></div>

      <div className="chat-start">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="d-flex">
            <input
              name="name"
              className="input-primary"
              type="text"
              placeholder="Full Name"
              onChange={handleInputChange}
            />
          </div>
          <small className="input-error">{formError?.name}</small>
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
          <div className="d-flex">
            <select
              name="gender"
              className="input-primary"
              onChange={handleInputChange}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <small className="input-error">{formError?.gender}</small>
          <div className="d-flex custom-file-group">
            <label htmlFor="file-upload" className="custom-file-upload">
              Select Photo
            </label>
            <input
              name="avatars"
              id="file-upload"
              className="input-primary"
              type="file"
              placeholder="Select photo"
              onChange={fileHandler}
            />
          </div>
          <small className="input-error">{formError?.photoUrl}</small>
          <div className="d-flex mt-20">
            <input className="button-secondary" type="reset" value="Clear" />
            <input className="button-primary" type="submit" value="Signup" />
          </div>

          <div className="d-flex">
            <div className="form-footer">
              Have an account? <Link to="/login">Sign in</Link>{" "}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
