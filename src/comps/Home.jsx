import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Current from "./Current";

const Home = () => {
  const API_KEY = "191c3f56b5184402a6690332250409";
  const city = "London";
  const [data, setData] = useState([]);
  const [def, setDef] = useState("Hannover,DE");
  const [defcity, setDefcity] = useState();
  const cities = [
    "Hannover,DE",
    "London",
    "Berlin",
    "Paris",
    "Tokyo",
    "New York",
  ];
  useEffect(() => {
    Promise.all(
      cities.map((city) =>
        fetch(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        ).then((res) => res.json())
      )
    ).then((data) => {
      setData(data);
    });

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Hannover,DE`
    )
      .then((res) => res.json())
      .then((x) => {
        setDefcity(x);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
        def == "Hannover" ? "Hannover,DE" : def
      }`
    )
      .then((res) => res.json())
      .then((x) => {
        setDefcity(x);
      })
      .catch((err) => console.error(err));
  }, [def]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    console.log("defcity: ", defcity);
  }, [defcity]);
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Current data={defcity} citystate={def} setCitystate={setDef} />
      <Cards data={data} setCitystate={setDef} />
    </div>
  );
};

export default Home;
