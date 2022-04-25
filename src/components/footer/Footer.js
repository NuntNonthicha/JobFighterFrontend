import React from "react";
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="p-4 bg-green-300 shadow md:px-6 md:py-5 dark:bg-gray-800 text-decoration: none position:fixed font-sans;
    bottom:0;">
      <div className="sm:flex sm:items-center sm:justify-between text-decoration: none text-black">
        <h1 style={{ color: "black", textAlign: "left" }}>Jobfighter</h1>

        {/* รอใส่ลิงค์ไปหน้าเกี่ยวกับเรา+ติดต่อสอบถาม */}
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 ">
          <li>
            <Link to="/aboutus" className="mr-20 no-underline rounded text-[#000000] hover:text-[#FFFFFF] cursor-pointer text-lg ">
              เกี่ยวกับเรา
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-20 no-underline text-[#000000] hover:text-[#FFFFFF] cursor-pointer text-lg">
              ติดต่อสอบถาม
            </Link>
          </li>
        </ul>
      </div>

      {/* เส้นคั่นเเนวนอน  */}
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

       {/* รอใส่ลิงค์ไปยังหน้าค้นหา   */}
      <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Jobfighter{" "}
        {/* <a href="#" className="hover:underline">Jobfighter</a>
        . All Rights Reserved. */}
      </span>
      
    </footer>
  );
}