import arrowRight from '../../../../../assets/icon/arrow.png'
import hostspace from '../../../../../assets/hostspace.png'

export default function HostSpace() {
  return (
    <section
      className="
        relative 
        flex items-center justify-between 
        gap-16 
        rounded-[15px] 
        bg-[#B296FE] 
        px-16 py-20 
        overflow-hidden 
        mt-26
        max-sm:flex-col
        max-sm:px-4
        max-sm:py-10
        max-sm:gap-10
      "
    >
      {/* TEXT CONTENT */}
      <div className="w-full max-w-full z-10">
        <span className="mb-6 rounded-[24px] bg-[#EBE4FF] px-4 py-1.5 text-[16px] leading-[100%] text-[#000000] font-inter-Regular font-[400] inline-flex items-center max-sm:mb-2">
          For Space Owners
        </span>

        <h1 className="mb-4 font-clash-SemiBold text-[#1C1C1E] text-[60px] leading-[1.1] max-sm:text-[30px] max-sm:w-full max-sm:leading-9">
          Turn your space into income on Okike
        </h1>

        <p className="text-[20px] font-inter-Regular font-[400] leading-[28px] mb-8 max-sm:text-[15px] max-sm:leading-[24px] max-sm:w-full">
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
      </div>

      {/* IMAGE */}
      <div className="w-full flex justify-center">
        <img
          src={hostspace}
          alt="hostspace"
          className="
          scale-[180%] object-cover 
            w-full max-w-[420px]
         
            max-sm:scale-125
          "
        />
      </div>
    </section>
  );
}
