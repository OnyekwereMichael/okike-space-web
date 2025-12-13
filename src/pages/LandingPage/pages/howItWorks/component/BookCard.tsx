import { cards } from "../../../../../constants/MockData/MockData";
import { motion } from "framer-motion";

export default function HowItWorksCards() {
  // Parent container variants for staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Each card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex gap-4 px-3 mt-8 max-sm:flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% is in view
      variants={containerVariants}
    >
      {cards.map((item) => (
        <motion.div
          key={item.id}
          className="w-[463px] bg-[#F6F6F6] rounded-[15px] p-6 flex flex-col gap-1 max-sm:w-full"
          variants={cardVariants}
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
        </motion.div>
      ))}
    </motion.div>
  );
}
