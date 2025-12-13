import DownloadApp from '../../../../assets/download-platstore.png'
import x from '../../../../assets/icon/x.png'
import ig from '../../../../assets/icon/ig.png'
import tiktok from '../../../../assets/icon/tiktok.png'
import facebook from '../../../../assets/icon/facebook.png'
import { toast } from 'react-hot-toast';


export default function Footer() {
  const handleAppClick = () => {
    toast('Coming Soon!', { 
      icon: '🚀',
      style: {
        borderRadius: '10px',
        background: '#023327',
        color: '#ffffff',
      },
    });
  };

  return (
    <footer className="bg-[#023327] px-10 py-16  max-sm:px-4 max-sm:py-4">
      <div className="rounded-[15px] border-[1px] border-[#636363] bg-gradient-to-br from-[#023327] via-[#043F32] to-[#003A2C] px-14 py-16  max-sm:px-3 max-sm:py-3">

        {/* Subscribe + App Download */}
        <div className="flex items-start justify-between max-sm:flex-col max-sm:items-center max-sm:gap-8">
          {/* Left */}
          <div className="max-sm:w-full">
            <h3 className="text-[24px] leading-[100%] font-semibold font-clash-SemiBold mb-2 max-sm:mt-2 text-[#FFFFFF] max-sm:text-[22px]">
              Subscribe for Updates
            </h3>
            <p className="font-[400] text-[#B2B2B2] font-inter-Regular text-[16px] mb-6 max-sm:w-full">
              Stay informed about new spaces, upcoming cities, and what’s happening across Okike.
            </p>

         
            <div className="flex items-center gap-3 bg-[#FFFFFF] w-[421px] h-[50px] rounded-[5px] py-[4px] pl-[10px] pr-[4px] max-sm:w-fit max-sm:pl-0 max-sm:pr-[7px]">
              <input
                type="email"
                placeholder="Enter your Email"
                className="h-[48px] placeholder:text-[#BDBDBD] placeholder:font-inter-Regular placeholder:text-[16px] placeholder:font-[400] w-[260px] rounded-[8px] px-4 text-sm outline-none text-[16px] font-inter-Regular max-sm:w-full"
              />
              <button className="border-[1px] border-[#3C3C3C] rounded-[5px] py-[10px] bg-[#1C1C1E] px-[20px] w-[135px] h-[42px] text-sm  text-[#FFFFFF] text-[20px] font-clash-Medium font-medium flex items-center justify-center max-sm:w-fit max-sm:pr-[6px]">
                Subscribe
              </button>
            </div>

            <section className='flex justify-between items-center mt-8'>
                     <div className="col-span-2 max-sm:text-center sm:hidden">
            <p className="text-[#FFFFFF] text-[22px] font-medium font-clash-Medium mb-4 max-sm:text-[18px] ">hello@okikespaces.com</p>
            <div className="flex gap-4">
              <img src={ig} alt="instagram" className='cursor-pointer max-sm:w-[24px] max-sm:h-[24px]'/>
              <img src={facebook} alt="facebook" className='cursor-pointer max-sm:w-[24px] max-sm:h-[24px]'/>
              <img src={x} alt="twitter" className='cursor-pointer max-sm:w-[24px] max-sm:h-[24px]'/>
              <img src={tiktok} alt="tiktok" className='cursor-pointer max-sm:w-[24px] max-sm:h-[24px]'/>
            </div>
          </div>

<div>
      <img
            src={DownloadApp}
            alt="App Store"
            className="cursor-pointer max-sm:mt-4 max-sm:w-[134px] max-sm:h-[37px] sm:hidden"
            onClick={handleAppClick}
          />
</div>
            </section>
          </div>
          {/* Right */}
          <img
            src={DownloadApp}
            alt="App Store"
            className="cursor-pointer max-sm:mt-4 max-sm:w-[200px] max-sm:h-auto max-sm:hidden"
            onClick={handleAppClick}
          />
        </div>

        {/* Footer Links */}
        <div className="mt-20 grid grid-cols-8 gap-10 max-sm:grid-cols-3 max-sm:gap-6 max-sm:mt-12">
          <div className="col-span-2 max-sm:text-center max-sm:hidden">
            <p className="text-[#FFFFFF] text-[22px] font-medium font-clash-Medium mb-4">hello@okikespaces.com</p>
            <div className="flex gap-4 text-xl justify-center max-sm:justify-center">
              <img src={ig} alt="instagram" className='cursor-pointer'/>
              <img src={facebook} alt="facebook" className='cursor-pointer'/>
              <img src={x} alt="twitter" className='cursor-pointer'/>
              <img src={tiktok} alt="tiktok" className='cursor-pointer'/>
            </div>
          </div>

         
          <div className="">
            <p className="relative text-[#FFFFFF] text-[20px] font-medium font-clash-Medium mb-6 pb-2
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[69px] after:h-[2px]
            after:bg-gradient-to-r after:from-[#DBDBDB] after:to-[#010101] max-sm:text-[18px]">
              Company
            </p>
            <ul className="space-y-3 text-[#B2B2B2] text-[16px] font-inter-Regular font-[400] max-sm:text-[12px]">
              <li>About Us</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Find a Space */}
          <div className="">
            <p className="relative text-[#FFFFFF] text-[20px] font-medium font-clash-Medium mb-6 pb-2
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[69px] after:h-[2px]
            after:bg-gradient-to-r after:from-[#DBDBDB] after:to-[#010101] max-sm:text-[18px]">
              Find a Space
            </p>
            <ul className="space-y-3 text-[#B2B2B2] text-[16px] font-inter-Regular font-[400] max-sm:text-[12px]">
              <li>Spaces</li>
              <li>Categories</li>
              <li>FAQs</li>
              <li>Cities – Register Interest</li>
            </ul>
          </div>

          {/* For Hosts */}
          <div className="">
            <p className="relative text-[#FFFFFF] text-[20px] font-medium font-clash-Medium mb-6 pb-2
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[69px] after:h-[2px]
            after:bg-gradient-to-r after:from-[#DBDBDB] after:to-[#010101] max-sm:text-[18px]">
              For Hosts
            </p>
            <ul className="space-y-3 text-[#B2B2B2] text-[16px] font-inter-Regular font-[400] max-sm:text-[12px]">
              <li>List Your Space</li>
              <li>Host Resources</li>
            </ul>
          </div>

          {/* Support */}
          <div className="">
            <p className="relative text-[#FFFFFF] text-[22px] font-medium font-clash-Medium mb-6 pb-2
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
            after:bg-gradient-to-r after:from-[#DBDBDB] after:to-[#010101] max-sm:text-[18px]">
              Support
            </p>
            <ul className="space-y-3 text-[#B2B2B2] text-[16px] font-inter-Regular font-[400] max-sm:text-[12px]">
              <li>Help Centre</li>
              <li>Community Guidelines</li>
            </ul>
          </div>

          {/* Community */}
          <div className="">
            <p className="relative text-[#FFFFFF] text-[22px] font-medium font-clash-Medium mb-6 pb-2
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
            after:bg-gradient-to-r after:from-[#DBDBDB] after:to-[#010101] max-sm:text-[18px]">
              Community
            </p>
            <ul className="space-y-3 text-[#B2B2B2] text-[16px] font-inter-Regular font-[400] max-sm:text-[12px]">
              <li>Created with Okike</li>
              <li>Okike Journal</li>
              <li>Events</li>
              <li>Partners</li>
            </ul>
          </div>

          {/* Trust */}
          <div className="">
            <p className="relative text-[#FFFFFF] text-[20px] font-medium font-clash-Medium mb-6 pb-2
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[69px] after:h-[2px]
            after:bg-gradient-to-r after:from-[#DBDBDB] after:to-[#010101] max-sm:text-[18px]">
              Trust Centre
            </p>
            <ul className="space-y-3 text-[#B2B2B2] text-[16px] font-inter-Regular font-[400] max-sm:text-[12px]">
              <li>Safety</li>
              <li>Policies</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/20" />

        {/* Bottom */}
        <p className="text-center max-sm:text-[14px] text-[#FFFFFF] text-[18px] font-[400] font-clash-Regular">
          © 2025 Okike Spaces. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
