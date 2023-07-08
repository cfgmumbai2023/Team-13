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

import "./App.css";

function App() {
  let userData,
    setData = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Authentication userData={userData} setData={setData} />}
        />
        <Route path="/courses" element={<Courses />} />
        {userData & <Route path="/dashboard" element={<Dashboard />} />}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
