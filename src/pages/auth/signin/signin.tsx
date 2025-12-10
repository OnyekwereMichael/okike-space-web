import React, { useState } from "react";
import OkikeLogoGreen from "../../../assets/OkikeGreen.png";
import ArrowBack from "../../../assets/icon/arrowBack.png";
import googleIcon from "../../../assets/icon/Google.png";
import AuthBgTemplate from "../../auth/authbgTemplate/authBgTemplate";
import PrimaryButton from "../../../component/Button/PrimaryButton";
import eyeoff from '../../../assets/icon/eye-off.png'

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Side (Fixed Background) */}
 <AuthBgTemplate />
      

      {/* Right Side (Scrollable Content) */}
      <div className="w-full md:ml-[650px] h-full overflow-y-auto px-6 md:px-10 py-8 scroll-smooth hide-scrollbar">
        <div className=" mx-auto">
          {/* Okike Logo */}
          <div className="mx-auto mb-4">
            <img src={OkikeLogoGreen} alt="Okike Logo" className="mx-auto" />
          </div>

          {/* Back Arrow */}
          <img
            src={ArrowBack}
            alt="Back"
            className="cursor-pointer hover:opacity-70 my-3"
          />

          {/* Title */}
          <div className="text-center mt-4">
            <h1 className="text-[32px] font-medium text-[#000000] leading-[100%] mb-2 font-clash-Medium">
              Welcome back!
            </h1>
            <p className="text-[14px] font-[400] tracking-[1] leading-[100%] text-[#9C9C9C] font-inter-Regular">
              Don’t have an account?
              <span className="text-[14px] font-[400] tracking-[1] leading-[100%] text-[#023327] ml-1 font-inter-Regular">
                Sign up HERE
              </span>
            </p>
          </div>

          {/* Form Section */}
          <form className="mt-8 space-y-7 mb-12">
            <div>
              <label className="block text-sm mb-[7px] font-inter-Medium text-[#0B0B0B] leading-[100%] tracking-[1] font-medium">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="placeholder-[#8989894D] placeholder:text-[12px] leading-[100%] tracking-[1] placeholder:font-[400] font-inter-Regular text-[14px] text-black border-[1px] border-[#E2E2E2] rounded-[8px] px-2 h-[50px] w-full py-2 outline-none"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm mb-[7px] font-inter-Medium text-[#0B0B0B] leading-[100%] tracking-[1] font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="placeholder-[#8989894D] placeholder:text-[12px] leading-[100%] tracking-[1] placeholder:font-[400] font-inter-Regular text-[14px] text-black border-[1px] border-[#E2E2E2] rounded-[8px] px-2 h-[50px] w-full py-2 outline-none"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 cursor-pointer text-gray-400"
                >
                  <img src={eyeoff} alt="eye off"/>
                </span>
              </div>
            </div>

          </form>

             <PrimaryButton label="Sign in" onClick={() => {}}/>

           

         
            
              <p className="text-[#000000] text-[20px] font-Inter-Regular leading-[100%] tracking-[1] text-center my-3">Or</p>
         

            {/* Google Signup */}
            <button
              type="button"
              className="w-full flex items-center justify-center border-[1px] border-[#023327] rounded-[32px] h-[50px] w-[552px] p-[8px] gap-2 hover:bg-[#f7f7f7] transition"
            >
              <img src={googleIcon} alt="Google"/>
              <span className="text-[#0B0B0B] font-[400] text-[20px] leading-[100%] tracking-[1] font-inter-Regular">
                Sign in with email
              </span>
            </button>

            {/* Terms */}
            <p className="text-[12px] leading-[160%] tracking-[1] font-[400]  text-center  text-gray-500 font-inter-Regular w-[265px] mx-auto mt-2">
              By signing in you agree to our{" "}
              <span className="underline text-black cursor-pointer">terms of use</span> and{" "}
              <span className="underline cursor-pointer text-black ">privacy policy</span>
            </p>
        </div>
      </div>
    </div>
  );
}
