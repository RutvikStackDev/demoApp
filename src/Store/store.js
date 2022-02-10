import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import allUser from "./user";
import logger from "redux-logger";
import allsaga from "./user/saga";
import { combineReducers } from "redux";

const SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware ,logger];

const rootReducer = combineReducers({ userData: allUser });

const Store = configureStore({
  reducer: rootReducer,
  middleware
});

SagaMiddleware.run(allsaga);

export default Store;
