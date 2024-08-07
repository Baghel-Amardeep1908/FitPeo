import { useState } from "react";
import { SAMPLE_DATA } from "../../Utils/activity.js";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarStyling = styled(Bar)``;
const Activity = () => {
  const chart = {
    labels: Array.from({ length: SAMPLE_DATA.length }, (_, i) => i + 1), // Generates labels from 1 to the length of SAMPLE_DATA
    datasets: [
      {
        label: "",
        data: SAMPLE_DATA,
        backgroundColor: "#7394FE",
        borderRadius: 50,
        borderWidth: 0.01,
        barPercentage: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        display: false, // Hides the x-axis labels
        suggestedMin: 0,
        suggestedMax: 30,
      },
      y: {
        beginAtZero: true, // Ensure the y-axis starts from zero
        // max: Math.max(...SAMPLE_DATA), // Optional: Adjust maximum value for better visibility
        suggestedMin: 0,
        suggestedMax: 15,
      },
    },
  };

  return (
    <>
      <h1>Activity</h1>
      <div
        style={{
          height: 215,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Bar data={chart} options={options} />
      </div>
    </>
  );
};

export default Activity;
