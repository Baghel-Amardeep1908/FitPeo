import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const NetProfit = () => {
  const myDATA = 70;
  const finalData = {
    labels: [],
    datasets: [
      {
        data: [myDATA, 30].map((item) => Math.round(item)),
        backgroundColor: ["#7693FB", "#2A3263"],
        borderColor: ["#7693FB", "#2A3263"],
        borderWidth: 8,
        dataVisibility: new Array([myDATA, 30].length).fill(true),
        cutout: 75,
      },
    ],
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p>Net Profit</p>
          <h1>$6759.25</h1>
          <h3 style={{ color: "#78E460" }}>&#9652;3</h3>
        </div>

        <div
          style={{
            position: "absolute",
            top: "-16%",
            left: "50%",
            textAlign: "center",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: "19%", left: "40%" }}>
            <h3>{myDATA}%</h3>
            <p style={{ fontSize: "xx-small" }}>
              Goal <br></br>Completed
            </p>
          </div>
          <div style={{ height: 100, width: 100 }}>
            <Doughnut
              data={finalData}
              radius={5}
              style={{
                height: 110,
                width: 110,
              }}
            />
          </div>

          <p style={{ fontSize: "x-small", paddingTop: 11 }}>
            *The values here has been rounded off
          </p>
        </div>
      </div>
    </>
  );
};
export default NetProfit;
