import PrimaryLogo from "../../../component/Logo/PrimaryLogo";


export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-10 max-sm:px-3 pb-4 z-20 border-b-[0.5px] border-[#FFFFFF66] max-sm:border-[#FFFFFF1A] max-sm:mt-4">

      {/* Logo */}
      <PrimaryLogo />

      
      <div className="bg-[#1C1C1E] text-white rounded-[5px] ml-14 flex items-center gap-8 w-fit h-[52px]  px-[25px] shadow-[0_0_15px_rgba(0,0,0,0.25)] max-sm:hidden">
        <div className="flex flex-col gap-2">
          <span className="block w-[35px] h-[2px] bg-[#FFFFFF]"></span>
          <span className="block w-[35px] h-[2px] bg-[#FFFFFF]"></span>
        </div>

        {/* Menu Items */}
        <div className="flex items-center  gap-10 text-sm font-medium font-clash-Regular -tracking-tight leading-[100%] ">
          <span className="cursor-pointer text-[18px]">Spaces</span>
          <span className="cursor-pointer text-[18px]">How It Works</span>
          <span className="cursor-pointer text-[18px] ">For Hosts</span>
        </div>
      </div>

 <div className="flex flex-col gap-2 md:hidden sm:hidden">
          <span className="block w-[35px] h-[2px] bg-[#FFFFFF]"></span>
          <span className="block w-[35px] h-[2px] bg-[#FFFFFF]"></span>
        </div>
     
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

    </header>
  );
}
