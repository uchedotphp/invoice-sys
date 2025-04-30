import { ReactNode } from "react";
// import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { Sidebar } from "../components/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-quinary h-full flex flex-col lg:flex-row">
      <Sidebar />
      <main className="mx-6 max-w-[730px] md:w-full md:mx-auto h-full mt-8 lg:mt-[77px] lg:mb-[54px] overflow-y-hidden">
        {children}
      </main>
    </div>
  );
}
