import React from 'react';
import ReactDom from "react-dom";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./page/Login";
import Forgotpass from "./page/Forgotpass";
import Signupstudent from "./page/Signup-student";
import Signupcompany from "./page/Signup-company";
import Homestudent from "./page/Home-student";
import Homecompany from "./page/Home-company";
import Search from "./page/Search";
import Layout from "./page/Layout";


function App(){
  
  return(
    <div>
         <Routes>

          {/* ใส่ path ใหม่ๆให้ลิ้มลอง /}
          {/ อยากเปิดแสดงผลหน้าไหนให้พิมพ์ตรง path ต่อท้ายตรง url /}
          {/ <Route path="/" element={<App />} /> */}
          <Route element={<Layout></Layout>}>
          
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/Signupstudent" element={<Signupstudent />} />
          <Route path="/signupcompany" element={<Signupcompany />} />
          <Route path="/homestudent" element={<Homestudent />} />
          <Route path="/homecompany" element={<Homecompany />} />
          <Route path="/search" element={<Search />} />

          </Route>
        </Routes>
      
    </div>
  );
}

export default App;