const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Incrementing");
      return { count: state.count + 1 };
    case "DECREMENT":
      if (state.count - 1 < 0) {
        console.log("Cannot decrement below 0");
        return state;
      }
      console.log("Decrementing");
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
