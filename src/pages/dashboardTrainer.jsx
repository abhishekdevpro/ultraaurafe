import React from "react";
import TrainerDashboard from "../components/Trainer-dashboard";
import TrainerHompage from "../components/Trainer-dashboard/TrainerHompage";

const dashboardTrainer = () => {
  return (
    <TrainerDashboard>
      <TrainerHompage />
    </TrainerDashboard>
  );
};

export default dashboardTrainer;
