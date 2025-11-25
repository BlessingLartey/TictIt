import { Outlet } from "react-router-dom";
import Sidebar from "../../molecules/SideMenu/Sidebar";

export default function LayoutWithSidebar() {
  return (
    <div className="flex h-[100%] w-screen bg-white gap-5"
>
      <Sidebar />

      {/* Where routed pages will appear */}
      <main className="flex-1 h-[100%] w-[838px] overflow-auto p-8 content-center"
>
        <Outlet />
      </main>
    </div>
  );
}
