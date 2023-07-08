import React from "react";
<<<<<<< Updated upstream
import { useState } from "react";
import styled from "styled-components";

import BarChart from "chart/BarChart.js";
import Profile from "profile/Profile.js";

=======
import BarChart from "./chart/barChart";
>>>>>>> Stashed changes
function Dashboard(props) {
  let visible,
    setVisible = useState(<Profile />);

  return (
<<<<<<< Updated upstream
    <DashboardContainer>
      <div className="dashboard-aside">
        <button onClick={setVisible}></button>
      </div>
      <div className="dashboard-main">{
        visible
      }
      </div>
    </DashboardContainer>
=======
    <div className="dashboard-container">
      <div className="dashboard-aside"></div>
      <div className="dashboard-main">
        <BarChart></BarChart>
      </div>
    </div>
>>>>>>> Stashed changes
  );
}

const DashboardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .dashboard-aside {
    width: 30%;
  }

  .dashboard-main {
    width: 70%;
  }
`;

export default Dashboard;
