import React from "react";
import { useState } from "react";
import styled from "styled-components";

import BarChart from "./chart/barChart";
import Profile from "./profile/profile.js";

const mapping = {

}

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
      <Profile />
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
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dashboard-main {
    width: 70%;
  }
`;

export default Dashboard;
