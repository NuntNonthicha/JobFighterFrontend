// import React from "react";
// import Address from "../../assets/pics/Address.png";
// import Company1 from "../../assets/pics/Company1.png";


// /*จัดการรายละเอียดข้อมูลที่อยู่ใน box ที่ต้องการจะ show อีกที*/
// const Item = () => {
//   return (
//     <div className="w-3/4 w-100 h-55 rounded-xl bg-white drop-shadow-md p-2">
//       <div className="grid grid-rows-3 grid-flow-col gap-0.5 ">
//         {/* ชื่อตำเเหน่งงาน */}
//         <div className="row-span-1 col-span-1 bg-fuchsia-200">
//           <div className="px-4 py-1.5 focus:outline-none font-bold text-black text-lg ml-2">
//             {/* {value}  */}
//             {/* รอเอาค่าจากหลังบ้านมาใส่ */}
//           </div>
//         </div>

//         {/* ชื่อบริษัท */}
//         <div className="row-span-1 col-span-1 bg-fuchsia-200">
//           <div className=" px-4 py-1.5  focus:outline-none text-black ml-2">
//             {/* {value}  */}
//             {/* รอเอาค่าจากหลังบ้านมาใส่ */}
//           </div>
//         </div>

//         {/* logo company */}
//         <div className="row-span-3 ml-12">
//           <div className="w-20 h-20 rounded-xl bg-[#E2E2E2] ">
//             <img
//               src={Company1} //ลองใส่รูปไปก่อน รอดึง logo จากหลังบ้าน
//               alt="logoCompany"
//               span="location"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-row">
//         {/* logo address */}
//         <img
//           src={Address}
//           alt="logoAddress"
//           className=" h-5 w-5 ml-8"
//           span="location"
//         />
//         {/* ที่อยู่ address บริษัท */}
//         <div className="px-0.5 py-1.5  focus:outline-none ml-2 text-black text-sm">
//           {/* {value}  */}
//           {/* รอเอาค่าจากหลังบ้านมาใส่ */}
//         </div>
//       </div>
//       {/* <div className="border border-fuchsia-800 border-opacity-10 mt-4"></div> */}
//     </div>
//   );
// };

// /* box ที่ต้องการ show */
// const Transaction = () => {
//   return (
//       <div>
//           <Item/>
//           <Item/>
//           <Item/>       
//       </div>
//   )
// };

// /* เอา SearchResult ไปใส่ใน blog หน้าผลการค้นหา */
// function SearchResult() {
//   return (
//     <div>
//       <Transaction />
//     </div>
//   );
// }

// export default SearchResult;

// /* <> </>  คือ ระบุ root element เป็นเเท็กเปิด/ปิด เพื่อเเสดงผลเป็น component*/