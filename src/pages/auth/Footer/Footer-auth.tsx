import React from 'react'
import OkikeLogoBlack from "../../../assets/OkikeLogoblack.png";

const Footer = () => {
  return (
          <div className="mt-8 text-center text-[#1C202A] font-satoshi font-medium leading-[160%] text-[14px]">
        <img
          src={OkikeLogoBlack}
          alt="Okike"
          className="mb-4 mx-auto"
        />
        <div className="space-x-4">
          <a href="#" className=" underline underline-offset-[4px]">
            Use Terms
          </a>
          <a href="#" className="text-[14px] underline underline-offset-[4px]">
            Privacy Settings
          </a>
          <a href="#" className="text-[14px] underline underline-offset-[4px]">
            Customer Service
          </a>
        </div>
      </div>
  )
}

export default Footer