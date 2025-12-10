import React, { useEffect, useState } from "react";
// import { LogOut } from "";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("okikeUser");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Welcome Back 👋
        </h1>
        <p className="text-gray-700 mb-6">
          {user ? (
            <>
              Hello,{" "}
              <span className="font-semibold text-[#7263FF]">
                Michael Onyekwe
              </span>{" "}
              — great to see you again!
            </>
          ) : (
            "Loading user..."
          )}
        </p>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 bg-[#7263FF] hover:bg-[#5b50d8] text-white font-medium py-2 px-6 rounded-full transition-all duration-200"
        >
          {/* <LogOut size={18} /> */}
          Logout
        </button>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Okike Spaces. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
