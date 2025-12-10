export default function Testimonials() {
  return (
    <section className="w-full h-[214px] px-10 py-20 -top-[330px] relative z-30 grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:hidden">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-[#FFFFFF]  text-black pb-3 pt-16 px-4 rounded-[5px] shadow-xl"
        >
          <div className="flex items-center gap-4 mb-4  pb-3 border-b-[0.5px] border-[#3A3F47]">
            <div className="text-[#1C1C1E] text-[20px] leading-[100%] -tracking-tight uppercase font-clash-Medium ">KRISTIN WATSON</div>
           
          </div>
          <p className=" font-[400] -tracking-tight text-[#322F42] font-inter-Regular text-[16px] ">
          This is actually so helpful. Instagram DMs are long. I’m tired of chasing studios every time I need to shoot. — Tomi, Photographer, Lekki (via Instagram DM)
          </p>
        </div>
      ))}
    </section>
  );
}
