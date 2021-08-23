import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setLoggedIn,
  setLoggedOut,
} from "../../redux/actions/authAction";
import Preloader from "../Preloader/Preloader";
axios.defaults.withCredentials = true;

const CheckLogin = ({ children }) => {
  const pageLoading = useSelector((state) => state.auth.pageLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/get-login`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const { user } = data.data;
        dispatch(setLoggedIn(user));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoggedOut({}));
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  return pageLoading ? <Preloader /> : children;
};

export default CheckLogin;
