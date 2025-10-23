import React, { useState } from "react";
import { FaTimes, FaGlobeAmericas, FaMapMarkerAlt } from "react-icons/fa";
import locationIcon from '../../assets/icon/location.png'
import cancel from '../../assets/icon/cancel.png'
import { useNavigate } from "react-router-dom";

const states = [
  "Lagos", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi",
  "Kogi", "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export default function LocationModal({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const [selectedState, setSelectedState] = useState("Lagos");
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all">
      <div className="bg-white rounded-[25px] w-[527px] h-[610px]  shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-gray-100">
          <h2 className="text-[24px] leading-[36px]  font-semibold font-heuvel text-[#1C202A] flex items-center gap-2">
            Where are you joining from? 🌍
          </h2>
          <p className="text-sm text-[#1C202A] leading-[160%] font-satoshi font-[400]">
            We’ll show you the best spaces near you.
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 transition"
          >
            <img src={cancel} alt="Close" className="cursor-pointer" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 hide-scrollbar">
       
        <button className="text-sm text-[#7263FF] leading-[150%] font-satoshi font-[700] flex items-center gap-2">
  <img src={locationIcon} alt="Location" />
  <p className="underline underline-offset-[4px]">Use Current Location</p>
</button>


          {/* States */}
          <div className="space-y-3 mt-2">
            {states.map((state) => (
              <label
                key={state}
                className="flex items-center gap-3 cursor-pointer "
              >
                <input
                  type="radio"
                  name="location"
                  value={state}
                  checked={selectedState === state}
                  onChange={() => setSelectedState(state)}
                  className="w-4 h-4 text-[#7263FF] border-gray-300 focus:ring-[#7263FF] accent-[#7263FF]"
                />
                <span className="text-[15px] font-satoshi font-medium leading-[150%] text-[#222222]">{state}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => navigate('/get-started')}
            className="bg-[#7263FF]  text-white w-[495px] h-[50px] rounded-[25px] text-[14px] mb-4 font-bold shadow-[inset_0_0_10px_#FFFFFF14] font-satoshi cursor-pointer"
          >
            Done!
          </button>
        </div>
      </div>
    </div>
  );
}
