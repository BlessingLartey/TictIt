import { Outlet } from "react-router-dom";
import Sidebar from "../../molecules/SideMenu/Sidebar";

export default function LayoutWithSidebar() {
  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden gap-5 justify-center px-5 m-auto"
>
      <Sidebar />

      {/* Where routed pages will appear */}
      <main className=" w-[838px] max-h-screen overflow-hidden p-8">
        <Outlet />
      </main>
    </div>
  );
}
