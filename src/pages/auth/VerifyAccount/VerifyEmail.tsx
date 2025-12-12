// import React, { useState } from "react";
// import OkikeLogoGreen from "../../../assets/OkikeGreen.png";
// import ArrowBack from "../../../assets/icon/arrowBack.png";
// import AuthBgTemplate from "../../auth/authbgTemplate/authBgTemplate";
// import PrimaryButton from "../../../component/Button/PrimaryButton";
// import VerifiedModal from "../../../component/modal/verifiedEmailModal";


// export default function VerifyEmail() {
//   const [code, setCode] = useState(["", "", "", "", "", ""]);
//   const [showModal, setShowModal] = useState(false); // ✅ modal state

//   const handleChange = (value, index) => {
//     if (value.length > 1) return;
//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     // auto move to next input
//     if (value && index < 5) {
//       const nextInput = document.getElementById(`code-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   const handleVerify = async () => {
//     const success = true; 
//     if (success) {
//       setShowModal(true); // ✅ open modal
//     }
//   };

//   return (
//     <div className="flex h-screen w-full overflow-hidden relative">
//       <AuthBgTemplate />

     
//       <div className={`w-full md:ml-[650px] h-full overflow-y-auto px-6 md:px-10 py-8 scroll-smooth hide-scrollbar flex flex-col justify-between ${showModal ? 'bg-black/30' : ''}`}>
//         <div className="mx-auto w-full">
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
//             <h1 className="text-[32px] font-medium text-[#000000] leading-[100%] mb-2 font-clash-Medium">
//               Verify your email
//             </h1>
//             <p className="text-[14px] font-[400] tracking-[1] leading-[100%] text-[#9C9C9C] font-inter-Regular">
//               We’ve sent a code to your email
//             </p>
//           </div>

//           {/* Email + Instructions */}
//           <div className="flex justify-center gap-6 flex-col text-center my-10">
//             <p className="text-[#1D1D1D] text-[14px] leading-[100%] tracking-[1] font-medium font-inter-Medium">
//               franc********@gmail.com
//             </p>

//             <p className="text-[#898989] text-[14px] font-[400] font-inter-Regular leading-[100%] tracking-[1]">
//               Please check your inbox and paste the code below
//             </p>
//           </div>

//           {/* Code Input Boxes */}
//           <div className="flex gap-4 mb-6 ">
//             {code.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`code-${index}`}
//                 type="text"
//                 value={digit}
//                 onChange={(e) => handleChange(e.target.value, index)}
//                 maxLength="1"
//                 className="w-[40px] text-center text-[20px] font-medium text-[#000] border-b-[1px] border-[#E2E2E2] outline-none focus:border-[#023327]"
//               />
//             ))}
//           </div>

//           {/* Resend Code */}
//           <p className="text-center leading-[100%] text-[#1D1D1D] underline underline-offset-4 font-inter-Regular font-[400] text-[12px] cursor-pointer">
//             Resend code
//           </p>
//         </div>

//         {/* Verify Button */}
//         <div>
//           <PrimaryButton label="Verify" onClick={handleVerify} />
//         </div>

//         {/* ✅ Verified Modal */}
//         <VerifiedModal show={showModal} onClose={() => setShowModal(false)} />
//       </div>
//     </div>
//   );
// }



const VerifyEmail = () => {
  return (
    <div>VerifyEmail</div>
  )
}

export default VerifyEmail