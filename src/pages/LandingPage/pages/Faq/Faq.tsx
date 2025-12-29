import { useState } from "react";
import { faqs } from "../../../../constants/MockData/MockData";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="mt-16 max-sm:mt-10">
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
          max-xl:px-6
        "
            >
                <p className="font-inter-Regular text-[18px]  leading-[100%] text-[#023327] max-sm:text-[12px] max-sm:w-[199px]">
                    Frequently Asked Questions
                </p>
            </div>

            <p className="leading-[100%] font-clash-Medium max-xl:text-[30px] -tracking-tight text-[#023327] text-[44px] font-medium text-center mb-10 max-sm:text-[28px]">
                Questions? <br className="sm:hidden"/> We’ve got answers.
            </p>

            <div className="mx-auto w-[1134px] mb-16 px-4 max-sm:w-full max-xl:w-full max-xl:px-10">
                {faqs.map((faq, index) => {
                    const isOpen = index === activeIndex;

                    return (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-[16px] mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Header */}
                            <button
                                onClick={() => toggle(index)}
                                className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors 
                                ${isOpen
                                        ? "bg-[#023327] text-white rounded-t-[16px]"
                                        : "bg-[#F6F6F6] text-black rounded-[16px]"
                                    }`}
                            >
                                <span
                                    className={`leading-[100%] font-clash-Regular font-medium max-sm:text-[20px] text-[24px] max-xl:text-[22px] 
                                    ${isOpen ? "text-white" : "text-black"}`}
                                >
                                    {faq.question}
                                </span>

                                <span className="text-3xl leading-none max-sm:text-[28px]">
                                    {isOpen ? "×" : "+"}
                                </span>
                            </button>

                            {/* Animated Content */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="rounded-[16px] px-6 pb-2 pt-4 text-sm font-[400] text-[#000000] font-inter-Regular text-[18px] leading-[28px] bg-[#F6F6F6] max-sm:text-[16px]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
