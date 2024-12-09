import React from "react";

type Props = {
  label: string;
  color: string;
};

const Item = ({ label, color }: Props) => {
  return (
    <div className="item">
      <div className="icon-color" style={{ background: color }}></div>
      {label}
    </div>
  );
};

export default Item;
