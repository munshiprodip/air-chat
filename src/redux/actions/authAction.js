export const setLoggedIn = (payload) => {
  return {
    type: "SET_LOGGED_IN",
    payload,
  };
};

export const setLoggedOut = (payload) => {
  return {
    type: "SET_LOGGED_OUT",
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: "SET_LOADING",
    payload,
  };
};

export const showProfile = (payload) => {
  return {
    type: "SHOW_PROFILE",
    payload,
  };
};
