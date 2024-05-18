import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Nabbar from "../Pages/Shared/Navbar/Nabbar";


const Layout = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;