import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./NotFoundScreen.css";

function NotFoundScreen() {
  return (
    <div>
      <Nav />
      <div className="body">
        <h1 className="notFound__title">404 Not Found</h1>
        <h3 className="notFound__h3">
          Can't find the page you are looking for!
        </h3>
        <Link to={"/"}>
          <button className="notFound__button">Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
