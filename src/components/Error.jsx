import React from "react";

const Error = ({ children }) => {
  return (
    <div className="bg-red-700 text-white text-center p-1 mb-2 font-bold">
      {children}
    </div>
  );
};

export default Error;
