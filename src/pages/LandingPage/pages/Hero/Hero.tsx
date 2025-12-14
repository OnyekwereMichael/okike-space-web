import Hero_Img from '../../../../assets/HeroImg_landing.png';
import TypingEffect from '../../../../hooks/useTypingEffect';
import Navbar from '../../component/Navbar';
import SearchBar from '../../component/SearchBar';
import Testimonials from '../../component/Testimonial';

export default function Hero() {
  return (
    <div className="w-full text-white relative flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-full">
        {/* Hero Image */}
        <img
          src={Hero_Img}
          alt="Hero"
          className="w-full h-full object-cover max-sm:h-[740px] max-sm:bg-contain"
        />

        {/* Gradient Overlay */}
  {/* Gradient Overlay */}
<div
  className="
    absolute inset-0
    bg-gradient-to-r
    from-[#1C1C1E]
    via-[#1C1C1E]/30
    to-[rgba(0,0,0,0.05)]
    max-sm:bg-gradient-to-b
    max-sm:from-black
    max-sm:via-black/80
    max-sm:to-black/40
  "
></div>


        {/* Vertical border lines */}
        <div className="absolute inset-0 flex justify-between pointer-events-none h-full max-sm:hidden">
          {[...Array(35)].map((_, idx) => (
            <div
              key={idx}
              className={`min-h-screen w-0 border-l-[0.5px] ${
                idx === 5 || idx === 29 ? 'border-[#FFFFFF66]' : 'border-[#FFFFFF1A]'
              }`}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-between pointer-events-none h-full max-sm:flex sm:hidden">
          {[...Array(7)].map((_, idx) => (
            <div
              key={idx}
              className="min-h-screen w-0 border-l-[0.5px] border-[#FFFFFF1A]"
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center text-center px-4 max-sm:px-3">
          <div className="bg-[#FFFFFF1A] px-[15px] h-[46px] flex justify-center items-center font-[400] py-[8px] rounded-[5px] text-sm mb-4 backdrop-blur font-clash-Regular text-[#FFFFFF] -tracking-tight leading-[100%] text-[24px] mt-28 max-sm:text-[18px] max-sm:px-3 max-sm:h-[36px] max-sm:py-[6px] max-sm:mt-[5.4rem]">
            Verified Spaces Across Africa
          </div>

          <h1 className="text-[105px] font-medium leading-[120px] font-clash-Medium text-[#FFFFFF] w-[813px] h-[240px] -tracking-normal max-sm:text-[44px] max-sm:leading-[56px] max-sm:w-full max-sm:h-auto">
              <TypingEffect text="BOOK. CREATE. CONNECT." />
          </h1>

          <p className="text-[#FFFFFF] font-inter-Regular text-[24px] leading-[32px] -tracking-tight text-center w-[730px] mt-4 max-sm:text-[14px] max-sm:w-[327px] px-2 max-sm:mt-2 max-sm:leading-[24px] max-sm:px-0">
            Redefining how people discover and book curated spaces across Africa —
            built on trust and transparency.
          </p>

          <div className='max-sm:mx-4'>
            <SearchBar />
          </div>

          {/* Search Bar */}
          

           <div className=" ">
        <Testimonials />
      </div>
        </div>
      </section>
    </div>
  );
}
