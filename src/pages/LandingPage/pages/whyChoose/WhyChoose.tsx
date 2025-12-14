import { WhyChooseData } from "../../../../constants/MockData/MockData";
import SpaceCategories from "./component/SpaceCategory";
import { motion, type Variants } from "framer-motion";

export default function WhyChoose() {
   const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], 
      },
    },
  };

  return (
    <section className="max-sm:mt-10 mt-20">
      {/* Header */}
      <div
        className="
          text-[#023327] 
          h-[36px] w-[248px] 
          max-sm:w-[165.8px] max-sm:h-[29.95px]
          bg-[#0233271A] 
          rounded-[24px] 
          py-[6px] px-[24px]
          max-sm:px-2 max-sm:py-[4.48px]
          flex items-center justify-center   
          mx-auto
        "
      >
        <p className="font-inter-Regular text-[18px] leading-[100%] -tracking-tight max-sm:text-[12px]">
          Book With Confidence
        </p>
      </div>

      <p className="leading-[100%] font-clash-Medium -tracking-tight text-[#023327] max-sm:text-[28px] text-[44px] font-medium text-center mt-4 mb-4">
        Why Choose Okike?
      </p>

      {/* Cards Grid with staggered animation */}
      <motion.div
        className="p-6 rounded-[10px] grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // wait until 30% is in view
        variants={containerVariants}
      >
        {WhyChooseData.map((item) => (
          <motion.div
            key={item.title}
            className="flex flex-col bg-[#F8F5F1] items-start rounded-[10px] p-6 duration-300"
            variants={cardVariants}
          >
            <img src={item.img} alt={item.title} />

            <h3 className="text-[#1C1C1E] text-[22px] uppercase font-clash-Medium leading-[100%] font-[500] mb-2 max-sm:text-[20px]">
              {item.title}
            </h3>

            <p className="text-[#6B6B6B] font-inter-Regular text-[16px] leading-[24px] -tracking-tight mt-3 ">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Space categories component */}
      <SpaceCategories />
    </section>
  );
}
