import { useState } from "react";
import PrimaryLogo from "../../../component/Logo/PrimaryLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-10 max-sm:px-3 pb-4 z-20 border-b-[0.5px] border-[#FFFFFF66] max-sm:border-[#FFFFFF1A] max-sm:mt-4">

      {/* Logo */}
      <PrimaryLogo />

      {/* Desktop Menu (unchanged) */}
      <div className="bg-[#1C1C1E] text-white rounded-[5px] ml-14 flex items-center gap-8 w-fit h-[52px]  px-[25px] shadow-[0_0_15px_rgba(0,0,0,0.25)] max-sm:hidden">
        <div className="flex flex-col gap-2">
          <span className="block w-[35px] h-[2px] bg-[#FFFFFF]"></span>
          <span className="block w-[35px] h-[2px] bg-[#FFFFFF]"></span>
        </div>

        <div className="flex items-center  gap-10 text-sm font-medium font-clash-Regular -tracking-tight leading-[100%] ">
          <span className="cursor-pointer text-[18px]">Spaces</span>
          <span className="cursor-pointer text-[18px]">How It Works</span>
          <span className="cursor-pointer text-[18px] ">For Hosts</span>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div
        className="flex flex-col gap-2 md:hidden sm:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="block w-[35px] h-[2px] bg-[#FFFFFF] transition-all duration-300"></span>
        <span className="block w-[35px] h-[2px] bg-[#FFFFFF] transition-all duration-300"></span>
      </div>

      {/* Desktop Buttons (unchanged) */}
      <div className="flex items-center gap-2 text-sm max-sm:hidden">
        <button
          className="
            px-4 py-2 rounded-[5px]
            bg-[#1C1C1E]
            shadow-[0_0_15px_rgba(0,0,0,0.25)]
            border-4
            font-clash-Medium
            text-[20px]
            leading-[100%]
            tracking-tight
            font-500
          "
        >
          Login
        </button>

        <button
          className="
            px-5 py-2 rounded-lg
            bg-[#1C1C1E]
            shadow-[0_0_15px_rgba(0,0,0,0.25)]
            border-4
            font-clash-Medium
            text-[20px]
            leading-[100%]
            tracking-tight
            font-500
          "
        >
          Signup
        </button>
      </div>


<div
  className={`
    absolute top-full left-0 w-full
    bg-[#1C1C1E] text-white
    flex flex-col gap-6 px-6 rounded-b-[10px]
    shadow-[0_0_25px_rgba(0,0,0,0.4)]
    transition-all duration-500 ease-out overflow-hidden
    md:hidden sm:hidden
    ${open ? "py-6 max-h-[500px] opacity-100" : "py-0 max-h-0 opacity-0"}
  `}
>
  <span className="text-[18px] font-clash-Regular">Spaces</span>
  <span className="text-[18px] font-clash-Regular">How It Works</span>
  <span className="text-[18px] font-clash-Regular">For Hosts</span>

  <div className="flex items-center gap-2 text-sm ">
        <button
          className="
            px-4 py-2 rounded-[5px]
            bg-[#1C1C1E]
            shadow-[0_0_15px_rgba(0,0,0,0.25)]
            border-4
            font-clash-Medium
            text-[20px]
            leading-[100%]
            tracking-tight
            font-500
          "
        >
          Login
        </button>

        <button
          className="
            px-5 py-2 rounded-lg
            bg-[#1C1C1E]
            shadow-[0_0_15px_rgba(0,0,0,0.25)]
            border-4
            font-clash-Medium
            text-[20px]
            leading-[100%]
            tracking-tight
            font-500
          "
        >
          Signup
        </button>
      </div>
</div>

    </header>
  );
}
