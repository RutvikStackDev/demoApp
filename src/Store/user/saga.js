import { types } from "./types";
import { call, put, all, takeEvery } from "redux-saga/effects";
import { setDashboardData } from "./action";

const api = "http://localhost:3100/api/users";

function getAllUser() {
  return fetch(api, { method: "GET" })
    .then((res) => res.json())
    .catch((error) => console.log("error", error));
}

function* userDataFun() {
  const userData = yield call(getAllUser);
  yield put(setDashboardData(userData));
}

function* getDataUser() {
    yield takeEvery(types.GET_USER , userDataFun)
};

function* allsaga() {
  yield all([
    getDataUser(),
  ]);
}


export default allsaga;