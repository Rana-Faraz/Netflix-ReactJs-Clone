import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../api/firebase";
import { selectUser } from "../app/userSlice";
import Nav from "../components/Nav";
import PlansComponent from "../components/PlansComponent";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
          />
          <div className="profile__details">
            <h2 className="profile__email">{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <PlansComponent />
              <button
                className="profile__signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
