import * as UserActionTypes from "../actionTypes/userActionTypes";
const initialState = {
  name: "",
  number: null,
};
export const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case UserActionTypes.NUMBER:
      return {
        ...state,
        number: payload,
      };
    default:
      return state;
  }
};
export default user;
