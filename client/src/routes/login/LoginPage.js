import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import "./loginPageStyle.css";
import "../../App.css";

export default function SignInPage(props) {
  const [role, setRole] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  useEffect(() => {
    console.log(role);
    console.log(uname);
    console.log(password);
  }, [role, uname, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/login', {
      userID: uname,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      navigate("/dashboard");
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className="all">
      <div className="text-center m-3-auto ">
        <h2 className="hd4">Sign In</h2>
        <form action="" className="form3">
          <div>
            <label className="labelData">
              Role:
              <select value={role} onChange={(e) => handleChange(e, setRole)}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">Coach</option>
                <option value="user">Instructor</option>
              </select>
            </label>
          </div>
          <p>
            <label className="labelData">Username or email address</label>
            <br />
            <input
              type="text"
              name="first_name"
              required
              onChange={(e) => handleChange(e, setUname)}
            />
          </p>
          <p>
            <label className="labelData">Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input
              type="password"
              name="password"
              required
              onChange={(e) => handleChange(e, setPassword)}
            />
          </p>
          <p>
            <button id="sub_btn" type="submit" onClick={(e) => handleSubmit(e)}>
              Login
            </button>
          </p>
        </form>
        <footer>
          <p>
            First time? <Link to="/register">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
