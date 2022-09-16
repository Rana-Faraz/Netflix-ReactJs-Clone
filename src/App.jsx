import { useState } from "react";
import HomeScreen from "./routes/HomeScreen";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginScreen from "./routes/LoginScreen";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/userSlice";
import ProfileScreen from "./routes/ProfileScreen";
import NotFoundScreen from "./routes/NotFoundScreen";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsub;
  }, [dispatch]);

  return (
    <Routes>
      {user ? (
        <>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/*" element={<NotFoundScreen />} />
        </>
      ) : (
        <Route index path="/*" element={<LoginScreen />} />
      )}
    </Routes>
  );
}

export default App;
