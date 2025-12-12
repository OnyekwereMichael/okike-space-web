// import React, { useState } from "react";
// import OkikeLogoGreen from "../../assets/OkikeGreen.png";
// import ArrowBack from "../../assets/icon/arrowBack.png";
// import PrimaryButton from "../../component/Button/PrimaryButton";


// export default function IntroScreen() {
  // const [checked, setChecked] = useState([true, true, true, true]); // all completed

  // const steps = [
  //   "Company info",
  //   "Confirm your identity",
  //   "Verify your space",
  //   "Add payout account",
  // ];

//   return (
//     <div className="flex h-screen w-full items-center justify-center bg-gray-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col">
//         {/* Top Section */}
//         <div className="flex items-center mb-6">
//           <img
//             src={ArrowBack}
//             alt="Back"
//             className="cursor-pointer w-6 h-6 mr-4"
//           />
//           <img src={OkikeLogoGreen} alt="Okike Logo" className="w-24 mx-auto" />
//         </div>

//         {/* Title */}
//         <h1 className="text-xl md:text-2xl font-medium text-center mb-2">
//           Become a Verified Host ✅
//         </h1>
//         <p className="text-sm text-gray-500 text-center mb-6">
//           We verify every host to keep our community safe and trusted. It only
//           takes a few minutes to get verified.
//         </p>

        // {/* Steps */}
        // <div className="flex flex-col gap-3 mb-6">
        //   {steps.map((step, idx) => (
        //     <div key={idx} className="flex items-center gap-3">
        //       <div
        //         className={`w-5 h-5 rounded-full flex items-center justify-center ${
        //           checked[idx] ? "bg-green-800" : "border border-gray-300"
        //         }`}
        //       >
        //         {checked[idx] && (
        //           <span className="text-white text-xs">✔</span>
        //         )}
        //       </div>
        //       <span className="text-gray-700 text-sm">{step}</span>
        //     </div>
        //   ))}
        // </div>

//         {/* Info box */}
        // <div className="bg-gray-100 text-gray-400 text-xs p-3 rounded-lg mb-6 text-center">
        //   Your details are private and encrypted — only Okike’s team can view
        //   them.
        // </div>

//         {/* Next Button */}
//         <PrimaryButton label="Next" onClick={() => {}} />
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import OkikeLogoGreen from "../../assets/OkikeGreen.png";
// import ArrowBack from "../../assets/icon/arrowBack.png";
// import AuthBgTemplate from "../auth/authbgTemplate/authBgTemplate";
// import PrimaryButton from "../../component/Button/PrimaryButton";
// import checkMark from '../../assets/icon/checkmark-green.png';
// import info from '../../assets/icon/info_circle.png'

// export default function IntroScreen() {
//   const [checked, setChecked] = useState([true, true, true, true]); // all completed

//   const steps = [
//     "Company info",
//     "Confirm your identity",
//     "Verify your space",
//     "Add payout account",
//   ];

//   return (
//     <div className="flex h-screen w-full overflow-hidden">
//       {/* Left Side (Fixed Background) */}
//  <AuthBgTemplate />
      

//       {/* Right Side (Scrollable Content) */}
//       <div className="w-full md:ml-[650px] h-full overflow-y-auto px-6 md:px-12 py-8 scroll-smooth hide-scrollbar">
//         <div className=" mx-auto">
//           {/* Okike Logo */}
//           <div className="mx-auto mb-4">
//             <img src={OkikeLogoGreen} alt="Okike Logo" className="mx-auto" />
//           </div>

//           {/* Back Arrow */}
//           <img
//             src={ArrowBack}
//             alt="Back"
//             className="cursor-pointer hover:opacity-70 my-3"
//           />

//           {/* Title */}
//           <div className="text-center mt-4">
//             <h1 className="text-[32px] font-medium text-[#1D1D1D] leading-[100%] mb-2 font-clash-Medium">
//               Become a Verified Host ✅
//             </h1>
//             <p className="text-[14px] font-[400] tracking-[1] leading-[140%] text-[#9C9C9C] font-inter-Regular ">
//               We verify every host to keep our community safe and trusted. It only takes a few minutes to get verified.
//             </p>
//           </div>
               

//                        {/* Steps */}
//         <div className="flex flex-col gap-5 mb-6 mt-8">
//           {steps.map((step, idx) => (
//             <div key={idx} className="flex items-center gap-3">
//               <div
                
//               >
//                 {checked[idx] && (
//                  <img src={checkMark} alt=""/>
//                 )}
//               </div>
//               <span className="text-[#898989] text-[16px] font-inter-Regular leading-[100%] tracking-[1] font-[400]">{step}</span>
//             </div>
//           ))}
//         </div>

//           <div className="bg-[#FFFFFF] w-full h-[62px] text-[#89898966] text-sm font-inter-Regular leading-[100%]  tracking-[1] p-3  mb-6 text-center rounded-[15px] flex  items-center mt-8">
//             <div className="flex items-center gap-2">
//               <img src={info} alt="info"/>
//         <p> 
//           Your details are private and encrypted — only Okike’s team can view
//           them.
//           </p> 
//           </div>
//         </div>

//                <div className="mt-15">
//                   <PrimaryButton label="Next" onClick={() => {}}/>
//               </div>

                  
//         </div>
//       </div>
//     </div>
//   );
// }


const IntroScreen = () => {
  return (
    <div>IntroScreen</div>
  )
}

export default IntroScreen