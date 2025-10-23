import OkikeLogo from "../../assets/OkikeLogo.png";
import arrowBack from "../../assets/icon/arrow-move-up-left.png";
import cancel from "../../assets/icon/cancel.png";
import SecondaryButton from "../../component/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import FooterAuth from "../auth/Footer/Footer-auth";

export default function UploadIdentity() {
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
            Upload your National ID (NIN Slip)
          </h2>
          <p className="text-[15px] text-[#1C202A] font-[400] leading-[160%] mb-5">
            Make sure the photo is clear and all details are visible.
          </p>

             <div className="mt-4">
                 <h2 className="text-[15px] font-bold text-[#1C202A] leading-[160%] mb-1"> 
                  Upload Images of your identity card
          </h2>
          <p className="text-[15px] text-[#1C202A] font-[400] leading-[160%] mb-5">
            Make sure your photos aren’t blurry and the front of your NIN Slip clealy shows your face.
          </p>
             </div>

        
        </div>

        {/* Button */}
        <div className="">
               <SecondaryButton label="Done" onClick={() => navigate('/kyc/success')}  />
                 </div>
      </div>

      {/* Footer */}
      <FooterAuth />
    </div>
  );
}
