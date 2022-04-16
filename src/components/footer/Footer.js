import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-green-300 shadow md:px-6 md:py-5 dark:bg-gray-800 text-decoration: none position:fixed;
    bottom:0;">
      <div className="sm:flex sm:items-center sm:justify-between text-decoration: none">
        <h1 style={{ color: "black", textAlign: "left" }}>Jobfighter</h1>

        {/* รอใส่ลิงค์ */}
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="/aboutus" className="mr-20 no-underline hover:bg-white text-black text-lg ">
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a href="#" className="mr-20 no-underline hover:bg-white md:mr-6 text-black text-lg">
              ติดต่อสอบถาม
            </a>
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