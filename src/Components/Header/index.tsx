import MobileHeader from "../MobileHeader";
import DesktopHeader from "../HomeHeader"

const Header = () => {
  return (
    <nav className="my-4 container">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile and Desktop header components */}
        <MobileHeader />
        <DesktopHeader />

        <div className="font-semibold">MARCUS®️</div>
      </div>
    </nav>
  );
};

export default Header;
