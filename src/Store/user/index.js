import { types } from "./types";

const initialState = { userData: [], loading: true };

function allUser (state = initialState, action){
    switch(action.type)
    {
        case types.GET_USER :   
        return {
          ...state,
          loading: false,
        };
        case types.SET_USER: 
        return {
          ...state,
          userData: action.userData,
          loading: true,
        };
        default : 
        return state
    }
};

export default allUser;