import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "KRISTIN WATSON",
    text: `This is actually so helpful. Instagram DMs are long. I’m tired of
    chasing studios every time I need to shoot. — Tomi, Photographer,
    Lekki (via Instagram DM)`,
  },
  {
    name: "ALEX JOHNSON",
    text: `Booking a space was smooth and transparent. Saved me time and stress.`,
  },
  {
    name: "EMMA WONG",
    text: `Great spaces, great support — would recommend to every creator.`,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <section className="w-full px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:hidden">
        {testimonialsData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#FFFFFF] text-black pb-3 pt-16 px-4 rounded-[5px] shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-4 pb-3 border-b-[0.5px] border-[#3A3F47]">
              <div className="text-[#1C1C1E] text-[20px] leading-[100%] uppercase font-clash-Medium">
                {item.name}
              </div>
            </div>

            <p className="font-[400] text-[#322F42] font-inter-Regular text-[16px] text-left">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* MOBILE SLIDER */}
      <section className="max-sm:block hidden z-50 mt-6 overflow-hidden">
        <div className="mx-auto flex w-[350px] px-4 overflow-hidden">
          <Swiper
            spaceBetween={12}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            watchOverflow
            className="w-full"
          >
            {testimonialsData.map((item, idx) => (
              <SwiperSlide key={idx} className="!w-full">
                <motion.div
                  className="flex justify-center py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                >
                  {/* Card */}
                  <div className="bg-white text-black rounded-[5px] w-full min-h-[160px] px-5 py-6">
                    <div className="flex items-center gap-4 mb-4 pb-3 border-b-[0.5px] border-[#3A3F47]">
                      <div className="text-[#1C1C1E] text-[18px] leading-[100%] uppercase font-clash-Medium">
                        {item.name}
                      </div>
                    </div>

                    <p className="font-[400] text-[#322F42] font-inter-Regular text-[15px] text-left">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
