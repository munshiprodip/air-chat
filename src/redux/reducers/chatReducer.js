const initialState = {
  chatOpen: false,
  allConversations: [],
  activeConversation: {},
  receiver: {},
  messages: [],
  newMessages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_CONVERSATION": {
      const newState = {
        ...state,
        allConversations: action.payload,
      };
      return newState;
    }

    case "SET_ACTIVE_CONVERSATION": {
      const newState = {
        ...state,
        activeConversation: action.payload.conversation,
        receiver: action.payload.receiver,
        messages: action.payload.messages,
        chatOpen: true,
        newMessages: [],
      };
      return newState;
    }

    case "RESET_CONVERSATION": {
      const newState = {
        ...state,
        activeConversation: {},
        receiver: {},
        messages: {},
        chatOpen: false,
        newMessages: [],
      };
      return newState;
    }

    case "SET_NEW_MESSAGE": {
      const newState = {
        ...state,
        newMessages: [...state.newMessages, action.payload],
      };
      return newState;
    }

    case "RESET_NEW_MESSAGE": {
      const newState = {
        ...state,
        newMessages: [],
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default chatReducer;
