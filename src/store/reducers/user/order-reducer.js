const initialState = {};

const userOrderReduce = (state = initialState, action) => {
  if (action.type === "SET_POST_ORDER") {
    console.log("4. Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default userOrderReduce;
