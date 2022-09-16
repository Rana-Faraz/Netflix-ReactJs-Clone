import React from "react";
import { useState } from "react";
import SignInScreen from "../components/SignInScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="login__button">
          Sign In
        </button>
        <div className="login__gradient" />
      </div>
      <div className="login__body">
        {signIn ? (
          <SignInScreen
            email={email}
            setEmail={setEmail}
            pass={pass}
            setPass={setPass}
          />
        ) : (
          <>
            <h1>Unlimited fils, TV programes and more. </h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                onClick={() => setSignIn(true)}
                className="login__submit"
              >
                GET STARTED
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
