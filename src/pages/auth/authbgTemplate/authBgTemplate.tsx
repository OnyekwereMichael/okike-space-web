
import auth_illustrator from "../../../assets/authIllustator.png"; 
const authBgTemplate = () => {
  return (
    <div className="hidden md:flex w-[773px] relative items-center justify-center">
  <img
    src={auth_illustrator}
    alt="Illustration"
    className="object-cover h-full w-full"
  />
  <div className="absolute inset-0 bg-black/20"></div>

  <h2 className="absolute top-20 left-12 text-[40px] font-bold leading-[150%] text-white pt-[20px] font-heuvel">
    Where creators meet spaces <br /> that inspire.
  </h2>
</div>
  )
}

export default authBgTemplate
