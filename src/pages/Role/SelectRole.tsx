// import React from "react";

// const SelectRole = () => {
//   const roles = [
//     {
//       id: 1,
//       title: "Host",
//       description:
//         "As a Host, you can list your spaces for events, manage bookings, and earn income by sharing your venue.",
//       image: "https://via.placeholder.com/300x180", // replace later
//     },
//     {
//       id: 2,
//       title: "Booker",
//       description:
//         "As a Booker, you can explore available spaces, check details, and easily book your preferred venue.",
//       image: "https://via.placeholder.com/300x180", // replace later
//     },
//   ];

//   const handleSelect = (role) => {
//     console.log(`Continue as ${role}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-8">
//         Select Your Role
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
//         {roles.map((role) => (
//           <div
//             key={role.id}
//             className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
//           >
//             <div>
//               <img
//                 src={role.image}
//                 alt={role.title}
//                 className="w-full h-44 object-cover rounded-lg mb-4"
//               />
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {role.title}
//               </h2>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {role.description}
//               </p>
//             </div>

//             <button
//               onClick={() => handleSelect(role.title)}
//               className="mt-6 w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition-all font-medium"
//             >
//               Continue as {role.title}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SelectRole;

const SelectRole = () => {
  return (
    <div>SelectRole</div>
  )
}

export default SelectRole