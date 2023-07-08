import React from "react";
import { useState } from "react";
import styled from "styled-components";

import BarChart from "./chart/barChart";
import Profile from "./profile/profile.js";


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
      {console.log(props)}
      <div className="dashboard-main">
        { visible === 0 && <Profile data={props.userData} /> }
        { visible === 1 && <BarChart data={props.data} /> }
      </div>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  .dashboard-aside {
    width: 25%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    align-items: center;
    gap: 10px;

    & > button {
      min-width: 250px;
      padding: 10px 25px;
    }

    & > button.active {

    }

  }

  .dashboard-main {
    width: 75%;
    min-height: 100%;
  }
`;

export default Dashboard;
