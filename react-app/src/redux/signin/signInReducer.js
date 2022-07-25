import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_USER_SIGN_IN,
  SET_USER,
} from "./signInTypes";

const initialState = {
  usersArray: [
    {
      email: "marika@gmail.com",
      password: "ciaoMarika@!12",
      name: "nome",
      surname: "dsadsa",
    },
    {
      email: "elisa@gmail.com",
      password: "ciaoElisa@!12",
      name: "nome",
      surname: "dsadsa",
    },
  ],
  signIn: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        usersArray: [...state.usersArray, action.payload],
        signIn: true,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: state.usersArray.push(action.email),
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: state.usersArray.push(action.password),
      };
    case SET_USER_SIGN_IN:
      return {
        ...state,
        signIn: action.payload,
      };
    default:
      return state;
  }
};

export default signInReducer;
