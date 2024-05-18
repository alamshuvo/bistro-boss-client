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
// import {AcmeLogo} from "./AcmeLogo.jsx";
const Nabbar = () => {
  const nablink = (
    <>
      <NavbarItem className="text-white">
        <Link color="warning" href="/">
          Home
        </Link>
      </NavbarItem>
      
    </>
  );
  const menuItems = [ nablink ];

  return (
    <div>
      <Navbar disableAnimation isBordered className="fixed opacity-80 bg-black text-white">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">BISTRO BOSS</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 text-white" justify="end" >
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">BISTRO BOSS</p>
          </NavbarBrand>
          {nablink}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
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
