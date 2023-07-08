import React from "react";
import { useState } from "react";
import styled from "styled-components";

import BarChart from "./chart/barChart";
import Profile from "./profile/profile.js";

function Dashboard(props) {
  let visible,
    setVisible = useState(<Profile />);

  return (
    <DashboardContainer>
      <div className="dashboard-aside">
        <button onClick={setVisible}></button>
      </div>
      <div className="dashboard-main">{
        visible
      }
      </div>
    </DashboardContainer>
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
