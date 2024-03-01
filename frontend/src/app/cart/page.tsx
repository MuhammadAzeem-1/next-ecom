"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { productList2 } from "@/utils/dummyData";
import { CHECKOUT_PAGE_LINK } from "@/utils/constant";
import Link from "next/link";

const Cart = () => {
  const [isAmount, setIsAmount] = useState(1);

  return (
    <section className="tab-lg:mx-[8rem] mx-[1rem] m-auto my-16">
      <div>
        <p className="text-grey my-16 ml-4">
          Home / <span className="text-black">Cart</span>
        </p>
      </div>

      <div className="flex justify-center ">
        <table className="w-full flex flex-col py-4">
          <tr className="hidden  tab:grid grid-cols-3 tab:grid-cols-4 place-content-center bg-white px-8 py-4 m-4 tab:text-[16px] shadow-lg">
            <th className="font-500">Product</th>
            <th className="font-500">Price</th>
            <th className="font-500">Quantity</th>
            <th className="font-500">subtotal</th>
          </tr>
          {productList2.map((val, key) => {
            return (
              <>
                <tr
                  key={key}
                  className="hidden tab:grid grid-cols-3 tab:grid-cols-4  justify-items-center shadow-lg		items-center bg-white px-8 py-4 m-4 tab:text-[16px] font-400"
                >
                  <td>
                    <div className="flex justify-center items-center gap-6">
                      <Image
                        src={"/assets/images/productImage.png"}
                        width={50}
                        height={50}
                        alt="produuct Image"
                      />
                      {val.name}
                    </div>
                  </td>
                  <td>{val.price}</td>
                  <td>
                    <div className=" flex justify-center items-center gap-4 border border-black rounded px-4 ">
                      <p>0{isAmount}</p>

                      <div className="flex flex-col ">
                        <button onClick={() => setIsAmount(isAmount + 1)}>
                          <MdKeyboardArrowUp size={20} />
                        </button>

                        <button
                          onClick={() =>
                            setIsAmount(isAmount > 1 ? isAmount - 1 : 1)
                          }
                        >
                          <MdKeyboardArrowDown size={20} />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>${val.price * isAmount}</td>
                </tr>

                <div className="tab:hidden flex items-center shadow-lg bg-white p-4 my-4">
                  <Image
                    src={"/assets/images/productImage.png"}
                    width={100}
                    height={100}
                    alt="produuct Image"
                  />

                  <div className="flex flex-col gap-4 pl-2 text-[16px] w-[50%]">
                    <h2>{val.name}</h2>
                    <p>${val.price * isAmount}</p>
                  </div>

                  <div className="flex flex-col justify-end items-end gap-4">
                    <p>
                      <AiOutlineClose size={20} />
                    </p>
                    <div className=" flex justify-center items-center gap-4 border border-black rounded px-4 ">
                      <p>0{isAmount}</p>

                      <div className="flex flex-col ">
                        <button onClick={() => setIsAmount(isAmount + 1)}>
                          <MdKeyboardArrowUp size={20} />
                        </button>

                        <button
                          onClick={() =>
                            setIsAmount(isAmount > 1 ? isAmount - 1 : 1)
                          }
                        >
                          <MdKeyboardArrowDown size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </table>
      </div>

      <div className="flex justify-between items-center ">
        <button
          type="button"
          className="border border-black rounded-sm py-2 px-4 mx-2  tab:py-4 tab:px-8 tab:mx-4 tab:text-[16px] font-500"
        >
          Return to Shop
        </button>

        <button
          type="button"
          className="border border-black rounded-sm py-2 px-4 mx-2   tab:py-4 tab:px-8 tab:mx-4 tab:text-[16px] font-500"
        >
          Update Cart
        </button>
      </div>

      <div className="flex flex-col tab:flex-row justify-between my-16 w-full">
        <div className="flex flex-col tab:flex-row justify-center items-center gap-4 w-full tab:w-[49%] tab-lg:w-[40%]">
          <input
            type="text"
            name="coupon"
            id="coupom"
            placeholder="Coupon Code"
            className="border border-black p-2 rouunded w-full tab:w-[43%] tab-lg:w-[55%]"
          />
          <button className="text-[12px] tab:text-[16px] px-1 py-1  bg-[#db4444] tab:px-8 tab:py-2 capitalize rounded text-white tab">
            Apply Cuppon
          </button>
        </div>

        <div className="w-full tab:w-[40%] my-4 tab:m-0">
          <div className="border border-black rounded p-4">
            <h4 className="tab:text-[20px] font-500 leading-4	my-7">
              Cart Total
            </h4>

            <div>
              <div className="flex justify-between font-500 text-[16px] py-2">
                <h4 className="">SubTotal:</h4>
                <p>$1745</p>
              </div>

              <div className="h-[1px] w-full bg-[#8c8c8c] my-4"></div>

              <div className="flex justify-between font-500 text-[16px] py-2">
                <h4 className="">Shipping:</h4>
                <p>Free</p>
              </div>

              <div className="h-[1px] w-full bg-[#8c8c8c] my-4"></div>

              <div className="flex justify-between font-500 text-[16px] py-2">
                <h4 className="">Total:</h4>
                <p>$1745</p>
              </div>

              <div className="flex justify-center ">
                <button className="text-[12px] tab:text-[16px] px-1 py-1  bg-[#db4444] tab:px-8 tab:py-2 capitalize rounded text-white tab">
                  <Link href={CHECKOUT_PAGE_LINK}> Process To Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
