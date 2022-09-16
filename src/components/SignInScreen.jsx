import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { auth } from "../api/firebase";
import "./SignInScreen.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInScreen({ email, setEmail, pass, setPass }) {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const handleError = (err) => {
    toast.error(err.message.replace("Firebase: ", ""), toastOptions);
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((authUser) => {})
      .catch((err) => handleError(err));
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {})
      .catch((err) => handleError(err));
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "#111" }}
      />
      <div className="signIn">
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type={"password"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>
        <h4>
          <span className="signIn__gray">New to Netflix? </span>
          <span className="signIn__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </div>
    </>
  );
}

export default SignInScreen;
