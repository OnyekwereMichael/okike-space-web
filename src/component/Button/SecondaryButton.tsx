export default function SecondaryButton({ label, onClick, className = "" }: { label: string; onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#7263FF]  text-white w-[492px] h-[50px] rounded-[25px] text-[14px] mb-1 font-bold shadow-[inset_0_0_10px_#FFFFFF14] font-satoshi cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
