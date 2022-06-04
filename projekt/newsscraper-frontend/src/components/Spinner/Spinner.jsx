import React from "react";

const Spinner = ({ size }) => {
  const getSize = () => {
    if (size === "small") {
      return "w-6 h-6";
    } else {
      return "w-16 h-16";
    }
  };

  return (
    <div className="overflow-hidden">
      <div
        style={{ borderTopColor: "transparent" }}
        className={
          getSize() +
          " border-4 border-accent border-solid rounded-full animate-spin"
        }
      ></div>
    </div>
  );
};

export default Spinner;
