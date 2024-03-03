import React from "react";

const CircleComponent = ({ value, maxValue = 100 }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <div className="circle-chart" style={{ "--percentage": `${percentage}%` }}>
      <div className="circle-chart-value">{value}</div>
    </div>
  );
};

export default CircleComponent;
