import { takeEvery, takeLatest } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import { watchCart } from "../sagas/cartSaga";
import * as actionTypes from "../../actions/actionTypes";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

export function* rootSaga() {
  yield takeEvery(actionTypes.INITIATE_ADD_CART, watchCart);
}
