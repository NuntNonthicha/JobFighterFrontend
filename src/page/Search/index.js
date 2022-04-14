import React from "react";

export const SearchStudent = () => {
  return (
    <screen>
      <div className="container w-200 h-screen items-center my-5 rounded-xl ">
        <div className="flex flow-row w-50% h-full  rounded-lg space-x-4 px-4 py-4 bg-teal-400">
          <div className="flex flex-col w-2/4 items-center rounded-xl bg-[#F7FAF7] drop-shadow-lg">
            <div className="flex flex-col w-3/4 gap-5 m-5 ">
              <div className="p-2 font-bold text-black text-2xl ">ค้นหางาน</div>
              <div className="w-3/4  w-80 h-10 rounded-2xl bg-white">
                มหาลัย
              </div>
              
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>

                </select>

             
            </div>
          </div>

          {/* <div className=" md:divide-x-8 divide-red-400"></div> */}

          <div className="flex flex-col w-3/4 h-full items-center rounded-2xl  bg-[#F7FAF7] drop-shadow-lg">
            <div className="flex flex-col w-3/4 gap-5 m-5 ">
              <div className="p-2 font-bold text-black text-2xl border-b-4 border-zinc-400 ">
                ผลการค้นหา
              </div>
              <div className="w-3/4 w-100 h-40 rounded-xl bg-white drop-shadow-md">1</div>
              <div className="w-3/4 w-100 h-40 rounded-xl bg-white">2</div>
              <div className="w-3/4 w-100 h-40 rounded-xl bg-white">3</div>
            </div>
          </div>
        </div>
      </div>
    </screen>

    // <div className="flex flex-row w-5/6 h-5/6 md:w-auto bg-red-200">
    //     <div className="w-1/4 bg-green-400">ค้นหางาน</div>
    //     <div className="flex flex-col items-center w-3/4 bg-blue-600 ">ผลการค้นหา
    //         <div className="w-3/4 m-4 bg-white h-28">1</div>
    //         <div className="w-3/4 m-4 bg-white h-28">2</div>
    //         <div className="w-3/4 m-4 bg-white h-28">3</div>
    //     </div>
    // </div>
  );
};

export default SearchStudent;
