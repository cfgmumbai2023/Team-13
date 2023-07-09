import "./RegisterPageStyle.css";
import "../../App.css";

import axios from "axios";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    education: "",
    pdfFile: null,
    jpegFile: null,
    previousExperience: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setUserData({ ...userData, [e.target.name]: e.target.files[0] });
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/register", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="text-center m-2-auto form2 all2">
      <h1 className="head1">Registration Form</h1>
      <form onSubmit={handleSubmit} className="form1">
        <h3>Personal Information</h3>
        <div className="information">
          <select>
            <option value="">Salutations : Ms.</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
          </select>
          <input
            type="text"
            name="name"
            className="mb3"
            placeholder="Name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="contact"
            placeholder="Contact Number"
            value={userData.contact}
            onChange={handleChange}
          />
        </div>

        <h3>Address Information</h3>
        <div className="information">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={userData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={userData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={userData.country}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={userData.pinCode}
            onChange={handleChange}
          />
        </div>

        <h3>Sport Proficiecy</h3>
        <div className="information-sport">
          <label className="labelData"> Sport :</label>
          <select>
            <option value="">Select Sport</option>
            <option value="admin">Football</option>
            <option value="user">Cricket</option>
            <option value="user">Basket-ball</option>
          </select>

          <label className="labelData">
            {" "}
            Age Group you're confortable in coaching :
          </label>
          <select>
            <option value="">Select Age Group : All</option>
            <option value="admin">6-12</option>
            <option value="user">13-16</option>
            <option value="user">16-21</option>
          </select>
        </div>

        <h3>Educational Information</h3>
        <div className="information">
          <label className="labelData"> Graduation : </label>
          <input
            type="text"
            name="GraduationDegree"
            placeholder="Graduation Degree"
            value={userData.education}
            onChange={handleChange}
          />

          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            value={userData.education}
            onChange={handleChange}
          />

          <input
            type="text"
            name="Percentage"
            placeholder="Percentage"
            value={userData.education}
            onChange={handleChange}
          />
        </div>

        <div className="information">
          <label className="labelData"> Intermediate : </label>
          <input
            type="text"
            name="intermediate Board"
            placeholder="Internship Board"
            value={userData.education}
            onChange={handleChange}
          />

          <input
            type="text"
            name="SchoolName"
            placeholder="School Name"
            value={userData.education}
            onChange={handleChange}
          />

          <input
            type="text"
            name="Percentage"
            placeholder="Percentage"
            value={userData.education}
            onChange={handleChange}
          />
        </div>

        <div className="information">
          <label className="labelData"> HighSchool : </label>
          <input
            type="text"
            name="HighSchool"
            placeholder="High School"
            value={userData.education}
            onChange={handleChange}
          />

          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={userData.education}
            onChange={handleChange}
          />

          <input
            type="text"
            name="Percentage"
            placeholder="Percentage"
            value={userData.education}
            onChange={handleChange}
          />
        </div>

        <h3>Licence/Certification Upload</h3>
        <div className="information">
          <label htmlFor="pdfFile" className="labelData">
            PDF File:
          </label>
          <input
            type="file"
            name="pdfFile"
            accept=".pdf"
            onChange={handleChange}
          />
        </div>
        {/* 
        <label htmlFor="jpegFile">JPEG File:</label>
        <input
          type="file"
          name="jpegFile"
          accept="image/jpeg"
          onChange={handleChange}
        /> */}

        <h3>Previous Experience (If Any)</h3>
        <div className="information">
          <textarea
            name="previousExperience"
            placeholder="Previous experience"
            value={userData.previousExperience}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="button1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
