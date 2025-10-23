// import OkikeLogo from "../../../assets/OkikeLogo.png";
// import OkikeLogoBlack from "../../../assets/OkikeLogoblack.png";
// import arrowBack from "../../../assets/icon/arrow-move-up-left.png";
// import cancel from "../../../assets/icon/cancel.png";
// import checkmark from '../../../assets/icon/checkmark.png'
// import SecondaryButton from "../../../component/Button/SecondaryButton";

// export default function GetStarted() {
//   return (
//     <div className="fixed inset-0 overflow-y-auto bg-[#F9F9F9] z-50 flex flex-col items-center min-h-screen py-10">
//       {/* Main Card */}
//       <div className="w-[527px] max-w-[90%] h-[610px] rounded-[25px] bg-white pt-10 pb-2 px-5 relative flex flex-col justify-between ">
//         {/* Top Icons */}
        // <div className="absolute top-6 left-6 cursor-pointer">
        //   <img src={arrowBack} alt="Back" />
        // </div>
        // <div className="absolute top-6 right-6 cursor-pointer">
        //   <img src={cancel} alt="Close" />
        // </div>

        // <div>
        //   <div className="flex justify-center mb-8">
        //     <img src={OkikeLogo} alt="Okike Logo"  />
        //   </div>

//           <div className="text-left">
//             <h2 className="text-[24px] leading-[36px] font-heuvel font-[600] text-[#1C202A]">
//               Let’s get you started ✨
//             </h2>
//             <p className="text-sm text-[#1C202A] leading-[160%] mt-1 font-satoshi font-[400]">
//               Enter your email or phone to create your account or{" "}
//               <span className="text-sm text-[#7263FF] leading-[160%] mt-2 font-satoshi font-semibold">
//                 Sign In.
//               </span>
//             </p>
//           </div>


//           <div className="relative mb-3 mt-6 rounded-[15px] border border-[#EFEFEF]  px-3 py-2 flex items-center justify-between ">
//             <div>
//             <label className="text-[12px] text-[#1C202A] leading-[160%] font-satoshi font-medium mb-1 block">
//               Phone Number or Email Address
//             </label>
//             <div className="">
//               <input
//                 type="text"
//                 defaultValue="+234-9114145803"
//                 className="w-full outline-none text-[15px] text-[#1C202A] leading-[160%] font-satoshi font-medium"
//               />
//             </div>
//             </div>
//               <img src={checkmark} alt="Checkmark"  />
//           </div>

//           {/* Helper Text */}
//           <p className="font-satoshi leading-[160%] font-medium text-[#7B8396] text-[10px] mt-2">
//             We’ll send a one-time code to verify your account — no password
//             needed.
//           </p>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-44">
//          <SecondaryButton label="Send verification code" onClick={() => {}} />
//         </div>
//       </div>

//       {/* Footer */}
      // <div className="mt-8 text-center text-[#1C202A] font-satoshi font-medium leading-[160%] text-[14px]">
      //   <img
      //     src={OkikeLogoBlack}
      //     alt="Okike"
      //     className="mb-4 mx-auto"
      //   />
      //   <div className="space-x-4">
      //     <a href="#" className=" underline underline-offset-[4px]">
      //       Use Terms
      //     </a>
      //     <a href="#" className="text-[14px] underline underline-offset-[4px]">
      //       Privacy Settings
      //     </a>
      //     <a href="#" className="text-[14px] underline underline-offset-[4px]">
      //       Customer Service
      //     </a>
      //   </div>
      // </div>
//     </div>
//   );
// }





import OkikeLogo from "../../../assets/OkikeLogo.png";
import arrowBack from "../../../assets/icon/arrow-move-up-left.png";
import cancel from "../../../assets/icon/cancel.png";
import Info from '../../../assets/icon/info-circle.png';
import { useState } from "react";
import SecondaryButton from "../../../component/Button/SecondaryButton";
import FooterAuth from "../Footer/Footer-auth";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const [selected, setSelected] = useState("book");
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 overflow-y-auto bg-[#F9F9F9] z-50 flex flex-col items-center min-h-screen py-10 font-satoshi">
      {/* Card Container */}
      <div className="w-[527px] max-w-[90%] h-[610px] rounded-[25px] bg-white pt-6 pb-2 px-5 relative flex flex-col justify-between ">
        {/* Header Icons */}
        <div className="flex justify-between items-center">
          <img src={arrowBack} alt="Back" />
          <img src={OkikeLogo} alt="Okike"  />
          <img src={cancel} alt="Close" />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h1 className="text-xl font-semibold text-[24px] leading-[36px] font-heuvel text-[#1C202A] flex items-center gap-1">
            Tell us about you 👋🏽
          </h1>
          <p className="text-[15px] mt-1 flex gap-1">
           <p className="font-medium leading-[160%]">Just a few quick details to personalize your experience.</p>
            <span><a href="#" className="text-[#7263FF] leading-[160%] font-medium hover:underline">
              Sign In.
            </a></span>
          </p>

          {/* Input Field */}
          <div className="mt-6">
            <label className="text-[15px] text-[#1C202A] font-bold leading-[160%]">Your Name</label>
            <input
              type="text"
              placeholder="e.g. Adaeze Okafor"
              className=" mt-2 px-4 py-3 border border-[#EFEFEF] rounded-[15px] text-[#000] font-medium leading-[160%] placeholder-[#D7D7D7] w-[493px] h-[56px]"
            />
          </div>

          {/* Radio Options */}
          <div className="mt-4">
            <label className="text-[15px] text-[#1C202A] font-bold leading-[160%]">
              What are you here for today? ✨
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
                  I'm here to book spaces
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
                  I'm here to list my space
                </span>
              </label>
            </div>

            {/* Info Box */}
            <div className="mt-4 flex items-center gap-2 bg-[#F5F8FF] w-[493px] h-[48px] rounded-[15px] px-3">
              <img src={Info} alt="Info"  />
              <p className="text-[14px] leading-[160%] font-medium text-[#7263FF]">
                You can edit these details anytime in your profile settings.
              </p>
            </div>
          </div>
        </div>

          <div className="mt-16">
        <SecondaryButton label="Continue" onClick={() => navigate('/verify-email')}  />
          </div>
      </div>

    <FooterAuth />
    </div>
  );
}
