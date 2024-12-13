"use client";
import { useState, useEffect } from "react";
import { Card } from "./component/card";
import { SearchIcon } from "./component/SearchIcon";

const API_KEY = "ee316010829b4d2fbdc72448241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({
    temperature: null,
    condition: null,
  });

  const [nightWeather, setNightWeather] = useState({
    temperature: null,
    condition: null,
  });

  const [isClient, setIsClient] = useState(false);

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
        });
        setNightWeather({
          temperature: data.forecast.forecastday[0].day.mintemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
        });

        console.log(data.current.temp_c, "---Temperature");
        console.log(data.current.condition.text, "---Condition");
      });
  }, [city]);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex rounded-3xl">
      <div className="w-[60%] h-screen bg-stone-50 flex flex-col-reverse items-center justify-between pb-[82px] rounded-3xl">
        <Card
          value="day"
          temperature={dayWeather.temperature}
          condition={dayWeather.condition}
          cityName={city}
        />
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />
      </div>
      <div className="w-[50%] h-screen bg-[#0F141E] flex flex-col-reverse items-center justify-between pb-[82px] rounded-3xl">
        <Card
          value="night"
          temperature={nightWeather.temperature}
          condition={nightWeather.condition}
          cityName={city}
        />
      </div>
    </div>
  );
}

const Cirle = () => {
  return (
    <div className="absolute rounded-full w-36 h-36 bg-red-200 flex"></div>
  );
};

const SearchInput = ({ search, onChangeText, onPressEnter }) => {
  return (
    <div className="h-12 w-[500px] bg-white rounded-3xl mt-5 flex items-center">
      <SearchIcon />
      <input
        id=""
        name=""
        type="text"
        placeholder="City name"
        className="w-full outline-none mr-1"
        search={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      />
    </div>
  );
};
