import Image from "next/image";
import React from "react";

const Checkout = () => {
  return (
    <section className="tab-lg:mx-[8rem] mx-[1rem] m-auto my-16">
      <div>
        <p className="text-grey my-16 ml-4">
          Account / My Account / Product / View Cart /
          <span className="text-black">Checkut</span>
        </p>
      </div>

      <div className="w-full">
        <h2 className="tab:text-[36px] font-600 my-6">Billing Details</h2>
        <div className="flex justify-between w-full flex-col tab:flex-row ">
          <div className="tab:w-[40%] w-full">
            <form action="submit">
              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  First Name<span>*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>Company Name</label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Street Address<span>*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>Apartment, floor, etc. (optional)</label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Town/City<span>*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Phone Number<span>*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Email Address<span>*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex justify-start gap-4">
                <input type="checkbox" name="" id="" className="p-1" />
                <p className="text-[16px]">
                  Save this information for faster check-out next time
                </p>
              </div>
            </form>
          </div>

          <div className="tab:w-[40%] w-full">
            <div className="flex justify-between items-center my-3">
              <div className="flex items-center gap-8">
                <Image
                  src={"/assets/images/productImage.png"}
                  width={50}
                  height={50}
                  alt="produuct Image"
                />
                <p className="text-[16px]">LCD Moniter</p>
              </div>
              <p>$650</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <div className="flex items-center gap-8">
                <Image
                  src={"/assets/images/productImage.png"}
                  width={50}
                  height={50}
                  alt="produuct Image"
                />
                <p className="text-[16px]">LCD Moniter</p>
              </div>
              <p>$650</p>
            </div>

            {/* total */}
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
            </div>

            <div>
              <div className="flex gap-10 my-8">
                <input type="checkbox" />
                Bank
              </div>

              <div className="flex gap-10 my-8">
                <input type="checkbox" />
                Cash on delivary
              </div>
            </div>

            <div className="flex flex-col tab:flex-row justify-center items-center gap-4 w-full ">
              <input
                type="text"
                name="coupon"
                id="coupom"
                placeholder="Coupon Code"
                className="border border-black p-2 rouunded w-[50%] "
              />
              <button className="text-[12px] tab:text-[16px] px-1 py-1  bg-[#db4444] tab:px-8 tab:py-2 capitalize rounded text-white tab">
                Apply Cuppon
              </button>
            </div>

            <div className="my-4">
              <button className="text-[12px] tab:text-[16px] px-1 py-1  bg-[#db4444] tab:px-8 tab:py-2 capitalize rounded text-white tab">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
