import React from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Calendar, ListTodo, StickyNote, Home, LogOut } from "lucide-react";
import Title from "../../atoms/Title/title";

// Sidebar Component
export default function Sidebar() {
  return (
    <aside className="w-[346px] max-h-screen bg-[#F4F4F4] p-5 flex flex-col border border-gray-300 rounded-lg m-5">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-5">
        <Title>Menu</Title>
        <Menu className="w-6 h-6 text-gray-700" />
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
      </div>

      {/* Task Title */}
      <div className="flex-grow overflow-y-auto pr-2">
      <h3 className="uppercase text-xs text-gray-500 font-semibold mb-2">Tasks</h3>
      <nav className="flex flex-col gap-2 mb-6">
        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" to="/home">
          <Home className="w-5 h-5 text-blue-600" /> Home
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" to="/upcoming">
          <ListTodo className="w-5 h-5 text-green-600" /> Upcoming
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" to="/today">
          <ListTodo className="w-5 h-5 text-yellow-600" /> Today
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" to="/calendar">
          <Calendar className="w-5 h-5 text-purple-600" /> Calendar
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" to="/sticky">
          <StickyNote className="w-5 h-5 text-red-600" /> Sticky Wall
        </Link>
      </nav>

      {/* Lists Section */}
      <h3 className="uppercase text-xs text-gray-500 font-semibold mb-2">Lists</h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          Work
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-green-600"></div>
          Study
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
          Personal
        </div>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700 text-left">
          + Add New List
        </button>
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700 w-full"
        >
          <LogOut className="w-5 h-5 text-gray-600" />
          Sign Out
        </Link>
      </div>
      </div>
    </aside>
  );
};