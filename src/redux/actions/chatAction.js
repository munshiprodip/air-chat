export const setAllConversation = (payload) => {
  return {
    type: "SET_ALL_CONVERSATION",
    payload,
  };
};

export const setActiveConversation = (payload) => {
  return {
    type: "SET_ACTIVE_CONVERSATION",
    payload,
  };
};

export const resetConversation = (payload) => {
  return {
    type: "RESET_CONVERSATION",
    payload,
  };
};

export const setNewMessages = (payload) => {
  return {
    type: "SET_NEW_MESSAGE",
    payload,
  };
};

export const resetNewMessage = (payload) => {
  return {
    type: "RESET_NEW_MESSAGE",
    payload,
  };
};
