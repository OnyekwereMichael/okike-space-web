import { motion, type Variants } from "framer-motion";
import arrowRight from '../../../../../assets/icon/arrow.png';
import hostspace from '../../../../../assets/hostspace.png';

export default function HostSpace() {
  // Variants for animations
 
 const textVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // smooth easeOut
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section
      className="
        relative 
        flex items-center justify-between 
        gap-16 
        rounded-[15px] 
        bg-[#B296FE] 
        px-10 py-20 
        mx-10
        max-sm:mt-14
        max-sm:mx-3 max-xl:mx-8
        overflow-hidden 
        mt-26
        max-sm:flex-col
        max-xl:flex-col
        max-xl:py-6
        max-xl:px-8
        max-sm:px-4
        max-sm:py-10
        max-sm:gap-10
        
      "
    >
      {/* TEXT CONTENT */}
      <motion.div
        className="w-full max-w-full z-10 max-xl:mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <span className="mb-6 rounded-[24px] bg-[#EBE4FF] px-4 py-1.5 text-[16px] leading-[100%] text-[#000000] font-inter-Regular font-[400] inline-flex items-center max-sm:mb-2">
          For Space Owners
        </span>

        <h1 className="mb-4 font-clash-SemiBold text-[#1C1C1E] text-[50px] leading-[1.1] max-sm:text-[30px] max-sm:w-full max-sm:leading-9 max-xl:text-[45px] max-xl:leading-14 max-xm:mt-4">
          Turn your space into income on Okike
        </h1>

        <p className="text-[20px] font-inter-Regular font-[400] leading-[28px] mb-8 max-sm:text-[15px] max-sm:leading-[24px] max-sm:w-full max-xl:text[18px]">
          List your space for free on Okike and earn confidently with every
          booking. Join a community of trusted hosts connecting with verified
          guests across Africa.
        </p>

        <div className="bg-white w-fit h-[52px] flex gap-3 items-center px-1 rounded-[5px]">
          <button className="inline-flex items-center gap-3 h-[42px] bg-[#1C1C1E] rounded-[5px] px-6 text-[16px] font-clash-Medium text-white transition hover:opacity-90">
            Become a Host
          </button>

          <img src={arrowRight} alt="arrow right" />
        </div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="w-full flex justify-center max-xl:mt-10 max-xl:mb-20 max-sm:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <img
          src={hostspace}
          alt="hostspace"
          className="
          scale-[170%] object-cover 
            w-full max-w-[420px]
            max-sm:scale-110
            max-xl:scale-[160%]
          "
        />
      </motion.div>
    </section>
  );
}
