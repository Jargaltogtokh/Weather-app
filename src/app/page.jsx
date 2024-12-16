"use client";
import { useState, useEffect } from "react";
import { Card } from "./component/card";
import { SearchIcon } from "./component/SearchIcon";
import { Circle } from "./component/Circle";

const API_KEY = "ee316010829b4d2fbdc72448241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({
    temperature: 0,
    condition: "",
  });
  const [date, setDate] = useState("");

  const [nightWeather, setNightWeather] = useState({
    temperature: 0,
    condition: "",
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
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.forecast.forecastday[0]);

        if (data && data.forecast && data.forecast.forecastday)
          setDate(data.forecast.forecastday[0].date);

        setDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data.forecast.forecastday[0].day.condition.text
            .trim()
            .toLowerCase(),
        });
        setNightWeather({
          temperature: data.forecast.forecastday[0].day.mintemp_c,
          condition: data.forecast.forecastday[0].hour[0].condition.text
            .trim()
            .toLowerCase(),
        });

        console.log(data.current.temp_c, "---Temperature");
        console.log(data.current.condition.text, "---Condition");
      });
  }, [city]);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex rounded-3xl overflow-hidden">
      <div className="w-[60%] h-screen bg-stone-50 flex flex-col-reverse items-center justify-between pb-[82px] rounded-3xl">
        <Card
          value="day"
          temperature={dayWeather.temperature}
          condition={dayWeather.condition}
          cityName={city}
          date={date}
        />
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />
      </div>
      <div
        className="w-[50%] h-screen  bg-stone-50 bg-[url('/Subtract.png')] bg-no-repeat
      flex flex-col-reverse items-center justify-between pb-[82px] rounded-3xl relative bg-cover bg-center"
      >
        <Card
          value="night"
          temperature={nightWeather.temperature}
          condition={nightWeather.condition}
          cityName={city}
          date={date}
        />
        <Logo />
        <Circle />
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <div className="absolute -left-[70px] top-[520px] flex gap-5">
      <img src="left.png" alt="" width={50} height={50} className="" />
      <img src="rightlogo.png" alt="" width={50} height={50} className="" />
    </div>
  );
};

const SearchInput = ({ search, onChangeText, onPressEnter }) => {
  return (
    <div className="h-12 w-[500px] bg-white rounded-3xl mt-5 flex items-center z-10">
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
