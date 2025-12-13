import { cards } from "../../../../../constants/MockData/MockData";

export default function HowItWorksCards() {
  return (
    <div className="flex gap-4 px-3 mt-8 max-sm:flex-col"> 
      {cards.map((item) => (
        <div
          key={item.id}
          className="w-[463px] bg-[#F6F6F6] rounded-[15px] p-6 flex flex-col gap-1 max-sm:w-full"
        >
          {/* Icons */}
          <div className="flex justify-between items-center">
            <img src={item.badge} alt="Step" />
            <img src={item.icon} alt="Icon" />
          </div>

          {/* Text */}
          <h2 className="text-[22px] font-clash-Medium leading-[100%] font-medium text-[#000000]">
            {item.title}
          </h2>

          <p className="text-[#666666] leading-6 font-inter-Regular text-[16.5px] -tracking-tight font-[400] mt-4">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
