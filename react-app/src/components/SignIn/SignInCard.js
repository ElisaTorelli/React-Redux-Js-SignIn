import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setEmail, setPassword } from "redux";
import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_USER_SIGN_IN,
  SET_USER,
} from "../../redux/signin/signInTypes";

function SignInCard() {
  // set field's state
  const [nameState, setName] = useState("");
  const [surnameState, setSurname] = useState("");
  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");
  const dispatch = useDispatch();

  const usersArray = useSelector((state) => state.usersArray);

  const handleNameChange = (event) => {
    setName(event?.target?.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event?.target?.value);
  };

  const handleEmailChange = (event) => {
    console.log(event);
    setEmail(event?.target?.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event?.target?.value);
  };

  const handleSignIn = () => {
    // check if users's info are in array or not
    let userCheck = usersArray.find(
      (element) =>
        element.email !== usersArray.email &&
        element.password !== usersArray.password
    );
    if (userCheck) {
      // user not sign up
    }
    dispatch({
      type: SET_USER,
      payload: {
        email: emailState,
        password: passwordState,
        name: nameState,
        surname: surnameState,
      },
    });
  };

  useEffect(() => {
    console.log(usersArray);
  }, [usersArray]);

  return (
    <div>
      <input type="text" placeholder="name.." onChange={handleNameChange} />
      <input
        type="text"
        placeholder="surname.."
        onChange={handleSurnameChange}
      />
      <input
        type="email"
        placeholder="email.."
        onChange={(event) => {
          handleEmailChange(event);
        }}
      />
      <input
        type="password"
        placeholder="password.."
        onChange={handlePasswordChange}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignInCard;
