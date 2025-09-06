import React from "react";
import Card from "./Card";

const Cards = ({ data, setCitystate }) => {
  return (
    <div className="flex flex-row gap-6 items-center justify-center font-poppins">
      {data.map((x, index) => {
        return (
          <Card
            key={index}
            name={x?.location?.name ?? "AA"}
            temp={x?.current?.temp_c ?? "AA"}
            icon={x?.current?.condition?.icon}
            setCitystate={setCitystate}
          />
        );
      })}
    </div>
  );
};

export default Cards;
