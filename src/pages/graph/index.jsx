import React from "react";
import { Pie } from "react-chartjs-2";
import "./index.css";

const Graph = ({ rickList, pokeList }) => {
  let rickListLength = [];
  rickList.map((actual) => actual.map((actual) => rickListLength.push(actual)));

  const data = {
    labels: ["Rick e Morty", "Pokemon"],
    datasets: [
      {
        data: [rickListLength.length, pokeList.length],
        backgroundColor: ["#3ed307", "#D51C09"],
        hoverBackgroundColor: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"],
      },
    ],
  };

  return (
    <div className="graph">
      <h2 style={{ fontWeight: "bold" }}>Relação das listas</h2>
      <Pie data={data} />
    </div>
  );
};

export default Graph;
