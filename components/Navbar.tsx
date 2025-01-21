import Logo from "./Logo";
import Button from "./Button";
import NavbarItems from "./NavbarITemes";
import MobileNavMenu from "./MobileNavMenu";
import NavbarContainer from "./NavbarContainer";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavbarItems />
      <Button
        text="Start Your Journey!"
        className="flex-1 sm:mx-[18vw] mx-[12vw] md:mx-0 md:flex-none"
      />
      <div className="md:hidden">
        <MobileNavMenu />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
