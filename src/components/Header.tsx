import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
  return <header className={`${className}`}>{children}</header>;
};

export default Header;
