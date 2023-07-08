import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Authentication from "./routes/authentication/authentication";
import Courses from "./routes/courses/courses";
import Dashboard from "./routes/dashboard/dashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
