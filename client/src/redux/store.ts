import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from "./root-reducer"
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk, logger]; //or can add to thunk, anotherSide-Effect Library [thunk, redux-saga]

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;