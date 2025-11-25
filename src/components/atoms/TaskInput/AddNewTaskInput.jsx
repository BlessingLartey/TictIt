import React from "react";

export default function AddNewTaskInput({ value, onChange,
  //  onAdd
   }) {
  return (
    <div className="flex items-center gap-3 mt-3">
      <input
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-gray-300 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* <button
        onClick={onAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Add
      </button> */}
    </div>
  );
}
