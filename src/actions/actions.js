import * as actionTypes from "../actions/actionTypes";
export const AddProuctToCart = (type, value) => ({
  type: type,
  value: value,
});

export const InitiateAddToCart = (type, value) => ({
  type: type,
  value: { type: actionTypes.ADD_TO_CART, value },
});
