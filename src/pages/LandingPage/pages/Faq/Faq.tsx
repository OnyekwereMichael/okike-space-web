import { useState } from "react";
import { faqs } from "../../../../constants/MockData/MockData";

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className=" mt-16">
            <div
                className="
          text-[#023327] 
          h-[36px] w-[299px] 
          max-sm:w-[195.8px] max-sm:h-[29.95px]
          bg-[#0233271A] 
          rounded-[24px] 
          py-[6px] px-[24px]
           max-sm:px-[17.9px] max-sm:py-[4.48px]
          flex items-center justify-center   
           mb-5
          mx-auto
        "
            >
                <p className="font-inter-Regular text-[18px] leading-[100%]  text-[#023327] max-sm:text-[12px] max-sm:w-[199px]">
                    Frequently Asked Questions
                </p>
            </div>

            <p className="leading-[100%] font-clash-Medium -tracking-tight text-[#023327] text-[44px] font-medium text-center  mb-10 max-sm:text-[28px] ">
                Questions? <br className="sm:hidden"/> We’ve got answers.
            </p>
            <div className="mx-auto w-[1134px] mb-16 px-4 max-sm:w-full">



                <div className="">
                    {faqs.map((faq, index) => {
                        const isOpen = index === activeIndex;

                        return (
                            <div
                                key={index}
                                className="overflow-hidden rounded-[16px] bg-white transition-all"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggle(index)}
                                    className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors 
    ${isOpen
                                            ? "bg-[#023327] text-white rounded-t-[16px] "
                                            : "bg-[#F6F6F6]  text-black rounded-[16px]"
                                        }
  `}
                                >

                                   <span
  className={`leading-[100%] font-clash-Regular font-medium max-sm:text-[20px] text-[24px] 
    ${isOpen ? "text-white" : "text-black"}`}
>
  {faq.question}
</span>

                                    <span className="text-2xl leading-none max-sm:text-[28px]">
                                        {isOpen ? "×" : "+"}
                                    </span>
                                </button>

                                {/* Content */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out border-[2px] border-[#E1E1E7] ${isOpen
                                            ? "grid-rows-[1fr]  bg-[#F6F6F6] mb-6 "
                                            : "grid-rows-[0fr] opacity-0 bg-[#F6F6F6]"
                                        }`}
                                >
                                    <div className=" rounded-[16px]  overflow-hidden px-6 pb-2 pt-4 text-sm font-[400] text-[#000000] font-inter-Regular text-[18px] leading-[28px] bg-[#F6F6F6] max-sm:text-[16px]">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
