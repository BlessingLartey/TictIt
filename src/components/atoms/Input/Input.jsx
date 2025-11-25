import React from "react";

export default function Input({ label, type, value, onChange }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium">{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded-md h-[40px] px-3 outline-none"
      />
    </div>
  );
}
