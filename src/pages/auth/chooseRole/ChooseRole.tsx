import React, { useState } from "react";
import OkikeLogoGreen from "../../../assets/OkikeGreen.png";
import ArrowBack from "../../../assets/icon/arrowBack.png";
import AuthBgTemplate from "../../auth/authbgTemplate/authBgTemplate";
import host_img from '../../../assets/book-space.png';
import book_img from '../../../assets/list-space.png'
export default function ChooseRole() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="flex h-screen">
     <AuthBgTemplate />
      {/* Right Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between px-6 md:px-14 py-8">
        <div>
          <div className="mx-auto">
            <img src={OkikeLogoGreen} alt="Okike Logo" className="mx-auto" />
          </div>

           <img
              src={ArrowBack}
              alt="Back"
              className=" cursor-pointer hover:opacity-70 my-3"
            />

          {/* Title */}
          <div className="text-center">
            <h1 className="text-[22px] font-medium text-[#1C202A] leading-[100%] mb-2 font-clash-Medium">
              Choose What You’re Here For
            </h1>
            <p className="text-[12px] leading-[100%] tracking-[1] font-[400] text-[#1C202A] font-inter-Regular">
             Just a few quick details to personalize your experience. Have an account already?.
              <span className="text-[#023327] cursor-pointer text-[12px] leading-[100%] tracking-[1] font-[400 font-inter-Regula">
                Sign In
              </span>
            </p>
          </div>

          {/* Role Cards */}
        {/* Role Cards */}
<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-10">
  {/* Book Spaces Card */}
  <div
    onClick={() => setSelectedRole("book")}
    className="flex flex-col items-center  cursor-pointer"
  >
    <div
      className={`flex flex-col items-center justify-center rounded-[16px] h-[150px] w-[253px] p-8 transition-all duration-200  ${
        selectedRole === "book"
          ? "border-2 border-[#006241] bg-[#EAF6EF]"
          : "border-gray-200 bg-white hover:border-[#006241]/50"
      }`}
    >
      <img
        src={book_img}
        alt="Book spaces"
      />
    </div>
    <p className="text-[14px] font-[400]  text-[#1C202A] font-inter-Regular leading-[100%] tracking-[1] mt-4">
      I’m here to book spaces
    </p>
  </div>

  {/* List Spaces Card */}
  <div
    onClick={() => setSelectedRole("list")}
    className="flex flex-col  cursor-pointer"
  >
    <div
      className={`flex flex-col items-center justify-center rounded-[16px]  h-[150px] w-[253px] transition-all duration-200  ${
        selectedRole === "list"
          ? "border-[#006241] border-2 bg-[#EAF6EF]"
          : "border-gray-200 bg-white hover:border-[#006241]/50"
      }`}
    >
      <img
        src={host_img}
        alt="List spaces"
       
      />
    </div>
    <p className="text-[14px] font-[400]  text-[#1C202A] font-inter-Regular leading-[100%] tracking-[1] mt-4 text-center">
      I’m here to list spaces
    </p>
  </div>
</div>

        </div>

        {/* Get Started Button */}
        <div className="mt-10">
          <button 
            disabled={!selectedRole}
            className={`w-[552px] h-[50px] py-4 rounded-[32px] text-[#FFFFFF]  text-[17px] transition leading-[100%] tracking-[1] font-inter-Regular font-[400] ${
              selectedRole
                ? "bg-[#023327] hover:bg-[#023327] cursor-pointer"
                : "bg-[#A5A5A5] cursor-not-allowed"
            }`}
          >
             Get started
          </button>
        </div>
      </div>
    </div>
  );
}
