import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Nav.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCheck = (index) => {
    if (activeIndex !== null) {
      navOptions[activeIndex].active = false;
      navOptions[index].active = true;
      setActiveIndex(index);
    } else {
      navOptions[index].active = true;
      setActiveIndex(index);
    }
  };

  const transitionNav = () => {
    if (window.scrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const [navOptions, setNavOptions] = useState([
    {
      name: "Home",
      active: true,
      path: "/",
    },
    {
      name: "Trending Now",
      active: false,
      path: "/",
    },
    {
      name: "Top Rated",
      active: false,
      path: "/",
    },
    {
      name: "Action Movies",
      active: false,
      path: "/",
    },
    {
      name: "Horror Movies",
      active: false,
      path: "/",
    },
  ]);
  useEffect(() => {
    const temp = window.addEventListener("scroll", transitionNav);
    return temp;
  }, []);

  return (
    <div
      className={`nav`}
      style={{ backgroundColor: !show ? "#111" : null, transition: "all 0.3s" }}
    >
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />

        <div className="nav__links">
          <ul className="nav__list">
            {navOptions.map((item, index) => (
              <li
                className={`nav__listItem ${item.active && "active"}`}
                onClick={() => {
                  activeCheck(index);
                }}
              >
                <Link className="link" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to={"/profile"}>
          <img
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
