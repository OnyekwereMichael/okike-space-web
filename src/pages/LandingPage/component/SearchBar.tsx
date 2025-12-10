import locationIcon from '../../../assets/icon/location.png'
import searchIcon from '../../../assets/icon/search.png'

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between  items-stretch sm:items-center mt-8 bg-white rounded-[5px] overflow-hidden text-black w-full max-w-[692px] px-[8px] max-sm:pb-3">

      {/* First Input */}
      <div className='grid grid-cols-2 gap-3 max-sm:gap-0'>
      <div className="relative flex items-center w-full sm:w-[16rem] h-[52px] mb-2 sm:mb-0">
        <img 
          src={searchIcon} 
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
        />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="pl-10 w-full h-full outline-none text-[18px] font-inter-Regular placeholder:leading-[36px] placeholder:font-inter-Regular placeholder:font-[400] placeholder:text-[18px] placeholder:text-[#BDBDBD]"
        />
      </div>

      {/* Second Input */}
      <div className="relative flex items-center w-full sm:w-[12rem] h-[52px] border-t sm:border-t-0 sm:border-l border-[#ECECEC] sm:ml-2 pl-2">
        <img 
          src={locationIcon} 
          alt="Location" 
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
        />
        <input
          type="text"
          placeholder="Location"
          className="pl-10 pr-4 w-full h-full outline-none text-[18px] font-inter-Regular placeholder:leading-[36px] placeholder:font-inter-Regular placeholder:font-[400] placeholder:text-[18px] placeholder:text-[#BDBDBD]"
        />
      </div>
</div>
      {/* Button */}
      <button className="bg-[#1C1C1E] h-[42px] rounded-[5px] text-white 
        font-clash-Medium px-[20px] text-[20px] mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto max-sm:mt-0 max-sm:text-[15px] max-sm:h-[35px]">
        Search
      </button>
    </div>
  );
}
