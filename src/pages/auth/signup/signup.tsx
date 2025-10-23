import React, { useState } from "react";
import OkikeLogo from '../../../assets/OkikeLogo.png'
import OkikeLogoBlack from '../../../assets/OkikeLogo.png'
import mail from '../../../assets/icon/mail-02.png'
import AuthBgTemplate from "../../auth/authbgTemplate/authBgTemplate";
import PrimaryButton from "../../../component/Button/PrimaryButton";
import LocationModal from "../../../component/modal/LocationModal";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
  return (
    <div className="flex h-screen relative">
        <div
        className={`flex flex-col justify-between w-full md:w-1/2 px-[70px] pt-[133px] pb-[100px] overflow-y-auto hide-scrollbar transition-all duration-300 ${
          isModalOpen ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Top Logo */}
        <div className="">
          <img src={OkikeLogo} alt="Okike logo" className="mb-[72px]" />

<div className="flex flex-col gap-[4px]">
          <h1 className="text-[40px] text-[#1C202A] md:text-4xl font-bold mb-2 flex items-center gap-2 leading-[48px] font-heuvel">
            Welcome to Okike Spaces 👋🏽
          </h1>
          <p className="text-[#1C202A] mb-8 font-[400] text-[15px] leading-[24px] font-satoshi">
           Discover and book verified spaces for your next shoot, meeting, or event.
          </p>
          </div>

          <div className="mt-[1px]">
            <PrimaryButton label="Get Started" onClick={() => setIsModalOpen(true)} />

          <button className="flex text-[14px] text-[#1C202A] items-center justify-center w-full py-3 rounded-full  font-medium mb-3 bg-[#FCFCFC] font-satoshi cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <button className="flex text-[14px] text-[#1C202A] items-center justify-center w-full py-3 rounded-full  font-medium mb-3 bg-[#FCFCFC] gap-2 font-satoshi cursor-pointer">
            <img src={mail} alt="mail"/>
            Continue with Email
          </button>

          <button onClick={() => navigate('/signin')} className="flex text-[14px] text-[#1C202A] items-center justify-center w-full py-3 rounded-full  font-medium mb-3 bg-[#FCFCFC] gap-2 font-satoshi cursor-pointer">
            {/* <img src={mail} alt="mail"/> */}
             Log In Manually
          </button>
          </div>
        </div>

        {/* Footer Links */}
        {/* Footer Links */}
<div className="flex flex-col items-center gap-4 mt-[100px]">
  <img src={OkikeLogoBlack} alt="Okike logo" className="w-[85px]" />

  <div className="flex items-center gap-6 text-sm font-medium leading-[160%] text-[#1C202A] font-satoshi">
    <a href="#" className="underline">Use Terms</a>
    <a href="#" className="underline">Privacy Settings</a>
    <a href="#" className="underline">Customer Service</a>
  </div>
</div>

      </div>

      {/* Right Section */}
       <AuthBgTemplate />

        {isModalOpen && <LocationModal setIsOpen={setIsModalOpen} />} 
    </div>
  );
}
