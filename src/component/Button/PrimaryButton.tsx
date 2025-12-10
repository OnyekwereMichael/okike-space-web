export default function PrimaryButton({ label, onClick, className = "" }: { label: string; onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#023327]  w-full h-[50px] rounded-[32px] text-[#FFFFFF]  text-[17px] transition leading-[100%] tracking-[1] font-inter-Regular font-[400] cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
