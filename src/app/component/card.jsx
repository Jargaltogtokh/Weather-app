"use client";

import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FcLikePlaceholder } from "react-icons/fc";
import { CiUser } from "react-icons/ci";
export function Card({ cityName, value, temperature, condition, date }) {
  const gradient =
    value === "day"
      ? "bg-gradient-to-b from-[#111827] to-[#6B7280]"
      : "bg-gradient-to-b from-[#F9FAFB] to-[#000000]";
  const nightColor = "bg-gradient-to-b from-[#1F2937] to-[#111827] text-white";
  const color = value === "night" ? nightColor : "bg-white";
  const cardBackground = value === "night" ? "bg-[#111827]" : "bg-white";

  let img = "";

  if (value === "day") {
    img = condition?.includes("rain")
      ? "/DayRain.png"
      : condition?.includes("snow")
      ? "/Snow.png"
      : condition?.includes("overcast")
      ? "/DayClouds.png"
      : condition?.includes("cloud")
      ? "/DayClouds.png"
      : condition?.includes("mist")
      ? "/DayClouds.png"
      : condition?.includes("wind")
      ? "/Windy.png"
      : "/DaySun.png";
  } else {
    img = condition?.includes("rain")
      ? "/NightRain.png"
      : condition?.includes("snow")
      ? "/NightSnow.png"
      : condition?.includes("cloud")
      ? "/NightClouds.png"
      : condition?.includes("overcast")
      ? "/NightClouds.png"
      : condition?.includes("thunder")
      ? "/NightThunder.png"
      : condition?.includes("wind")
      ? "/NightWind.png"
      : "/NightMoon.png";
  }

  console.log(img);
  return (
    <div
      className={`w-[414px] h-[868px] rounded-[78px] ${cardBackground} flex justify-center z-10 `}
    >
      <div className={`w-[414px] h-[868px] bg-white rounded-[78px] ${color}`}>
        <div className={"mt-[56px] ml-[50px]"}>
          <p className="text-[24px] text-[#9CA3AF]"> {date} </p>
          <h1 className="text-[50px] font-extrabold flex gap-5">
            {cityName}
            <CiLocationOn className="w-[28px] h-[28px]" />
          </h1>

          <img src="location.png" alt="" />
          <img
            src={img}
            width={262}
            height={262}
            alt=""
            className="absolute mt-[60px]"
          />
          <h1
            className={`text-[100px] font-extrabold text-transparent bg-clip-text ${gradient} mt-[380px] flex`}
          >
            {temperature}°
          </h1>
          <h2 className="text-[34px] text-[#FF8E27] font-extrabold flex ">
            {condition}
          </h2>
          <div className="flex mt-[40px] gap-16">
            <CiHome className="w-[32px] h-[32px] " />
            <CiLocationOn className="w-[32px] h-[32px]" />
            <FcLikePlaceholder className="w-[32px] h-[32px]" />
            <CiUser className="w-[32px] h-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
