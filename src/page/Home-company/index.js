import React from "react";
import "../../page/Home-student/Home-student.css"; //เหมือนกับของ student
import Work2 from "../../assets/pics/Work2.png";
import Company1 from "../../assets/pics/Company1.png";
import Company2 from "../../assets/pics/Company2.png";
import Company3 from "../../assets/pics/Company3.png";
import Card from "../../page/Home-student/Card.js"; //เหมือนกับcard ของ student
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="w-full h-screen">
      {/* อันที่ 1 home */}
      <div className="home">
        {/* left */}
        <div className="i-left">
          <div className="i-name">
            <span>เข้าถึงผู้สมัครได้มากกว่าใคร !</span>
            <span>Job Fighter</span>
          </div>
          {/* link to หน้าสร้างโพสต์ */}
          <Link to="/search">
            <button className="button i-button">สร้างโพสต์</button>
          </Link>
        </div>
        {/* right */}
        <div className="i-right">
          <img src={Work2} alt="" />

          {/* blur div */}
          <div className="blur" style={{ background: "#f8e4c8e3" }}></div>
          <div
            className="blur"
            style={{
              background: "#d1f7e4 ",
              top: "17rem",
              width: "21rem",
              height: "20rem",
              left: "-20rem",
            }}
          ></div>
        </div>
      </div>

      {/* อันที่ 2 home2 */}
      <div className="home2">
        {/* left */}
        <div className="awesome">
          <span>ลงประกาศงานกับ</span>
          <span>Job Fighter</span>
        </div>

        {/* right */}
        <div className="cards">
          <div style={{ top: "15rem", left: "-15rem" }}>
            <Card
              emoji={Company1}
              heading={"โปรไฟล์บริษัท"}
              detail={
                "พื้นที่บอกเรื่องราวบริษัทของคุณ ดึงดูดผู้สมัครหลากหลายประเภท"
              }
            />
          </div>

          <div style={{ top: "15rem", left: "8rem" }}>
            <Card
              emoji={Company2}
              heading={"ค้นหาประวัติ"}
              detail={"ค้นหาประวัติผู้สมัครได้ง่าย ครอบคลุมหลากหลายอาชีพ"}
            />
          </div>

          <div style={{ top: "15rem", left: "30rem" }}>
            <Card
              emoji={Company3}
              heading={"สร้างโพสต์ง่าย"}
              detail={"สร้างโพสต์ได้ทันที สะดวกสบายต่อผู้ใช้งาน"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
