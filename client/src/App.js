import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { useState } from "react";

import Authentication from "./routes/authentication/authentication";
import Courses from "./routes/courses/courses";
import Dashboard from "./routes/dashboard/dashboard";

import NotFoundPage from "./routes/NotFoundPage";
import HomePage from "./routes/home/HomePage";
import LandingPage from "./routes/landing/LandingPage";
import ForgetPasswordPage from "./routes/forgot-password/ForgetPasswordPage";
import RegisterPage from "./routes/register/RegisterPage";
import LoginPage from "./routes/login/LoginPage";

import "./App.css";

function App() {
  let userData,
    setData = useState(true);

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={ <LandingPage />} />
        <Route
          path="/"
          element={<Authentication userData={userData} setData={setData} />}
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
        <Route path="/home" element={ <HomePage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
