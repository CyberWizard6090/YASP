import React from "react";
import { Column } from "./Column";
import "./style.css";
import { Normal } from "./Normal";
import { Legends } from "./Legends";
import { FormatNumber } from "./FormatNumber";

type Props = {
  data: ChartData;
};
type StageData = {
  front: number;
  back: number;
  db: number;
};
type ChartData = {
  title: string;
  dev: StageData;
  test: StageData;
  prod: StageData;
  norm: number;
};

const Chart = ({ data }: Props) => {
  const h = 250;
  const SumSize = (val: StageData) => {
    const sum = Object.values(val).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };
  function getColor(number: number) {
    if (number < 0) {
      return "#FC440F"; // Если число отрицательное, возвращаем красный цвет
    } else if (number > 0) {
      return "#00CC99"; // Если число положительное, возвращаем зеленый цвет
    } else {
      return "#898290"; // Если число равно нулю, возвращаем серый цвет
    }
  }
  function getText(number: number) {
    if (number < 0) {
      return "↓ -" + FormatNumber(Math.abs(number)); 
    } else if (number > 0) {
      return "↑ +" + FormatNumber(number);
    } else {
      return FormatNumber(number);
    }
  }

  const dataL = {
    front: { label: "Клиентская часть", color: "#4AB6E8" },
    back: { label: "Серверная  часть", color: "#AA6FAC" },
    db: { label: "База данных", color: "#E75498" },
  };

  let maxSize = Math.max(
    data.norm,
    SumSize(data.dev),
    SumSize(data.test),
    SumSize(data.prod)
  );
  let ratio = maxSize ? h / maxSize : 0;
  let prevName = "Количество пройденных тестов ";

  let x1 = 40;
  let x2 = x1 + 130;
  let x3 = x2 + 20;
  let x4 = x3 + 130;

  let start = 10;
  let column1 = 375 - (22 + SumSize(data.dev) * ratio + 10 + start);
  let column2 = 375 - (22 + SumSize(data.test) * ratio + 10 + start);
  let column3 = 375 - (22 + SumSize(data.prod) * ratio + 10 + start);

  let deltaValue1 = SumSize(data.test) - SumSize(data.dev);
  let deltaValue2 = SumSize(data.prod) - SumSize(data.test);
  console.log(375 - (22 + SumSize(data.dev) * 0 + 10 + start));
  return (
    <div className="widget">
      <div className="dots">...</div>
      <div className="title">{prevName + '"' + data.title + '"'}</div>
      <div className="chart">
        <div className="table">
          <div className="arrow">
            <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
              <line
                x1={x1}
                y1={start}
                x2={x2}
                y2={start}
                stroke="#888491"
                stroke-width="1"
              />
              <g>
                {/* Прямоугольник */}
                <rect
                  x={(x1 + x2) / 2 - 30}
                  y={start / 2 - 5}
                  width="60"
                  height="20"
                  fill={getColor(deltaValue1)}
                    stroke="#FFF"
                stroke-width="2"
                  rx="10"
                  ry="10"
                />

                {/* Текстовое значение внутри прямоугольника */}
                <text
                  x={(x1 + x2) / 2}
                  y={start / 2 + 5}
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    fill: "white", 
                    
                  }}
                >
                  {getText(deltaValue1)}
                </text>
              </g>

              <line x1={x1} y1={start} x2={x1} y2={column1} stroke="#888491" />
              <line
                x1={x1}
                y1={column1}
                x2={x1 + 4}
                y2={column1 - 4}
                stroke="#888491"
                stroke-width="1"
              />
              <line
                x1={x1}
                y1={column1}
                x2={x1 - 4}
                y2={column1 - 4}
                stroke="#888491"
                stroke-width="1"
              />

              <line
                x1={x2}
                y1={start}
                x2={x2}
                y2={column2}
                stroke="#888491"
                stroke-width="1"
              />
              <line
                x1={x2}
                y1={column2}
                x2={x2 + 4}
                y2={column2 - 4}
                stroke="#888491"
                stroke-width="1"
              />
              <line
                x1={x2}
                y1={column2}
                x2={x2 - 4}
                y2={column2 - 4}
                stroke="#888491"
                stroke-width="1"
              />

              <line
                x1={x3}
                y1={start}
                x2={x4}
                y2={start}
                stroke="#888491"
                stroke-width="1"
              />
              <g>
                {/* Прямоугольник */}
                <rect
                  x={(x3 + x4) / 2 - 30}
                  y={start / 2 - 5}
                  width="60"
                  height="20"
                  fill={getColor(deltaValue2)}
                    stroke="#FFF"
                stroke-width="2"
                  rx="10"
                  ry="10"
                />

                {/* Текстовое значение внутри прямоугольника */}
                <text
                  x={(x3 + x4) / 2}
                  y={start / 2 + 5}
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    fill: "white", // Цвет текста для лучшей видимости
                  }}
                >
                  {getText(deltaValue2)}
                </text>
              </g>

              <line
                x1={x3}
                y1={start}
                x2={x3}
                y2={column2}
                stroke="#888491"
                stroke-width="1"
              />
              <line
                x1={x3}
                y1={column2}
                x2={x3 + 4}
                y2={column2 - 4}
                stroke="#888491"
                stroke-width="1"
              />
              <line
                x1={x3}
                y1={column2}
                x2={x3 - 4}
                y2={column2 - 4}
                stroke="#888491"
                stroke-width="1"
              />

              <line
                x1={x4}
                y1={start}
                x2={x4}
                y2={column3}
                stroke="#888491"
                stroke-width="1"
              />
              <line
                x1={x4}
                y1={column3}
                x2={x4 + 4}
                y2={column3 - 4}
                stroke="#888491"
                stroke-width="1"
              />
              <line
                x1={x4}
                y1={column3}
                x2={x4 - 4}
                y2={column3 - 4}
                stroke="#888491"
                stroke-width="1"
              />
            </svg>
          </div>
          <Column data={data.dev} size={ratio} label={"dev"} />
          <Column data={data.test} size={ratio} label={"test"} />
          <Column data={data.prod} size={ratio} label={"prod"} />
          <Normal data={data.norm} size={ratio} label={"норматив"} />
          {/* <Column data={data.norm} size={ratio} /> */}
        </div>
        <Legends data={dataL} />
      </div>
    </div>
  );
};

export default Chart;
