import space from '../../../../../assets/space1.png';

import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { categories } from '../../../../../constants/MockData/MockData';

export default function SpaceCategories() {


  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  } as const;

  const cardTransition: Transition = { duration: 0.6, ease: "easeOut" };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: cardTransition }
  };

  return (
   <section
      className="relative w-full min-h-screen flex flex-col justify-between items-start px-6 lg:px-20 pb-8 pt-8 bg-cover bg-center mt-8 max-sm:px-4 max-xl:px-4 max-xl:min-h-[700px] "
      style={{ backgroundImage: `url(${space})` }}
    >
      <div className="relative z-10 bg-[#FDE0FF] w-[782px] p-[20px] mb-16 h-[129px] rounded-[5px] flex flex-col justify-between max-sm:w-full max-xl:w-full">
        <h2 className="text-[44px] font-[500] leading-[100%] font-clash-Medium tracking-tight text-[#1C1C1E] max-sm:text-[22px] max-xl:text-[30px]">
          Find the right space for you
        </h2>
        <p className="text-[#520061] font-inter-Regular text-[22px] leading-[100%] tracking-tight max-sm:text-[16px] max-sm:leading-6 max-sm:mt-2 max-sm:mb-2 max-xl:text:[20px]">
          From shoots to celebrations, explore curated spaces.
        </p>
      </div>

      {/* Cards Grid with animation */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center max-xl:gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            className="flex flex-col rounded-[5px] overflow-hidden bg-[#F8F5F1] h-[245px] w-full max-w-full p-5"
            variants={cardVariants}
          >
            <div className="w-[369px] h-[52px] flex-1 flex flex-col justify-center max-sm:flex-row max-sm:gap-4 border-b-[0.5px] border-[#3A3F47] max-sm:w-full max-xl:w-full">
              <div className='sm:hidden '>
                <img src={cat.profile_Img} className="w-[150px] h-[80%] object-contain" alt="Profile" />
              </div>
              <p className="text-[18px] font-inter-Regular leading-[26px] -tracking-tight font-[400] max-sm:text-[14px] pb-6 border-b-[0.5px] border-[#3A3F47] max-sm:pb-0 max-sm:border-0 max-sm:w-full">
                {cat.description}
              </p>
            </div>

            <div className="relative w-full max-sm:pt-6">
              <img
                src={cat.img}
                alt={cat.title}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
