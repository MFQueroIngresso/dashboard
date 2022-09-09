import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const DemographicDataChart = () => {
  return <Bar options={options} data={data} />;
};
