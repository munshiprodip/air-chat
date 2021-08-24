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
