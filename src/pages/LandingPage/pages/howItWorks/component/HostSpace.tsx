import arrowRight from '../../../../../assets/icon/arrow.png'
import hostspace from '../../../../../assets/hostspace.png'
export default function HostSpace() {
  return (
<section className="relative flex items-center justify-between gap-16 rounded-[15px] h-[532px]  bg-[#B296FE] px-16 py-20 overflow-hidden mt-26  max-sm:w-full max-sm:h-auto max-sm:flex-col">

      <div className="">
        <span className=" mb-6 rounded-[24px]  bg-[#EBE4FF] px-4 py-1.5 text-[16px] leading-[100%] text-[#000000] font-inter-Regular font-[400] w-[180px] h-[31px] flex items-center">
          For Space Owners
        </span>

        <h1 className="mb-4  font-semibold leading-[1.1]  text-[#1C1C1E] text-[60px] w-[650px] font-clash-SemiBold max-sm:text-[32px]">
          Turn your space into income on Okike
        </h1>

        <p className="text-[20px] font-inter-Regular font-[400] leading-[28px] w-[545px] h-[84px] mb-8">
          List your space for free on Okike and earn confidently with every
          booking. Join a community of trusted hosts connecting with verified
          guests across Africa.
        </p>

 <div className='bg-[#FFFFFF] w-[244px] h-[52px] flex gap-3 items-center px-1 rounded-[5px]'>
        <button className="inline-flex items-center gap-3 w-[197px] h-[42px] bg-[#1C1C1E] rounded-[5px] px-6 py-3.5 text-[20px] font-clash-Medium font-medium text-white transition hover:opacity-90 cursor-pointer">
          Become a Host
        </button>
  <div>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </div>
      </div>

  <div className="">
  <img 
    src={hostspace} 
    alt="hostspace" 
    className="scale-[135%] object-cover overflow-hidden"
  />
</div>


    </section>
  );
}
