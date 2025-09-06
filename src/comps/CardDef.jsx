import React from "react";

const CardDef = ({ temp, name }) => {
  return (
    <div className="p-2 m-2 border-2 rounded-xl shadow-xl bg-black bg-opacity-40">
      <div>
        <h1>{name}</h1>
        <h2>TEMP{temp}</h2>
      </div>
    </div>
  );
};

export default CardDef;
