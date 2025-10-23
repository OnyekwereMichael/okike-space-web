import arrowBack from "../../../assets/icon/arrow-move-up-left.png";
import cancel from "../../../assets/icon/cancel.png";
import OkikeLogo from "../../../assets/OkikeLogo.png";
import OkikeLogoBlack from "../../../assets/OkikeLogoblack.png";
import phoneIcon from "../../../assets/icon/phone.png";
import Success from "../../../component/toast/success/success";
import FooterAuth from "../Footer/Footer-auth";
import SecondaryButton from "../../../component/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import mail_auth from '../../../assets/icon/mail-auth.png'

export default function VerifyEmail() {
    const navigate = useNavigate()
  return (
<div className="justify-center flex-col py-14 inset-0 overflow-y-auto bg-[#F9F9F9] z-50 flex items-center min-h-screen font-satoshi">
  <div className="w-[527px] h-[610px] bg-white rounded-[25px] relative pt-10 pb-2 shadow-sm px-5  flex flex-col justify-between mb-10">
    <div className="absolute top-6 left-6 cursor-pointer">
      <img src={arrowBack} alt="Back" />
    </div>
    <div className="absolute top-6 right-6 cursor-pointer">
      <img src={cancel} alt="Close" />
    </div>

    {/* Content Section */}
    <div>
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={OkikeLogo} alt="Okike Logo" className="h-7" />
      </div>

      {/* Title */}
      <h2 className="text-[24px] leading-[36px] font-semibold text-[#1C202A] font-heuvel flex items-center gap-2 mb-1">
        Verify your email 📩
      </h2>

      {/* Subtitle */}
      <p className="text-[14px] text-[#1C202A] leading-[160%] font-[400]">
        We’ll send a 6-digit code to 
        <span className="font-semibold"> email address</span>.<br />
      </p>

      <p className="text-[14px] text-[#1C202A] mb-6 mt-[2px] leading-[160%] font-[400]">
        Enter it below to continue.
      </p>

      {/* Input */}
      <div className="border border-[#E9E9E9] rounded-[12px] py-3 px-4 flex items-center gap-2 mb-2">
        <img src={mail_auth} alt="Mail" />
        <input
          type="text"
          placeholder="Enter Email"
          className="outline-none text-[15px] text-[#1C202A] font-medium placeholder:text-[#D7D7D7] w-[493px]"
        />
      </div>
      <p className="text-[12px] text-[#7B8396] leading-[160%] font-[500]">
        We’ll send a one-time code to verify your account
      </p>
    </div>

    {/* ✅ Button at Bottom */}
    <div>
      <SecondaryButton label="Send verification code" onClick={() => navigate('/verify-account')} />
    </div>
  </div>

  <FooterAuth />
</div>

  );
}
