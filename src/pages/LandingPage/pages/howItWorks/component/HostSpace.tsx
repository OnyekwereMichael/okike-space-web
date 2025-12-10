import SpaceImg1 from '../../../../../assets/slant-host-space-img.png'
import SpaceImg2 from '../../../../../assets/slant-host-space-img2.png'
import SpaceImg3 from '../../../../../assets/slant-host-space-img3.png'
import arrowRight from '../../../../../assets/icon/arrow.png'
export default function HostSpace() {
  return (
<section className="relative flex items-center justify-between gap-16 rounded-[15px] h-[532px] w-[1428px]  bg-[#B296FE] px-16 py-20 overflow-hidden mt-26 max-sm:flex-col max-sm:w-full max-sm:h-auto">

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

     <div className="relative h-[540px] w-[640px] max-sm:hidden">

  {/* SHOOT SPACES (bottom-left) */}
  <div className="absolute bottom-8 left-0 z-10 p-2 rounded-[12px] shadow-xl">
    <img
      src={SpaceImg1}
      alt="Shoot space"
      className="w-[280px] h-[360px] object-cover rounded-[12px] shadow-lg"
    />
  </div>

  {/* EVENT SPACES (tilted middle card) */}
  <div className="absolute right-14 top-8 z-20 h-[240px] w-[330px] rotate-[4deg] border-[4px] border-white rounded-[14px] overflow-hidden shadow-2xl">
    <img
      src={SpaceImg2}
      alt="Event space"
      className="w-full h-full object-cover"
    />
  </div>

  {/* LIFESTYLE SPACES (bottom-right) */}
  <div className="absolute bottom-6 right-0 z-30 h-[300px] w-[260px] rounded-[14px] shadow-xl">
    <img
      src={SpaceImg3}
      alt="Lifestyle space"
      className="w-full h-full object-cover rounded-[14px] shadow-lg"
    />
  </div>

</div>

    </section>
  );
}
