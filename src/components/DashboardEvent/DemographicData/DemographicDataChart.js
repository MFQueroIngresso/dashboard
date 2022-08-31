import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Entrada", "Camarote VIP", "Arquibancada"],
  datasets: [
    {
      label: "# of Votes",
      data: [22, 39, 43],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export const DemographicDataChart = () => {
  return <PolarArea data={data} />;
};
