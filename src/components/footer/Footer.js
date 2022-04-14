import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-green-300 shadow md:px-6 md:py- dark:bg-gray-800 text-decoration: none position:fixed;
    bottom:0;">
      <div className="sm:flex sm:items-center sm:justify-between text-decoration: none">
        <h1 style={{ color: "black", textAlign: "left" }}>Jobfighter</h1>

        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:no-underline md:mr-6 ">
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:no-underline md:mr-6">
              ติดต่อสอบถาม
            </a>
          </li>
        </ul>
      </div>

      {/* เส้นคั่นเเนวนอน  */}
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

       {/* รอใส่ลิงค์ไปยังหน้าค้นหา   */}
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="#" className="hover:underline">Jobfighter</a>
        . All Rights Reserved.
      </span>
      
    </footer>
  );
}