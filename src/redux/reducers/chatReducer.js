const initialState = {
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
          messages:  action.payload.messages,
        };
        return newState;
      }
        
      default: {
        return state;
      }
    }
  };
  
  export default chatReducer;
  