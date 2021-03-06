import React from "react";
import { useState } from "react";
import Address from "../../assets/pics/Address.png";
import Company1 from "../../assets/pics/Company1.png";
import Salary from "../../assets/pics/Salary.png";
//import axios from "axios";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import "./Searchresult.css";
import githubprofile from "../../assets/pics/githubprofile.PNG";

/* Pagination */
function Send_data() {
  /*จัดเรียงชื่อมหาลัย สาขา */
  /* สาขา*/
  const programList = [
    "ชีวการแพทย์",
    "คอมพิวเตอร์",
    "แมคคาทรอนิกส์",
    "แมคคาทรอนิกส์และหุ่นยนต์",
    "ไฟฟ้า",
    "โยธา",
    "ธรณี",
    "อิเล็กทรอนิกส์",
    "โทรคมนาคม",
    "เคมี",
    "เกษตร",
    "การจัดการและโลจิสติกส์",
    "ขนส่ง",
    "ปิโตรเลียม",
    "ซอฟต์แวร์",
    "สารสนเทศ",
    "สิ่งแวดล้อม",
    "เครื่องกล",
    "สิ่งทอ",
    "การตลาด",
    "การจัดการ ",
    "การเงินและการธนาคาร ",
    "การบัญชี",
    "ระบบสารสนเทศธุรกิจ",
    "การจัดการการท่องเที่ยวและการบริการ",
    "ธุรกิจอสังหาริมทรัพย์ ",
    "การจัดการอุตสาหกรรม",
    "การประกันภัย",
    "การจัดการ(กลุ่มวิชาพาณิชยศาสตร์)",
    "เศรษฐศาสตร์ธุรกิจ",
    "ภาษาฝรั่งเศสธุรกิจ ",
    "ภาษาจีนธุรกิจ",
    "ภาษาญี่ปุ่นธุรกิจ",
    "ภาษาจีนเพื่อเศรษฐกิจและการค้า",
    "เทคโนโลยีสารสนเทศ",
    "วิทยาการโทรคมนาคม",
    "การวิเคราะห์ข้อมูลเชิงธุรกิจ",
    "การจัดการเทคโนโลยี",
    "ธุรกิจดนตรี",
    "การแสดงดนตรี",
    "การประชาสัมพันธ์",
    "การสื่อสารผ่านสื่อใหม่",
    "การสื่อสารการแสดง",
    "การออกแบบนิเทศศิลป์",
    "กระบวนจินตภาพคอมพิวเตอร์",
    "เทคโนโลยีการอาหาร",
    "อุตสาหกรรมเกษตร",
    "สถาปัตยกรรมศาสตร์ ",
    "สถาปัตยกรรมภายใน",
    "ออกแบบภายใน",
    "ออกแบบผลิตภัณฑ์",
    "คณิตศาสตร์และวิทยาการคอมพิวเตอร์",
    "เคมี",
    "ชีววิทยา",
    "ฟิสิกส์",
    "พฤกษศาสตร์",
    "เคมีเทคนิค",
    "วิทยาศาสตร์สิ่งแวดล้อม",
    "วิทยาศาสตร์ทางทะเล",
    "ชีวเคมี",
    "วัสดุศาสตร์",
    "จุลชีววิทยา",
    "เทคโนโลยีทางอาหาร",
  ].sort();

  /* ประเภทงาน */
  const jobTypeList = [
    "เกษตร/จัดสวน/ปศุสัตว์/ประมง/เหมืองแร่",
    "งานขาย",
    "เขียนแบบ/งานDrawing/AutoCad/ออกแบบวิศวกรรม",
    "กฎหมาย",
    "คอมพิวเตอร์/IT/โปรแกรมเมอร์",
    "งานการเงิน-ธนาคาร",
    "งานขนส่ง-คลังสินค้า",
    "งานนำเข้า-ส่งออก",
    "งานบริการลูกค้า Call Center",
    "งานบัญชี",
    "งานบันเทิง/นักแสดง/นางแบบ/นักร้อง",
    "จัดซื้อ/ธุรการ/ประสานงานทั่วไป",
    "เจ้าหน้าที่ความปลอดภัย(จป.)/สิ่งแวดล้อม/ISO",
    "ช่างเทคนิค/อิเลคโทรนิค/ซ่อมบำรุง/ช่างพิมพ์",
    "นักเขียน/บรรณาธิการ/พิสูจน์อักษร/Copywriter/นักแปลภาษาบุคคล/ฝึกอบรม",
    "ผลิต/ควบคุมคุณภาพ/โรงงาน",
    "ผู้จัดการ/ผู้อำนวยการ/MD/CEO",
    "แผนกรักษาความปลอดภัย/งานอาคารจอดรถ",
    "แพทย์/เภสัชกร/สาธารณสุข",
    "ภูมิศาสตร์/แผนที่/GIS/ผังเมือง",
    "แม่บ้าน/พี่เลี้ยง/คนสวน",
    "โยธา/สำรวจ/สถาปัตย์/มัณฑนากร/ประเมินราคา",
    "ล่าม/มัคคุเทศก์/จองห้อง/จองตั๋ว",
    "เลขานุการ",
    "วิจัย/วิเคราะห์ (เศรษฐศาสตร์/หุ้น/ประกันภัย/ธนาคาร)",
    "วิทยาศาสตร์/Lab/วิจัยพัฒนา",
    "วิศวกร",
    "ศิลปะ/กราฟฟิค/ออกแบบ/ช่างภาพ",
    "ส่งเอกสาร/ขับรถ/ส่งผลิตภัณฑ์",
    "สื่อสารมวลชน/นักข่าว/งานวิทยุ/โทรทัศน์/หนังสือพิมพ์",
    "สุขภาพ/โภชนาการ/ความงาม/ฟิตเนส/สปา",
    "เสื้อผ้า/สิ่งทอ/ช่างแพทเทิร์นdropdown",
    "ออกแบบเว็บไซต์/Web",
    "อัญมณีและเครื่องประดับ",
    "อาจารย์/ครู/งานวิชาการ",
    "อาหาร/เครื่องดื่ม/กุ๊ก/บาร์เทนเดอร์/พนักงานเสิร์ฟ",
    "งาน Part-time/พนักงานชั่วคราว",
    "Freelance",
    "อื่นๆ",
  ].sort();

  const [users, setUsers] = useState(
    JsonData.slice(0, 20)
  ); /* เลือกผู้ใช้ 20 คน */
  const [pageNumber, setPageNumber] =
    useState(0); /* คลิกที่ปุ่มเเบ่งหน้า state จะเปลี่ยน */

  const usersPerPage = 3; /* หน้านึงเเสดง 3 บล็อก */
  const pagesVisited =
    pageNumber *
    usersPerPage; /* ตัวเเปรที่เก็บหน้าเว็บที่เข้าชม = หมายเลขหน้าปจบ. * จน.ผู้ใช้ต่อหน้า เช่น อยู่ใน page 6 มี item 3 อัน จะได้เท่ากับ 18 ผู้ใช้ที่่เข้าชมเว็บ */

  /* เเสดงเป็นบล็อคๆ โชว์ข้อมูลหน้าผู้ใช้ที่ต้องการ -> เวลาเเบ่งหน้าผู้ใช้*/
  const displayUsers = users
    .slice(
      pagesVisited,
      pagesVisited + usersPerPage
    ) /* สมมติอยู่ในหน้าที่ 6 ก็เเสดงว่าเราเห็นผู้ใช้มาเเล้ว 18 คน , ต่อไปก็หน้าที่ 7 คือหน้าที่ต้องการอันดับเเรก จึงเปนตัวเเปรนี้ + หน้าที่เยี่ยมชมรวมถึงจน.ผู้ใช้ต่อหน้า หน้าที่ 6 มี item 18 ซึ่ง pagesVisited = 18 + 3 */
    .map((user) => {
      return (
        <div className="user font-sans">
          {/* ผลการค้นหา ที่เเสดง card ออกมาเป็นบล็อคๆ*/}
          <div className="w-3/4 w-100 h-55 rounded-xl bg-white drop-shadow-md p-2 my-4 font-sans">
            <div className="grid grid-rows-3 grid-flow-col gap-0.5 ">
              {/* ชื่อตำเเหน่งงาน */}
              <div className="row-span-1 col-span-1 ">
                <div className="px-4 py-1.5 focus:outline-none font-bold text-black text-lg ml-2  ">
                  {user.firstName}
                  {/* รอเอาค่าจากหลังบ้านมาใส่ */}
                </div>
              </div>

              {/* ชื่อบริษัท */}
              <div className="row-span-1 col-span-1 ">
                <div className=" px-4 py-1.5  focus:outline-none text-black ml-2">
                  {user.lastName}
                  {/* รอเอาค่าจากหลังบ้านมาใส่ */}
                </div>
              </div>

              {/* logo company */}
              <div className="row-span-3 grid ml-20 justify-items-center align-items-center">
                <div className="flex w-20 h-20 rounded-xl items-center bg-[#E2E2E2] ">
                  <img
                    src={githubprofile} //ลองใส่รูปไปก่อน รอดึง logo จากหลังบ้าน
                    alt="logoCompany"
                    span="location"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-row ">
              <div className="flex min-w-[50%] ">
                {/* logo address */}
                <img
                  src={Address}
                  alt="logoAddress"
                  className=" h-5 w-5 ml-8"
                  span="location"
                />
                {/* ที่อยู่ address บริษัท */}
                <div className="px-0.5 py-1.5  focus:outline-none ml-2 text-black text-sm ">
                  {user.email}
                  {/* รอเอาค่าจากหลังบ้านมาใส่ */}
                </div>
              </div>

              <div className="flex min-w-[50%] ">
                {/* เงินเดือน บริษัท */}
                <img
                  src={Salary}
                  alt="logoAddress"
                  className=" h-5 w-5 ml-8"
                  span="location"
                />
                <div className="px-0.5 py-1.5  focus:outline-none ml-2 text-black text-sm">
                  {user.email}
                  {/* รอเอาค่าจากหลังบ้านมาใส่ */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(
    users.length / usersPerPage
  ); /*ปัดเศษขึ้น ถ้ามี 20 คน/3 = 6.67 ก้มี 7 หน้า -> หน้าที่ 1-6 หน้าละ 3 user ยกเว้นหน้าที่ 7 มี 2 user  */

  /* ฟังก์ชั่นเปลี่ยนหน้า */
  const changePage = ({ selected }) => {
    setPageNumber(
      selected
    ); /*ตัวเลขที่เราต้องการเลื่อนไปทางขวา set page number = จน.ที่ถูกเลือกเท่านั้น*/
  };

  return (
    <div className="Send_data ">
      {/* <form onSubmit={handleSubmit}> */}
      <div className="container w-200  items-center my-5 rounded-xl ">
        <div className="flex flow-row rounded-lg space-x-4 px-4 py-4 ">
          <div className="flex flex-col w-2/4  items-center rounded-xl bg-[#F7FAF7] drop-shadow-lg">
            {/* หน้าค้นหางาน */}
            <div className="flex flex-col w-3/4 gap-3 m-5 ">
              <div className="p-2 font-bold text-black text-2xl ">ค้นหางาน</div>
              <div className="flex flex-col space-y-4 m-2">
                {/* มหาลัย */}
                <label for="college" className="text-black text-xl">
                  มหาลัย
                </label>
                <select
                  name="college"
                  className=" w-100 h-10 rounded-xl bg-white drop-shadow-md  text-zinc-400 
                  focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82]"
                // onChange={handleChange}
                >
                  <option>ระบุมหาลัยที่ต้องการจะเลือก</option>
                  <option>ลาดกระบัง</option>
                  <option>ธรรมศาสตร์</option>
                </select>

                {/* คณะ */}
                <label for="faculty" className="text-black text-xl">
                  คณะ
                </label>
                <select
                  name="faculty"
                  className="w-100 h-10 rounded-xl bg-white drop-shadow-md text-zinc-400 
                  focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82]"
                // onChange={handleChange}
                >
                  <option>ระบุคณะที่ต้องการจะเลือก</option>
                  <option>วิศวกรรมศาสตร์</option>
                  <option>แพทยศาสตร์</option>
                </select>

                {/* สาขา */}
                <label for="program" className="text-black text-xl">
                  สาขา
                </label>
                <select
                  name="program"
                  className="w-100 h-10 rounded-xl bg-white drop-shadow-md text-zinc-400 
                  focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82]"
                // onChange={handleChange}
                >
                  <option>ระบุสาขาที่ต้องการจะเลือก</option>
                  {programList.map((e, idx) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>

                {/* ประเภทงานทั้งหมด */}
                <label for="jobType" className="text-black text-xl">
                  ประเภทงาน
                </label>
                <select
                  name="jobType"
                  className=" w-100 h-10 rounded-xl bg-white drop-shadow-md text-zinc-400 
                  focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82]"
                // onChange={handleChange}
                >
                  <option>ระบุประเภทงานที่ต้องการจะเลือก</option>
                  {jobTypeList.map((e, idx) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>

                {/* สถานที่ทำงาน */}
                <label for="address" className="text-black text-xl">
                  สถานที่ทำงาน
                </label>
                <select
                  name="address"
                  className="w-100 h-10 rounded-xl bg-white drop-shadow-md text-zinc-400 placeholder:text-zinc-400
                  focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82] "
                // onChange={handleChange}
                >
                  <option>ระบุสถานที่ทำงาน (จังหวัด)</option>
                  {/* {provinces.map((item,index)=>
                  <option>{item.name_th}</option>
                  )} */}
                </select>

                {/* ระบุตำเเหน่งงานหรือชื่อบริษัท */}
                {/* <label for="companyName" className="text-black text-xl">
                    ตำเเหน่งงานหรือชื่อบริษัท
                  </label>
                  <input
                    name="companyName"
                    className="w-100 h-10 rounded-xl bg-white drop-shadow-md placeholder:text-zinc-400
                  focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82]
                  disabled:text-[#FF3358] disabled:border-[#FF3358] disabled:shadow-none
                  invalid:border-[#FF3358] invalid:text-[#FF3358] focus:invalid:border-[#FF3358] focus:invalid:ring-[#FF3358]"
                    placeholder="ระบุตำเเหน่งงานหรือชื่อบริษัท "
                   // onChange={handleChange}
                  ></input> */}

                {/* เงินเดือน*/}
                <label for="wage" className="text-black text-xl">
                  เงินเดือน (บาท)
                </label>
                <div className="flex flex-row space-x-4 ">
                  {/* ช่วงเงินเดือน-ข้้นต่ำ */}
                  <input
                    name="wageMin"
                    className=" w-2/4 h-10 rounded-xl bg-white drop-shadow-md placeholder:text-zinc-400
                    focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82]
                    disabled:text-[#FF3358] disabled:border-[#FF3358] disabled:shadow-none
                    invalid:border-[#FF3358] invalid:text-[#FF3358] focus:invalid:border-[#FF3358] focus:invalid:ring-[#FF3358]"
                    placeholder="ต่ำสุด"
                    //  onKeyPress={isNumberInput}
                    // onChange={handleChange}
                    autoComplete="none"
                  ></input>
                  <div className="text-xl text-gray-500">-</div>
                  {/* ช่วงเงินเดือน-มากสุด*/}
                  <input
                    name="wageMax"
                    className=" w-2/4 h-10 rounded-xl bg-white drop-shadow-md placeholder:text-zinc-400
                    focus:outline-none focus:border-[#24AB82] focus:ring-1 focus:ring-[#24AB82]
                    disabled:text-[#FF3358] disabled:border-[#FF3358] disabled:shadow-none
                    invalid:border-[#FF3358] invalid:text-[#FF3358] focus:invalid:border-[#FF3358] focus:invalid:ring-[#FF3358] "
                    placeholder="สูงสุด"
                    //  onKeyPress={isNumberInput}
                    // onChange={handleChange}
                    autoComplete="none"
                  ></input>
                </div>
              </div>

              {/* Button Search*/}
              <div className="flex items-center ml-2.5 mt-3 space-y-4 ">
                <button
                  className=" bg-[#24AB82] drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5 hover:bg-[#1F795E] hover:ring-2 hover:ring-white "
                //disabled={value.wageMin < 0 || value.wageMax < 0}
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
              <div className="flex flex-col w-full h-full ">
                {displayUsers}
                <div className="flex h-50  mt-5">
                  {/* ปุ่มเปลี่ยนหน้า */}
                  <ul className="button-list ">
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={pageCount} /*นับจำนวนหน้า*/
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </ul>
                </div>
              </div>

              {/* ผลการค้นหา */}
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default Send_data;
