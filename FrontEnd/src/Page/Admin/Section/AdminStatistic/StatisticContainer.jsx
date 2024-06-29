import React from "react";

const StatisticContainer = ({ title, data }) => {
  return (
    <div className="Statistic-Container">
      <div className="DataTitle">
        <h3>{title}</h3>
      </div>
      <div className="data">
        <h2>{data}</h2>
      </div>
    </div>
  );
};

export default StatisticContainer;
