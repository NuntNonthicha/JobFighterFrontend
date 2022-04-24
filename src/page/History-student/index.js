import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Address from "../../assets/pics/Address.png";
import Company1 from "../../assets/pics/Company1.png";
// import { useSelector } from "react-redux";
// import { getJob } from "../../api/job"


const HistoryStudent = () =>  {

  // const { user } = useSelector((state) => ({ ...state }));

  // const [job, setJob] = useState({
  //  post: [],
  // });

  // useEffect(() => {
  //   //code
  //   loadData(user.token);
  // }, []);

  // const loadData = (authtoken) => {
  //   //code
    
  //   getJob(authtoken) // ดึงข้อมูล Post ทั้งหมดมา 
  //     .then(  (res) => {  
  //       //code
  //       setJob({...job,post: res.data}); //  set ตัวแปร post ให้เท่ากับ ข้อมูล Post ทั้งหมดที่โหลดมา
  //       console.log(job.post)
  //     })
  //     .catch((err) => {
  //       //err
  //       console.log("Error loadData", err.response.data);
  //     });
  // };


  const status1 = "wait" /* เอา status ไปใส่ ลอง test ตัวเเปร ระหว่างรอจากหลังบ้าน */

  const makeStyles = (status) => {
    if(status == 'Approved')
    {
      return{
        background : "#24AB82",
        color : "white",
        border : 'solid 4px #24AB82',
        borderRadius : '15px',
        padding : '5px'
      }
    }
    else if(status == 'wait')
    {
        return{
        background : "#FAAC40",
        color : "white",
        border : 'solid 4px #FAAC40 ',
        borderRadius : '15px',
        padding : '5px'
        }
    }
    else 
    {
        return{
        background : "#FF3358",
        color : "white",
        border : 'solid 4px #FF3358',
        borderRadius : '15px',
        padding : '5px'
        }
    }
  };

  // useEffect(async() =>{
  //   try{

  //   }catch (err) {}
  // }, []);

  return (
    <div className="flex flex-col items-center mx-72 my-20 bg-[#F2EFEF] rounded-lg font-sans sm:min-w-[400px] min-w-[300px]">
      <div className=" h-20 w-full bg-[#69F0AE] rounded-lg">
        <div className=" p-4 font-bold text-black text-2xl text-center">
          ประวัติสมัครงาน
        </div>
      </div>

      <div className="flex w-3/4 mt-4 text-black text-xl">
        รายละเอียดการสมัคร
      </div>

      <div className="flex flex-col items-center w-3/4 h-full rounded-xl drop-shadow-xl p-2 my-3 font-sans sm:min-w-[400px] min-w-[300px]">
        {/* card show รายเละเอียดการสมัครเเต่ละบล็อกๆ */}
        {/* {job.post.map((item) => ( */}
        <div className="w-full h-55 rounded-xl bg-white mb-4">
          <div className="grid grid-row-3">
            {/* ชื่อบริษัท */}
            <div className="row-span-1 mt-3 ml-5 font-bold text-black text-lg">
              ชื่อบริษัท
              {/* รอเอาค่าจากหลังบ้านมาใส่ */}
            </div>
            <div className="p-1  border-b-2 border-zinc-400 my-2 mx-3"></div>

            {/* รายละเอียดบริษัท + logo */}
            <div className="row-span-2 bg-grey-200 my-2 ml-5 ">
              <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="flex col-span-3">
                  {/* ตำเเหน่งงานหรือชื่อบริษัท */}
                  <div className=" py-1.5  focus:outline-none text-black">
                    ตำเเหน่งงานหรือชื่อบริษัท
                    {/* รอเอาค่าจากหลังบ้านมาใส่ */}
                  </div>
                </div>
                <div class="flex row-span-2 col-span-3">
                  {/* logo address */}
                  <img
                    src={Address}
                    alt="logoAddress"
                    className=" h-5 w-5"
                    span="location"
                  />
                  {/* ที่อยู่ address บริษัท */}
                  <div className="px-0.5 py-1.5  focus:outline-none ml-2 text-black text-sm">
                    ที่อยู่
                    {/* รอเอาค่าจากหลังบ้านมาใส่ */}
                  </div>
                </div>

                <div className="flex items-center row-span-3  justify-center">
                  <div className="w-28 h-28 rounded-xl bg-[#E2E2E2] ">
                    {/* logo company */}
                    <img
                      src={Company1} //ลองใส่รูปไปก่อน รอดึง logo จากหลังบ้าน
                      alt="logoCompany"
                      span="location"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ผลการสมัคร*/}
            <div className="row-span-3 my-4 ml-5">
              <div className="text-lg">
                  <span className="status" style={makeStyles(status1)}>wait</span>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default HistoryStudent;
