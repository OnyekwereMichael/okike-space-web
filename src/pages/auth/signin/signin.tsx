import { useState } from "react";
import OkikeLogo from '../../../assets/OkikeLogo.png'
import arrowBack from "../../../assets/icon/arrow-move-up-left.png";
import cancel from "../../../assets/icon/cancel.png";
import FooterAuth from "../Footer/Footer-auth";
import SecondaryButton from "../../../component/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";


export default function Signin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleContinue = () => {
    console.log("Continue with email:", email);
    // Add navigation or API call here
  };

  return (
    <div className="justify-center flex-col py-14 inset-0 overflow-y-auto bg-[#F9F9F9] z-50 flex items-center min-h-screen font-satoshi">
      {/* Card */}
      <div className="bg-white rounded-[25px] w-[527px] h-[610px] px-5 py-5 relative flex flex-col justify-between">

  <div>
    <div className="absolute top-6 left-4 cursor-pointer">
      <img src={arrowBack} alt="Back"  />
    </div>
    <div className="absolute top-6 right-4 cursor-pointer">
      <img src={cancel} alt="Close" />
    </div>

    <div className="flex justify-center mb-6 mt-2">
      <img src={OkikeLogo} alt="Okike Logo" />
    </div>

    {/* Title */}
    <h2 className="text-[24px] font-semibold text-[#1C202A] leading-[36px] mb-1 font-heuvel mt-10">
      Welcome back 👋🏽
    </h2>
    <div className="text-[15px] font-[400] leading-[160%] mb-6 flex gap-1">
      <p className="leading-[160%] ">Enter your email to continue. Don’t have an account?</p>
      <span className="text-[#7263FF] font-bold cursor-pointer text-[15px]">Get Started.</span>
    </div>

    {/* Input */}
    <label className="block text-[15px] leading-[160%] font-bold text-[#1C202A] ">
      Email Address
    </label>
    <div className="border border-[#E9E9E9] rounded-[12px] py-3 px-4 flex items-center gap-2 mb-3 mt-3 relative">
      <input
        type="text"
        placeholder="e.g. user@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="outline-none text-[15px] text-[#1C202A] font-medium placeholder:text-[#D7D7D7] w-full"
      />
    </div>
  </div>

  {/* Continue Button at the bottom */}
<div>
      <SecondaryButton label="Continue" onClick={() => navigate('/verify-account')} />
    </div>
</div>


      {/* Footer */}
      <FooterAuth />
    </div>
  );
}
