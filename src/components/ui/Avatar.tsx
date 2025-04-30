import { ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
  className?: string;
}

const Avatar = ({ children, className }: AvatarProps) => {
  return (
    <section
      className={`rounded-full flex justify-center items-center text-black ${className}`}
    >
      {children}
    </section>
  );
};

export default Avatar;
