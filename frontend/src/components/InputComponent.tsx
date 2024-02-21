import Image from "next/image";
import React from "react";

const InputComponent = () => {
  return (
    <div className="flex items-center bg-lightGray py-2 pl-5 pr-3 justify-between rounded-[4px] min-w-[230px]">
      <input
        placeholder="What are you looking for ?"
        className="border-none outline-none bg-transparent text-[12px] font-400 min-w-[160px] text-black"
      />
      <Image
        alt="search icon"
        src={"/assets/images/searchIcon.svg"}
        width={16}
        height={16}
      />
    </div>
  );
};

export default InputComponent;
