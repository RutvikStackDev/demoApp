import { types } from "./types";


export function setDashboardData(userData) {
  return {
    type: types.SET_USER,
    userData,
  };
}

export function getDashboardData() {
  return {
    type: types.GET_USER
  };
}