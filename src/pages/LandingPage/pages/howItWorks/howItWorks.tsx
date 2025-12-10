import BookCard from "./component/BookCard";
import HostSpace from "./component/HostSpace";

export default function HowItWorks() {
  return (
    <section className=" mt-16 px-6">
      <div
        className="
          text-[#023327] 
          h-[36px] w-[206px] 
           max-sm:w-[195.8px] max-sm:h-[29.95px]
          bg-[#0233271A] 
          rounded-[24px] 
          py-[6px] px-[24px]
          flex items-center justify-center   
           max-sm:px-[17.9px] max-sm:py-[4.48px]
         
          mx-auto
        "
      >
        <p className="font-inter-Regular text-[18px] max-sm:text-[12px] leading-[100%] -tracking-tight text-[#520061]">
          How Okike Works
        </p>

      </div>
        <p className="leading-[100%] font-clash-Medium -tracking-tight text-[#520061] text-[44px] max-sm:text-[28px] font-medium text-center mt-4 mb-4">
          Simple steps to book your space.
        </p>

        <div>
            <BookCard />
        </div>

        <div>
            <HostSpace />
        </div>
</section>
  );
}
