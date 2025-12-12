// import cancel from '../../assets/icon/cancell.png';
// import checkmark_badge from '../../assets/icon/checkmark-badge-02.png';
// import PrimaryButton from '../Button/PrimaryButton';

// const VerifiedEmailModal = ({ show, onClose }) => {
//   if (!show) return null;

//   return (
//     <div className="absolute inset-0  flex items-center justify-center z-50">
//       <div className="bg-white w-[343px] h-[385px] rounded-[24px] relative p-6 flex flex-col justify-between text-center">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 cursor-pointer"
//         >
//           <img src={cancel} alt="Cancel" />
//         </button>

//         {/* Content */}
//         <div className="flex flex-col items-center justify-center mt-8 flex-grow">
//           <img src={checkmark_badge} alt="checkmark" />
//           <h2 className="text-[22px] font-clash-Regular leading-[100%] tracking-[1px] text-[#222222] mt-3 font-bold">
//             Email verified! 🎉
//           </h2>
//           <p className="text-[#898989] leading-[100%] font-[400] font-inter-Regular text-sm mt-[6px]">
//             Your email has been successfully verified
//           </p>
//         </div>

//         {/* Done Button (bottom edge) */}
//         <div className="pb-2">
//           <PrimaryButton label="Done" onClick={onClose} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifiedEmailModal;

const verifiedEmailModal = () => {
  return (
    <div>verifiedEmailModal</div>
  )
}

export default verifiedEmailModal