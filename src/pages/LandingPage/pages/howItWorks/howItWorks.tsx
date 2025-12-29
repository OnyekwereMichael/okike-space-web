
import { motion, type Variants } from "framer-motion";
import { cards } from "../../../../constants/MockData/MockData";
import HostSpace from "./component/HostSpace";

export default function HowItWorksCards() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
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
    <section>
            <div
        className="
          text-[#023327] 
          h-[36px] w-[206px] 
           max-sm:w-[135.8px] max-sm:h-[29.95px]
          bg-[#0233271A] 
          rounded-[24px] 
          py-[6px] px-[24px]
          flex items-center justify-center   
           max-sm:px-4 max-sm:py-[4.48px]
          mx-auto
          mt-16
          max-sm:mt-10
        "
      >
        <p className="font-inter-Regular text-[18px] max-sm:text-[12px] leading-[100%] -tracking-tight text-[#520061]">
          How Okike Works
        </p>

      </div>
        <p className="leading-[100%] font-clash-Medium -tracking-tight text-[#520061] text-[44px] max-sm:text-[28px] font-medium text-center mt-4 mb-4 max-xl:text-[30px]">
          Simple steps to book your space.
        </p>

    
    <motion.div
      className="
        mt-10 mx-10
        max-sm:mx-0
        grid grid-cols-3 gap-6
        
        max-xl:grid-cols-2 max-xl:gap-8
        max-sm:grid-cols-1 max-sm:gap-6 max-sm:px-4
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >

      
      {cards.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          className="
            bg-[#F6F6F6]
            rounded-[15px]
            

            p-4
            flex flex-col gap-3
           
            transition-transform duration-300
            hover:-translate-y-1
            max-xl:p-7
            max-sm:p-6
          "
        >
          {/* Icons */}
          <div className="flex justify-between items-center">
            <img src={item.badge} alt="Step" />
            <img src={item.icon} alt="Icon" />
          </div>

          {/* Title */}
          <h2 className="
            text-[22px]
            font-clash-Medium
            leading-tight
            text-[#000000]
            max-xl:text-[20px]
          ">
            {item.title}
          </h2>

          {/* Description */}
          <p className="
            text-[#666666]
            font-inter-Regular
            text-[16.5px]
            leading-6
            -tracking-tight
           
            max-xl:text-[16px]
          ">
            {item.text}
          </p>
        </motion.div>
      ))}
    </motion.div>

    <div>
      <HostSpace />
    </div>
    </section>
  );
}
