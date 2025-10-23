export default function PrimaryButton({ label, onClick, className = "" }: { label: string; onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#7263FF]  text-white w-[527px] h-[50px] rounded-[25px] text-[14px] mb-4 font-bold shadow-[inset_0_0_10px_#FFFFFF14] font-satoshi cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
