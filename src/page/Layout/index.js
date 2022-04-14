import { Outlet } from "react-router-dom";
import Navbarstudent from "../../components/navbar/Navbar-student";
import Navbarcompany from "../../components/navbar/Navbar-company";
import Footer from "../../components/footer/Footer";
function Layout() {
  
  return (
    <div className="h-screen w-screen">
      <Navbarstudent/> 
      {/* <Navbarcompany/> */}
      
      
      <Outlet />
      
      <Footer />
    </div>
  );
}

export default Layout;
