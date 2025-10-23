import cancel from "../../../assets/icon/cancel-circle.png";

const Error = () => {
  return (
   <div className="flex  gap-2 bg-[#FFF8F6] rounded-[12px] px-4 py-3 mb-6">
            <div className="">
             <img src={cancel} alt="Cancel"  className="cursor-pointer"/>
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#1C202A] leading-[160%]">
              Wrong Code
            </p>
            <p className="text-[12px] mt-1 font-medium text-[#1C202A] leading-[160%]">
              That code doesn’t look right. Please try again.
            </p>
          </div>
        </div>

  )
}

export default Error
