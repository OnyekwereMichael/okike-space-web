import checkmark from "../../../assets/icon/checkmark-circle.png";

const Success = () => {
  return (
   <div className="flex  gap-2 bg-[#DFFFE9] rounded-[12px] px-4 py-3 mb-6">
            <div className="">
             <img src={checkmark} alt="Checkmark" className="cursor-pointer"/>
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#1C202A] leading-[160%]">
              Code Sent
            </p>
            <p className="text-[12px] mt-1 font-medium text-[#1C202A] leading-[160%]">
              You should get the code within 20 seconds.
            </p>
          </div>
        </div>

  )
}

export default Success
