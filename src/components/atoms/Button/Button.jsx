import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-[382px] h-[40px] bg-[#76DE37] text-white rounded-md font-semibold"
    >
      {children}
    </button>
  );
}
