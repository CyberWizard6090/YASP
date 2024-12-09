import React from "react";
import { FormatNumber } from "./FormatNumber";

type StageData = {
    front: number;
    back: number;
    db: number;
  };

type Props = {
    data:StageData
    size: number
    label: string
};


export const Column = ({data,size,label}: Props) => {

  return (
    <div>
      <div className="column">
        <div className="cell" style={{height: size === 0 || data.front === 0 ? "0px" :size * data.front + "px", background:"#4AB6E8" }}>
          <span>{FormatNumber(data.front)}</span>
        </div>
        <div className="cell"style={{ height: size === 0 || data.front === 0 ? "0px" : size * data.back + "px", background:"#AA6FAC" }}>
          <span>{FormatNumber(data.back)}</span>
        </div>
        <div className="cell" style={{ height: size === 0 || data.front === 0 ? "0px" : size * data.db + "px", background:"#e75498" }}>
          <span>{FormatNumber(data.db)}</span>
        </div>
      </div>
      <span className="column-name">{label}</span>
    </div>
  );
};
