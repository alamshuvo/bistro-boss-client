import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Nabbar from "../Pages/Shared/Navbar/Nabbar";


const Layout = () => {
    const location=useLocation();
    console.log(location);
    const noHeaderFooter=location.pathname.includes("login");

    return (
        <div>
            {
                noHeaderFooter ||<Nabbar></Nabbar>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter ||<Footer></Footer>
            }
        </div>
    );
};

export default Layout;