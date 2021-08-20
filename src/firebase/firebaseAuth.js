import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import {
  setLoading,
  setLoggedIn,
  setLoggedOut,
} from "../redux/actions/authAction";
import { firebaseConfig } from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const formatUser = (user) => ({
  email: user.email,
  name: user.displayName,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
  uid: user.uid,
  loggedIn: true,
});

export const signInWithGoogle = () => {
  return firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((response) => {
      const formattedUser = formatUser(response.user);
      return formattedUser;
    })
    .catch((err) => {
      return {
        loggedIn: false,
      };
    });
};

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => console.log("Log out"));
};

export const CheckLogin = ({ children }) => {
  const pageLoading = useSelector((state) => state.auth.pageLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const formattedUser = formatUser(user);
        dispatch(setLoggedIn(formattedUser));
      } else {
        dispatch(setLoggedOut({}));
      }
      dispatch(setLoading(false));
    });
  }, []);

  return pageLoading ? <Preloader /> : children;
};

export const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default firebase;
