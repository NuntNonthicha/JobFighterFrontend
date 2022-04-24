import React, { useState } from "react";
import { saveAs } from "file-saver";


const ApplicantCompany = () => {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
    
  };
const [value,setValue] = useState({
  ClickYes : false,
  ClickNo : false,
  canClick : true
});

const handleSubmitYes = (e) => {
  alert("ยืนยันผลการสมัคร");
  e.preventDefault();
  setValue({
    canClick: false,
    ClickYes : true,
  });

};

const handleSubmitNo = (e) => {
  alert("ยืนยันผลการสมัคร");
  e.preventDefault();
  setValue({
    canClick: false,
    ClickNo : true,
  });
};




  return (
    <div className="flex flex-col items-center mx-20 my-20 bg-[#F2EFEF] rounded-lg font-sans  sm:min-w-[400px] min-w-[300px] ">
      <div className=" h-20 w-full bg-[#69F0AE] rounded-lg">
        <div className=" p-4 font-bold text-black text-2xl text-center">
          ใบสมัครของผู้สมัครงาน
        </div>
      </div>

      <div className="flex w-3/4 mt-4 text-black text-xl">
        รายละเอียดผู้สมัครงาน
      </div>

      {/* card show รายเละเอียดการสมัครเเต่ละบล็อกๆ */}
      <div className="flex flex-row items-center w-3/4 h-full rounded-xl  drop-shadow-xl p-2 my-3 font-sans w-[1180px] sm:min-w-[400px] min-w-[300px] ">
        <div className="flex w-full h-55 rounded-xl bg-white mb-4">
          {/* รายละเอียดของผู้สมัครงาน */}
          <div className="flex pl-12 py-3">
            <div className="pt-3 ">
              <div className="flex-space-1 py-3 font-bold text-black text-lg">
                ชื่อ-นามสกุล (ผู้สมัครงาน)
              </div>

              <div className="flex space-x-4 pt-3">
                <div className="flex space-x-2">
                  อีเมล
                  <div className="text-black border-2 border-gray-300 rounded-md block w-[400px] p-3 my-2 ml-7"></div>
                </div>

                <div className="flex space-x-2 pl-5">
                  เบอร์โทร
                  <div className="text-black border-2 border-gray-300 rounded-md block w-[400px] p-3 my-2 ml-5"></div>
                </div>
              </div>

              <div className="flex space-x-6 pt-3">
                <div className="flex space-x-2">
                  มหาลัย
                  <div className="text-black border-2 border-gray-300 rounded-md block w-[255px] p-3 my-2 ml-4"></div>
                </div>

                <div className="flex space-x-2">
                  คณะ
                  <div className="text-black border-2 border-gray-300 rounded-md block w-[255px] p-3 my-2 ml-5"></div>
                </div>

                <div className="flex space-x-2">
                  สาขา
                  <div className="text-black border-2 border-gray-300 rounded-md block w-[255px] p-3 my-2 ml-5"></div>
                </div>
              </div>

              <div className="flex space-x-1 pt-3">
                ที่อยู่
                <div
                  rows="4"
                  className=" text-black border-2 border-gray-300 rounded-md block w-[920px] h-[70px] p-3 my-2 ml-9"
                ></div>
              </div>

              <div className="flex space-x-2 pt-3">
                ไฟล์เรซูเม่
                <div className="flex space-x-2 ml-5">
                  <button
                    className="bg-[#6C9C8E] drop-shadow-md  text-white text-xl rounded-xl px-6 py-2 mt-2 mb-2 hover:bg-[#627A73] "
                    onClick={saveFile}
                  >
                    ดาวน์โหลด
                  </button>
                </div>
              </div>

              <div className="flex space-x-1 pt-3">
                ตำเเหน่ง
                <div className="text-black border-2 border-gray-300 rounded-md block w-1/4 p-3 my-2 ml-5"></div>
              </div>

              <div className="flex space-x-2 pt-5">
                ผลการสมัคร
                <div className="flex space-x-3 ml-5">
                  <div className="flex space-x-8">
                  <button className={` ${ value.ClickNo ?  'bg-[#E2E2E2] hover:bg-[#E2E2E2]' :'bg-[#24AB82] hover:bg-[#1F795E] hover:ring-2 hover:ring-white' } drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5 `}
                      onClick={handleSubmitYes}
                      disabled={value.canClick === false}
                    >
                      ผ่าน
                    </button>

                    <button className={` ${ value.ClickYes ? 'bg-[#E2E2E2] hover:bg-[#E2E2E2]' :'bg-[#FF3358] hover:bg-[#DE2D4D] hover:ring-2 hover:ring-white' } drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5  `}
                      onClick={handleSubmitNo}
                      disabled={value.canClick === false}
                    >
                      ไม่ผ่าน
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCompany;
