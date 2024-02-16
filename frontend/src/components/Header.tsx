import React from "react";
import PromoBanner from "./PromoBanner";
import InputComponent from "./InputComponent";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <PromoBanner />
      <div className="flex justify-between px-[135px]  pt-[40px] pb-[16px] border-b-2 border-gray-300">
        <div className="text-[24px] font-700 cursor-pointer">Exclusive</div>
        <ul className="flex text-[14px] font-500 gap-12 items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Sign Up</li>
        </ul>
        <div className="flex gap-6">
          <InputComponent />
          <div className="flex gap-4">
            <Image
              alt="whislist icon"
              src="/assets/images/heartIcon.svg"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              alt="whislist icon"
              src="/assets/images/cartIcon.svg"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
