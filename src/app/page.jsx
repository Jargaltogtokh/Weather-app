/** @type {import('tailwindcss').Config} */

import { Card } from "./component/card";
import { SearchIcon } from "./component/SearchIcon";

export default function Home() {
  return (
    <div className="w-full h-screen flex rounded-3xl">
      <div className="w-[50%] h-screen bg-stone-50 flex flex-col-reverse items-center justify-between pb-[82px] rounded-3xl">
        <Card value="day" />
        <SearchInput />
      </div>
      <div className="w-[50%] h-screen bg-[#0F141E] flex flex-col-reverse items-center justify-between pb-[82px] rounded-3xl">
        <Card value="night" />
      </div>
    </div>
  );
}

const Cirle = () => {
  return (
    <div className="absolute rounded-full w-36 h-36 bg-red-200 flex flex-col-reverse items-center justify-center"></div>
  );
};

const SearchInput = () => {
  return (
    <div className="h-12 w-[500px] bg-white rounded-3xl mt-5 flex items-center">
      <SearchIcon />
      <input
        id=""
        name=""
        type="text"
        placeholder="Search"
        className="w-4/6 ml-2 mt-2 py-1 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-800 outline-none focus:outline-0  "
      />
    </div>
  );
};
