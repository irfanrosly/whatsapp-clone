import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [{}, dispatch] = useStateValue();
  const googleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({ type: actionTypes.SET_USER, user: result.user })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://commons.wikimedia.org/wiki/File:WhatsApp.svg"
          width={100}
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Whysapp</h1>
        </div>
        <Button onClick={googleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
