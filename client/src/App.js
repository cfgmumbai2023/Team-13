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
<<<<<<< Updated upstream
import NotFoundPage from "./routes/notFoundPage";

=======
import NotFoundPage from "./routes/NotFoundPage";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <Route path="/dashboard" element={<Dashboard />}/>
=======
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> Stashed changes
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
