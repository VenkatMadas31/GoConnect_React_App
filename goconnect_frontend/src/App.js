import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { gapi } from "gapi-script";

const App = () => {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
      plugin_name: "chat",
    });
  });

  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
