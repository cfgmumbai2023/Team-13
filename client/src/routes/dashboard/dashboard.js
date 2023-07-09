import React from "react";
import { useState } from "react";
import styled from "styled-components";

import BarChart from "./chart/barChart";
import Profile from "./profile/profile.js"
import AvailableCourses from "./certification/availableCourses";

function Dashboard(props) {
  let [visible,
    setVisible] = useState(0);

  return (
    <DashboardContainer>
      <div className="dashboard-aside">
        <button onClick={() => setVisible(0)}>Profile</button>
        <button onClick={() => setVisible(1)}>Progress</button>
        <button onClick={() => setVisible(2)}>Courses</button>
        <button onClick={() => setVisible(3)}>Certifications</button>
      </div>
      <div className="dashboard-main">
        { visible === 0 && <Profile data={props.userData} /> }
        { visible === 1 && <BarChart data={props.userData} /> }
        { visible === 3 && <AvailableCourses data={props.userData} /> }
      </div>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to top right, rgba(0,0,255,1), rgba(0,0,255,0));

  .dashboard-aside {
    width: 25%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15%;
    align-items: center;
    gap: 10px;

    & > button {
      min-width: 250px;
      padding: 10px 25px;
      border-radius:20px;
    }

    & > button.active {

    }

  }

  .dashboard-main {
    width: 75%;
    min-height: 100%;
    margin-top: 15%;
    margin-left: 5%;
  }
`;

export default Dashboard;
