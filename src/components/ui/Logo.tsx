import DesktopLogo from '../../../public/logo-desktop.svg';
import TabletLogo from "../../../public/logo-tab.svg";
import MobileLogo from "../../../public/logo-mobile.svg";

const Logo = () => {
  return (
    <span>
      <img className='hidden lg:block' src={DesktopLogo} alt="desktop logo" />
      <img className='hidden sm:block lg:hidden' src={TabletLogo} alt="desktop logo" />
      <img className='sm:hidden' src={MobileLogo} alt="desktop logo" />
    </span>
  );
}

export default Logo;