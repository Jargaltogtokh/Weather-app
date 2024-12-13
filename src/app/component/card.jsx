"use client";

export function Card({ cityName, value, temperature, condition }) {
  const nightColor = "bg-gradient-to-b from-[#1F2937] to-[#111827] text-white";
  const color = value === "night" ? nightColor : "bg-white";
  const cardBackground = value === "night" ? "bg-[#111827]" : "bg-white";

  return (
    <div
      className={`w-[414px] h-[868px] rounded-[78px] ${cardBackground} flex justify-center`}
    >
      <div
        className={`w-[414px] h-[868px] bg-white rounded-[78px] mt-[10px] ${color}`}
      >
        <div className={"mt-[56px] ml-[50px]"}>
          <p className="text-[24px] text-[#9CA3AF]"> December 12, 2024 </p>
          <h1 className="text-[50px] font-extrabold"> {cityName}</h1>
          <h1 className="text-[100px] font-extrabold mt-[380px] flex ">
            {temperature}
          </h1>
          <h2 className="text-[24px] text-[#FF8E27] font-bold flex ">
            {condition}
          </h2>
        </div>
      </div>
    </div>
  );
}
