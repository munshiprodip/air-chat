const initialState = {
  chatOpen: false,
  activeConversation: {},
  receiver: {},
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CONVERSATION": {
      const newState = {
        activeConversation: action.payload.conversation,
        receiver: action.payload.receiver,
        messages: action.payload.messages,
        chatOpen: true,
      };
      return newState;
    }

    case "RESET_CONVERSATION": {
      const newState = {
        activeConversation: {},
        receiver: {},
        messages: {},
        chatOpen: false,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default chatReducer;
