import { put, delay } from "redux-saga/effects";
import { connect } from "react-redux";
import { AddProuctToCart } from "../../actions";
import { store } from "./index";

export function* watchCart(action) {
  yield store.subscribe(() => {});
  if (
    store.getState().filter((item) => item.id === action.value.value.id).length
  ) {
    alert("Product is already added in cart.");
  } else {
    yield put(AddProuctToCart(action.value.type, action.value.value));
    yield alert("Product added in cart.");
  }
}

// const mapStateToProps = (state) => ({ product: state });

// export default connect(mapStateToProps)(watchCart);
