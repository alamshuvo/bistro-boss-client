import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../../../components/Provider/AuthProvider";
// import {AcmeLogo} from "./AcmeLogo.jsx";
const Nabbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUser()
    .then(res=>{console.log(res);})
    .catch(error=>{console.log(error);})
  };
  const nablink = (
    <>
      <NavbarItem className="text-white">
        <Link color="warning" href="/">
          Home
        </Link>
      </NavbarItem>

      <NavbarItem className="text-white">
        <Link color="warning" href="/menu">
          Menu
        </Link>
      </NavbarItem>
      <NavbarItem className="text-white">
        <Link color="warning" href="/order/salad">
          Order
        </Link>
      </NavbarItem>
      <NavbarItem className="text-white">
        <Link color="warning" href="/secret">
          secret
        </Link>
      </NavbarItem>
    </>
  );
  const menuItems = [nablink];

  return (
    <div>
      <Navbar
        disableAnimation
        isBordered
        className="fixed opacity-80 bg-black text-white"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">BISTRO BOSS</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 text-white"
          justify="end"
        >
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">BISTRO BOSS</p>
          </NavbarBrand>
          {nablink}
        </NavbarContent>

        <NavbarContent justify="end">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-primary text-white"
              >
                {" "}
                LogOut
              </button>
            </>
          ) : (
            <>
              {" "}
              <NavbarItem className="text-white">
                <Link color="warning" href="/login">
                  login
                </Link>
              </NavbarItem>
            </>
          )}
          <NavbarItem>
            {/* <Button as={Link} color="warning" href="/register" variant="flat"> */}
            <Link href="/register">Sign Up</Link>

            {/* </Button> */}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className=" flex flex-col "
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Nabbar;
