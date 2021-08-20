const initialState = {
  pageLoading: true,
  isLoggedIn: false,
  loggedInUser: {},
  showProfile: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN": {
      const newState = {
        ...state,
        isLoggedIn: true,
        loggedInUser: action.payload,
      };
      return newState;
    }
    case "SET_LOGGED_OUT": {
      const newState = {
        ...state,
        isLoggedIn: false,
        loggedInUser: {},
      };
      return newState;
    }
    case "SET_LOADING": {
      const newState = {
        ...state,
        pageLoading: action.payload,
      };
      return newState;
    }

    case "SHOW_PROFILE": {
      const newState = {
        ...state,
        showProfile: !state.showProfile,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
