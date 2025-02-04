import React from "react";

import "./App.css";
import Chart from "./componets/Chart/Chart";

function App() {
  const data1 = {
    title: "OS Doors",
    dev: { front: 66, back: 100, db: 31 },
    test: { front: 60, back: 80, db: 31 },
    prod: { front: 66, back: 83, db: 31 },
    norm: 150,
  };

  const data2 = {
    title: "OS Bombuntu",
    dev: {
      front: 13,
      back: 16,
      db: 6,
    },
    test: {
      front: 13,
      back: 16,
      db: 6,
    },
    prod: {
      front: 13,
      back: 15,
      db: 9,
    },
    norm: 10,
  };
  const data3 = {
    title: "Mibre Office",
    dev: {
      front: 13,
      back: 16,
      db: 6,
    },
    test: {
      front: 11,
      back: 15,
      db: 9,
    },
    prod: {
      front: 23,
      back: 25,
      db: 6,
    },
    norm: 60,
  };
  const data4 = {
    title: "LoWtEx",
    dev: {
      front: 500000,
      back: 1000,
      db: 700000,
    },
    test: {
      front: 500001,
      back: 500000,
      db: 900000,
    },
    prod: {
      front: 5,
      back: 5,
      db: 9,
    },
    norm: 500000,
  };
  const data5 = {
    title: "W$ POS",
    dev: {
      front: 0,
      back: 0,
      db: 0,
    },
    test: {
      front: 0,
      back: 0,
      db: 0,
    },
    prod: {
      front: 0,
      back: 0,
      db: 0,
    },
    norm: 0,
  };

  return (
    <div className="App">
      <Chart data={data1} />
      <Chart data={data2} />
      <Chart data={data3} />
      <Chart data={data4} />
      <Chart data={data5} />
    </div>
  );
}

export default App;
