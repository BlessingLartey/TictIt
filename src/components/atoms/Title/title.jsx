import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-3xl font-bold text-black">
      {children}
    </h1>
  );
}
