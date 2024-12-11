/** @type {import('tailwindcss').Config} */

export default function Home() {
  return (
    <div className="w-full h-screen flex rounded-3xl">
      <div className="w-[50%] h-screen bg-stone-50">
        <label
          htmlFor="search"
          className="block text-sm/6 font-medium text-gray-900"
        >
          <input
            id=""
            name=""
            type="text"
            placeholder="Search"
            className="block w-4/6 grow py-2.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-xl mt-10 ml-10"
          />
        </label>
        <div class="h-4/6 w-[414px] bg-white mt-24 ml-60 rounded-2xl"></div>
      </div>
      <div className="w-[50%] h-screen bg-[#0F141E] rounded-3xl">
        d<div class="h-4/6 w-[414px] bg-black mt-40 ml-60 rounded-2xl"></div>
      </div>
    </div>
  );
}
