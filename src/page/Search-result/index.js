import React from "react";
import { useState, useEffect } from "react";
//import Address from "../../assets/pics/Address.png";
//import Company1 from "../../assets/pics/Company1.png";
import axios from "axios";
//import SearchResult from "./component";

const API_PROVINCE =
  "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json";

const SearchResult = () => {
  const [provinces, setProvice] = useState([]);

  async function fetchProvincesName() {
    const response = await fetch(API_PROVINCE);
    const data = await response.json();
    setProvice(data);
  }
  useEffect(() => {
    fetchProvincesName();
  }, []);
  console.log(provinces);

  const [value, setValue] = useState({
    college: "",
    program: "",
    faculty: "",
    jobType: "",
    wageMin: 0,
    wageMax: 0,
    address: "",
    companyName: "",
    boost: true,
  });

  /* กรอกเงินเดือน */
  const isNumberInput = (e) => {
    var char = String.fromCharCode(e.which);
    if (!/[0-9]/.test(char)) {
      alert("กรุณาใส่เลขจำนวนเต็ม");
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
       /* ชื่อที่ส่งมาเปลี่ยนให้เป็น value -> college คือ name , value คือ "" ค่าว่างอยู่ */
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let keyV = [
      "college",
      "program",
      "faculty",
      "jobType",
      "wageMin",
      "wageMax",
      "address",
      "boost",
    ];
    for (var i = 0; i < keyV.length; i++) {
      if (value[keyV[i]] === "" || value[keyV[i]] === 0) {
        delete value[keyV[i]];
      }
    }
    console.log(value);
    axios.post(process.env.REACT_APP_API + "/search", value).then((res) => {
      console.log("respond is ", res.data);
    });
  };

  /*post frontend ส่งข้อมูลเข้าไป get รับข้อมูล เรียกใช้เเต่ path */

  return (
    <screen>
      <form onSubmit={handleSubmit}>
        <div className="container w-200  items-center my-5 rounded-xl ">
          <div className="flex flow-row rounded-lg space-x-4 px-4 py-4 ">
            <div className="flex flex-col w-2/4  items-center rounded-xl bg-[#F7FAF7] drop-shadow-lg">
              {/* หน้าค้นหางาน */}
              <div className="flex flex-col w-3/4 gap-3 m-5 ">
                <div className="p-2 font-bold text-black text-2xl ">
                  ค้นหางาน
                </div>
                <div className="flex flex-col space-y-4 m-2">
                  {/* มหาลัย */}
                  <label for="college" className="text-black text-xl">
                    มหาลัย
                  </label>
                  <select
                    name="college"
                    className=" w-100 h-10 rounded-xl bg-white drop-shadow-md "
                    onChange={handleChange}
                  >
                    <option>ลาดกระบัง</option>
                    <option>ธรรมศาสตร์</option>
                  </select>

                  {/* คณะ */}
                  <label for="faculty" className="text-black text-xl">
                    คณะ
                  </label>
                  <select
                    name="faculty"
                    className="w-100 h-10 rounded-xl bg-white drop-shadow-md "
                    onChange={handleChange}
                  >
                    <option>วิศวกรรมศาสตร์</option>
                  </select>

                  {/* สาขา */}
                  <label for="program" className="text-black text-xl">
                    สาขา
                  </label>
                  <select
                    name="program"
                    className="w-100 h-10 rounded-xl bg-white drop-shadow-md "
                    onChange={handleChange}
                  >
                    <option>คอมพิวเตอร์</option>
                  </select>

                  {/* ประเภทงานทั้งหมด */}
                  <label for="jobType" className="text-black text-xl">
                    ประเภทงานทั้งหมด (สาขาอาชีพ)
                  </label>
                  <select
                    name="jobType"
                    className=" w-100 h-10 rounded-xl bg-white drop-shadow-md "
                    onChange={handleChange}
                  >
                    <option>Software</option>
                  </select>

                  {/* สถานที่ทำงาน */}
                  <label for="address" className="text-black text-xl">
                    สถานที่ทำงาน
                  </label>
                  <select
                    name="address"
                    className="w-100 h-10 rounded-xl bg-white drop-shadow-md "
                    onChange={handleChange}
                  >
                    {provinces.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name_th}
                      </option>
                    ))}
                  </select>

                  {/* ระบุตำเเหน่งงานหรือชื่อบริษัท */}
                  <label for="companyName" className="text-black text-xl">
                    ตำเเหน่งงานหรือชื่อบริษัท
                  </label>
                  <input
                    name="companyName"
                    className="w-100 h-10 rounded-xl bg-white drop-shadow-md "
                    placeholder="ระบุตำเเหน่งงานหรือชื่อบริษัท"
                    onChange={handleChange}
                  ></input>

                  {/* เงินเดือน*/}
                  <label for="wage" className="text-black text-xl">
                    เงินเดือน (บาท)
                  </label>
                  <div className="flex flex-row space-x-4 ">
                    {/* ช่วงเงินเดือน-ข้้นต่ำ */}
                    <input
                      name="wageMin"
                      className=" w-2/4 h-10 rounded-xl bg-white drop-shadow-md "
                      placeholder="ต่ำสุด"
                      onChange={handleChange}
                      onKeyPress={isNumberInput}
                    ></input>
                    <div className="text-xl text-gray-500">-</div>
                    {/* ช่วงเงินเดือน-มากสุด*/}
                    <input
                      name="wageMax"
                      className=" w-2/4 h-10 rounded-xl bg-white drop-shadow-md "
                      placeholder="สูงสุด"
                      onChange={handleChange}
                      onKeyPress={isNumberInput}
                    ></input>
                  </div>
                </div>

                {/* Button Search*/}
                <div className="flex items-center ml-2.5 mt-3 space-y-4 ">
                  <button
                    class=" bg-[#24AB82] drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5 hover:bg-[#1F795E] hover:ring-2 hover:ring-white "
                    disabled={value.wageMin < 0 || value.wageMax < 0}
                  >
                    ค้นหา
                  </button>
                </div>
              </div>
            </div>

            {/* หน้าผลการค้นหา */}
            <div className="flex flex-col w-3/4  items-center rounded-2xl  bg-[#F7FAF7] drop-shadow-lg">
              <div className="flex flex-col w-3/4 gap-5 m-5 ">
                <div className="p-2 font-bold text-black text-2xl border-b-4 border-zinc-400 ">
                  ผลการค้นหา
                </div>
                <div className="flex w-200 h-full bg-red-200">
                     test container
                </div>
                
                 {/* ผลการค้นหา */}
               

                
              </div>
            </div>
          </div>
        </div>
      </form>
    </screen>
  );
};
export default SearchResult;