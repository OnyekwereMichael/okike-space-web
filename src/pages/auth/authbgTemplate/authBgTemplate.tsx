// AuthBgTemplate.js
import auth_illustrator from "../../../assets/authbg.jpg"; 

const AuthBgTemplate = () => {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-screen w-[650px]">
      <img
        src={auth_illustrator}
        alt="Illustration"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default AuthBgTemplate;
