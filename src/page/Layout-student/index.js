import { Outlet } from "react-router-dom";
import Navbarstudent from "../../components/navbar/Navbar-student";
import Footer from "../../components/footer/Footer";
function Layout() {
    return (
        // <div  className="flex flex-col min-h-screen">
        //   <Navbarstudent/>

        //   <Outlet />

        //   <Footer />
        // </div>
        <body class="flex flex-col min-h-screen ">
            <header>
                <Navbarstudent />
            </header>
            <main class="flex-grow">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </body>
    );
}

export default Layout;
