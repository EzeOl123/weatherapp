import React from "react";

const Card = ({ temp, name, icon, setCitystate }) => {
  return (
    <div
      onClick={(e) =>
        name === "Hannover" ? setCitystate(name + ",DE") : setCitystate(name)
      }
      className="flex flex-col items-center p-2 px-4 rounded shadow-lg shadow-green-950 bg-white bg-opacity-15 backdrop-blur-xs hover:scale-110 hover:cursor-pointer duration-150"
    >
      <h1 className="mb-2">{name}</h1>
      <img src={`${icon}`} />
      <h2 className="text-2xl">{temp}°</h2>
    </div>
  );
};

export default Card;
