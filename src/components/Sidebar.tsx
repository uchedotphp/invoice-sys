import Avatar from "./ui/Avatar";
import { TbSettings } from "react-icons/tb";
import { BiSolidMoon } from "react-icons/bi";
import { WiStars } from "react-icons/wi";
import { HiOutlineUser } from "react-icons/hi2";
import { Button } from "./ui/Button";
import Logo from "./ui/Logo.tsx";
import { ReactNode } from "react";

interface SidebarMenuProps {
  children: ReactNode;
}

const SidebarMenu = ({ children }: SidebarMenuProps) => {
  return (
    <Button className="btn btn-flat text-tertiary hover:text-hover">
      {children}
    </Button>
  );
};

export const Sidebar = () => {
  const iconSizes = "22px";
  return (
    <div className="w-full lg:w-[103px] lg:h-full bg-senary flex lg:flex-col justify-between lg:rounded-tr-4xl lg:rounded-br-4xl overflow-hidden">
      <div className="lg:h-28 rounded-tr-4xl rounded-br-4xl overflow-hidden">
        <Logo />
      </div>
      <section className="flex lg:flex-col items-center lg:space-y-8">
        <ul className="flex mr-6 lg:mr-0 lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-12">
          <li>
            <SidebarMenu>
              <BiSolidMoon size={iconSizes} />
            </SidebarMenu>
          </li>
          <li>
            <SidebarMenu>
              <TbSettings size={iconSizes} />
            </SidebarMenu>
          </li>
          <li>
            <SidebarMenu>
              <WiStars size={iconSizes} />
            </SidebarMenu>
          </li>
        </ul>
        <section className="h-full w-full px-6 lg:px-0 border-l-[1px] border-[#494E6E] lg:border-l-0 lg:border-t-[1px] lg:py-6 lg:h-[88px] lg:my-auto flex justify-center items-center">
          <Button className="btn btn-flat">
            <Avatar className="bg-white h-10 w-10">
              <HiOutlineUser size={iconSizes} />
            </Avatar>
          </Button>
        </section>
      </section>
    </div>
  );
};
