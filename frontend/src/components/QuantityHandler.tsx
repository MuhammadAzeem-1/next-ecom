"use client";
import React, { useState } from "react";
const MAX_LIMIT = 50;
const QuantityHandler = () => {
  const [count, setCount] = useState(0);

  const handleCount = (val: string) => {
    switch (val) {
      case "inc":
        if (count < MAX_LIMIT) setCount((prev) => prev + 1);
        return;
      case "dec":
        if (count > 0) setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="flex w-[159px] text-[20px] font-semibold">
      <button
        onClick={() => handleCount("dec")}
        className="flex justify-center items-center size-10 rounded-l-md border-[1px] border-[gray] cursor-pointer"
      >
        -
      </button>
      <div className="flex justify-center items-center w-20 border-[1px] border-[gray] border-x-0">
        {count}
      </div>
      <button
        onClick={() => handleCount("inc")}
        className="flex justify-center items-center bg-lightRed size-10 rounded-r-md border-[1px] border-lightRed text-white cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default QuantityHandler;
