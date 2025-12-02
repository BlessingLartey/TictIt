import { Outlet } from "react-router-dom";
import Sidebar from "../../molecules/SideMenu/Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function LayoutWithSidebar() {

  const [isOpen, setIsOpen ] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-white relative overflow-x-hidden"
>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex  justify-between p-4 w-full shadow">
        <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        {/* Where routed pages will appear */}
      <main onClick={() => setIsOpen(false)} className="flex-1 max-w-full md:max-w-[838px] overflow-auto p-4 md:p-8 mt-14 md:mt-0">
        <Outlet />
      </main>
      </div>

      {/* SIDEBAR (Mobile: slide in, Desktop: always visible) */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full 
          w-[260px] md:w-[346px] bg-white shadow-lg md:shadow-none
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          z-50
        `}
      >
      <Sidebar cancelSidebar={() => setIsOpen(false)}/>

      {/* CLOSE BUTTON ON MOBILE */}
        <button
          className="md:hidden absolute top-4 right-4 text-xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>

      
    </div>
  );
}
