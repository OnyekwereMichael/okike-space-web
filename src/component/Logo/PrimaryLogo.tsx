import Logo from '../../assets/Okike_logo.png'
export default function PrimaryLogo() {
  return (
    <div className="flex items-center gap-2 text-2xl font-bold pl-5 max-sm:pl-2">
      <img src={Logo} alt="Okike Logo" className="w-8 h-8 max-sm:w-[22.5px] max-sm:h-[22.5px]" />
      <span className='text-[#C6F262] text-[32.8px] leading-[100%] font-bold font-inter-SemiBold max-sm:text-[17.08px]' role="img" aria-label="leaf"> Okike</span>
    </div>
  );
}
