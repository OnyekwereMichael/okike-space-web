import OkikeLogo from "../../assets/OkikeLogo.png";
import arrowBack from "../../assets/icon/arrow-move-up-left.png";
import cancel from "../../assets/icon/cancel.png";
import CheckMark from '../../assets/icon/checkMarkKyc.png'
import Info from '../../assets/icon/info-circle.png';
import SecondaryButton from "../../component/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import FooterAuth from "../auth/Footer/Footer-auth";


export default function IntroScreen() {
    const navigate = useNavigate()
  return (
    <div className="justify-center flex-col py-14 inset-0 overflow-y-auto bg-[#F9F9F9] z-50 flex items-center min-h-screen font-satoshi">
      {/* Modal */}
      <div className="w-[527px] h-[610px] bg-white rounded-2xl  px-5 pb-3 pt-6 relative flex flex-col justify-between mb-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <img src={arrowBack} alt="Back" className="cursor-pointer" />
            <div className="flex mt-2 items-center gap-1 text-[#7A5CFF] font-semibold text-lg">
              <img src={OkikeLogo} alt="Okike" />
            </div>
            <img src={cancel} alt="Close" className="cursor-pointer" />
          </div>

          {/* Title */}
          <h2 className="text-[24px] font-semibold text-[#1C202A] leading-[36px]  font-heuvel mt-9">
           Become a Verified Host ✅
          </h2>
          <p className="text-[15px] text-[#1C202A] font-[400] leading-[160%] mb-5">
            We verify every host to keep our community safe and trusted. It only
            takes a few minutes to get verified.
          </p>

          {/* Checklist */}
          <div className="space-y-4 mb-5">
            {[
              "Confirm your identity",
              "Verify your space",
              "Add payout account",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
              >
                <img src={CheckMark} alt="Check Mark" className="w-[24px] h-[24px]" />
                <span className="text-[14px] text-[#1C202A] font-medium leading-[160%]">{text}</span>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="flex items-start w-[492px]  gap-2 p-3 rounded-[15px] bg-[#F5F8FF] h-[62px] text-sm">
            <img src={Info} alt="Info" />
            <p className="text-[#7263FF] text-[14px] font-medium leading-[160%]">
              Your details are private and encrypted — only Okike’s team can
              view them.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="">
               <SecondaryButton label="Continue" onClick={() => navigate('/verify-identity')}  />
                 </div>
      </div>

      {/* Footer */}
      <FooterAuth />
    </div>
  );
}
