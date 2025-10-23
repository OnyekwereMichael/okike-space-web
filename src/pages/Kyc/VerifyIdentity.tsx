import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import OkikeLogo from "../../assets/OkikeLogo.png";
import arrowBack from "../../assets/icon/arrow-move-up-left.png";
import cancel from "../../assets/icon/cancel.png";
import CheckMark from '../../assets/icon/checkMarkKyc.png'
import Info from '../../assets/icon/info-circle.png';
import SecondaryButton from "../../component/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import FooterAuth from "../auth/Footer/Footer-auth";
import { useState } from "react";


export default function VerifyIdentity() {
    const navigate = useNavigate()
      const [selected, setSelected] = useState("book");
    
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
            Verify your identity 🪪
          </h2>
          <p className="text-[15px] text-[#1C202A] font-[400] leading-[160%] mb-5">
            To keep Okike Spaces safe for everyone, we need to confirm who you are.
            Choose a valid ID type to upload or scan.
          </p>

             <div className="mt-4">
            <label className="text-[15px] text-[#1C202A] font-bold leading-[160%]">
              Choose your ID type:
            </label>

            <div className="flex flex-col  mt-3">
              <label
                className={`flex items-center gap-2 cursor-pointer py-2`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value="book"
                  checked={selected === "book"}
                  onChange={() => setSelected("book")}
                  className="w-[22px] h-[22px] accent-[#5749D3] focus:ring-[#5749D3]"
                />
                <span className="text-[15px] text-[#1C202A] leading-[150%] font-medium">
                  National ID (vNIN / NIN Slip)
                </span>
              </label>

              <label
                className={`flex items-center gap-2 cursor-pointer py-2`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value="list"
                  checked={selected === "list"}
                  onChange={() => setSelected("list")}
                  className="w-[22px] h-[22px] accent-[#5749D3] focus:ring-[#5749D3]"
                />
                <span className="text-[15px] text-[#1C202A] leading-[150%] font-medium">
                  Driver’s Licence
                </span>
              </label>
              <label
                className={`flex items-center gap-2 cursor-pointer py-2`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value="list"
                  checked={selected === "list"}
                  onChange={() => setSelected("list")}
                  className="w-[22px] h-[22px] accent-[#5749D3] focus:ring-[#5749D3]"
                />
                <span className="text-[15px] text-[#1C202A] leading-[150%] font-medium">
                  Voter’s Card
                </span>
              </label>

              <label
                className={`flex items-center gap-2 cursor-pointer py-2`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value="list"
                  checked={selected === "list"}
                  onChange={() => setSelected("list")}
                  className="w-[22px] h-[22px] accent-[#5749D3] focus:ring-[#5749D3]"
                />
                <span className="text-[15px] text-[#1C202A] leading-[150%] font-medium">
                  Identity Card 
                </span>
              </label>
            </div>
          </div>

        
        </div>

        {/* Button */}
        <div className="">
               <SecondaryButton label="Start Verification" onClick={() => navigate('/upload-identity')}  />
                 </div>
      </div>

      {/* Footer */}
      <FooterAuth />
    </div>
  );
}
