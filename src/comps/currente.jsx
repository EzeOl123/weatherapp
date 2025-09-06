<div className="flex flex-row gap-6 p-6 m-2  rounded-xl shadow-2xl bg-white bg-opacity-20 backdrop-blur-xs">
  <div className="flex flex-col items-end pr-12 py-1 border-r-2 border-black border-opacity-70 border-shadow ">
    {/* <h1>{data?.location?.name}</h1> */}
    <img src={`${data?.current?.condition?.icon}`} />
    <h2 className="text-7xl">{data?.current?.temp_c}°</h2>
  </div>
  <div className="flex flex-col justify-center items-start pl-2 py-1 pr-2">
    <h2>Condition: {data?.current?.condition?.text}</h2>
    <h2>Feels: {data?.current?.feelslike_c}°</h2>
    <h2>Wind: {data?.current?.wind_kph} KM/H</h2>
    <h2>Humidity: {data?.current?.humidity}%</h2>
  </div>
</div>;
