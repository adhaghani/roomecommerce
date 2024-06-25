import React from "react";

const ProgressBar = ({ haveNumber, haveSymbol, meetMinimumCharacter }) => {
  const requirementsMet =
    (haveNumber ? 1 : 0) +
    (haveSymbol ? 1 : 0) +
    (meetMinimumCharacter ? 1 : 0);
  const totalRequirements = 3;
  const percentage = (requirementsMet / totalRequirements) * 100;

  let className;
  if (percentage < 40) {
    className = "progress red";
  } else if (percentage < 70) {
    className = "progress yellow";
  } else {
    className = "progress green";
  }

  return <div className={className} style={{ width: `${percentage}%` }} />;
};

export default ProgressBar;
