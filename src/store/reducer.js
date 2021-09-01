import * as actionTypes from "../actions/actionTypes";
const reducer = (state = [], action) => {
  console.log("action", action, "state", state);
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, action.value];
    default:
      return state;
  }
};

export default reducer;
