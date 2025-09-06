import React, { useEffect, useState } from "react";

const Current = ({ data, citystate, setCitystate }) => {
  //   var temp = defcity.current.temp_c;
  const [city, setCity] = useState(citystate);
  const search = () => {
    console.log("OPAAA");
  };

  useEffect(() => {
    console.log(city);
  }, [city]);
  var icon = data?.current?.condition?.icon;
  var temp = data?.current?.temp_c;
  var condition = data?.current?.condition?.text;
  var feeling = data?.current?.feelslike_c;
  var wind = data?.current?.wind_kph;
  var humidity = data?.current?.humidity;
  var location = data?.location?.name;
  return (
    <div className="w-screen h-3/4 flex flex-col justify-center items-center font-poppins ">
      <div className="w-[1200px] h-3/4 flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-7xl font-poppins text-white border-b-2 border-white border-opacity-50 hover:scale-105 duration-150">
            {location}
          </h1>
          <div>
            <button
              className="bg-white mr-4 h-10 rounded px-4 hover:scale-105 duration-200 hover:bg-gray-100 shadow-xl"
              onClick={(e) => setCitystate(city)}
            >
              SEARCH
            </button>
            <input
              className="rounded h-10 pl-4"
              type="text"
              value={city}
              placeholder="Search city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-9xl text-white hover:scale-110 duration-150">
            {temp}°
          </h1>
          <div className="bg-white bg-opacity-10 shadow-2xl rounded hover:scale-110 duration-150">
            <div className="flex flex-row gap-2 m-6">
              <div className=" border-white border-r-2">
                <img className="mt-8 pr-6" src={icon} />
              </div>
              <div className="text-white text-xl ml-4">
                <h2>Condition: {condition}</h2>
                <h2>Feels: {feeling}°</h2>
                <h2>Wind: {wind} KM/H</h2>
                <h2>Humidity: {humidity}%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
