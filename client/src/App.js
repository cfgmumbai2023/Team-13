import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { useEffect, useState } from "react";

import Authentication from "./routes/authentication/authentication";
import Courses from "./routes/courses/courses";
import Dashboard from "./routes/dashboard/dashboard";
import NotFoundPage from "./routes/NotFoundPage";
import HomePage from "./routes/home/HomePage";
import LandingPage from "./routes/landing/LandingPage";
import ForgetPasswordPage from "./routes/forgot-password/ForgetPasswordPage";
import RegisterPage from "./routes/register/RegisterPage";
import LoginPage from "./routes/login/LoginPage";
import Video from "./components/Video";

import "./App.css";

function App() {
  // Fetch from server when endpoints are created.
  let [userData, setData] = useState(null);
  let [login, isUserLoggedIn] = useState(false);

  useEffect(() => {
    setData({
      userID: 0,
      firstName: "John",
      lastName: "Doe",
      age: 25,
      emailID: "johndoe@gmail.com",
      imageLink:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      courses: []
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          path="/"
          element={<Authentication userData={userData} setData={setData} />}
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard userData={userData} />} />
        <Route
          path="/login"
          element={
            <LoginPage
              userData={userData}
              setData={setData}
              login={login}
              isUserLoggedIn={isUserLoggedIn}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage login={login} isUserLoggedIn={isUserLoggedIn} />
          }
        />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
