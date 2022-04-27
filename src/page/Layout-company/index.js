import { Outlet } from "react-router-dom";
import Navbarcompany from "../../components/navbar/Navbar-company";
import Footer from "../../components/footer/Footer";
function Layout() {
  
  return (
    <div className="h-screen">
      <Navbarcompany/>
      
      <Outlet />
      
      <Footer />
    </div>
  );
}

export default Layout;
