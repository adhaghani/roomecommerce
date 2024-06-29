import React, { useEffect, useRef } from "react";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);
const SalesChart = (props) => {
  return <Line data={props.data} />;
};

export default SalesChart;
