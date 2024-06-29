import React, { useEffect, useRef } from "react";

import { Pie } from "react-chartjs-2";

const OrderChart = (props) => {
  return <Pie data={props.data} />;
};

export default OrderChart;
