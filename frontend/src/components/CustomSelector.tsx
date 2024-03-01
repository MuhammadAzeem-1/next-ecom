"use client";
import React, { useState } from "react";

const CustomSelector = () => {
  const [selected, setSelected] = useState("");
  let option = ["xs", "s", "m", "l", "xl"];
  return (
    <div className="flex gap-6">
      <span className="text-[20px]">Size:</span>
      <div className="flex gap-4 uppercase text-[14px]">
        {option?.map((item) => {
          const customClass =
            selected === item ? "bg-lightRed border-lightRed text-white" : "";
          return (
            <div
              onClick={() => setSelected(item)}
              key={item}
              className={`border-[1px] border-[gray] rounded-md p-[6px] w-8 h-8 flex justify-center items-center cursor-pointer ${customClass}`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSelector;
