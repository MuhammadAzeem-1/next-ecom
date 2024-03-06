import Image from "next/image";
import React from "react";

type InputFieldProps = {
  label: string;
  required?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  required,
  ...rest
}) => (
  <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
    <label>
      {label}
      {required && <span className="text-[tomato]">*</span>}
    </label>
    <input
      type="text"
      className="bg-[#e4f4f5] p-4 w-full text-[black]"
      {...rest}
    />
  </div>
);

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
        <h2 className="text-[36px] font-600 my-6">Billing Details</h2>
        <div className="flex tab-lg:justify-between w-full flex-col tab-lg:flex-row ">
          <div className="tab-lg:w-[40%] w-full">
            <form action="submit">
              <InputField label="First Name" required />
              <InputField label="Company Name" />
              <InputField label="Street Address" required />
              <InputField label="Apartment, floor, etc. (optional)" required />
              <InputField label="Town/City" required />
              <InputField label="Phone Number" required />
              <InputField label="Email Address" required />
              <div className="flex justify-start gap-4">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <p className="tab:text-[16px] text-[12px]">
                  Save this information for faster check-out next time
                </p>
              </div>
            </form>
          </div>

          <div className="tab-lg:hidden ">
            <h2 className="text-3xl font-semibold flex justify-center my-8">
              Order Details
            </h2>
          </div>
          <div className="tab-lg:w-[40%] w-full">
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

              <div className="h-[0.5px] w-full bg-[#8c8c8c] my-4"></div>

              <div className="flex justify-between font-500 text-[16px] py-2">
                <h4 className="">Shipping:</h4>
                <p>Free</p>
              </div>

              <div className="h-[0.5px] w-full bg-[#8c8c8c] my-4"></div>

              <div className="flex justify-between font-500 text-[16px] py-2">
                <h4 className="">Total:</h4>
                <p>$1745</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between  my-8">
                <div className="flex gap-10 items-center">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <p>Bank</p>
                </div>
                <div>
                  <Image
                    src={"/assets/images/bank.png"}
                    width={150}
                    height={100}
                    alt="back Names"
                  ></Image>
                </div>
              </div>

              <div className="flex gap-10 my-8">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                Cash on delivary
              </div>
            </div>

            <div className="flex flex-row  gap-4 w-full ">
              <input
                type="text"
                name="coupon"
                id="coupom"
                placeholder="Coupon Code"
                className="border border-black p-1 tab:p-2 rouunded w-[40%] tab:w-[50%] "
              />
              <button className="text-[12px] tab:text-[16px] px-1 py-1  bg-[#db4444] tab:px-8 tab:py-2 capitalize rounded text-white tab">
                Apply Cuppon
              </button>
            </div>

            <div className="my-4 flex justify-center tab-lg:inline-block">
              <button className="text-[16px]  py-1  bg-[#db4444] px-8 tab:py-2 capitalize rounded text-white ">
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
{
  /* <form action="submit">
              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  First Name<span className="text-[tomato]">*</span>
                </label>
                <input
                  type="text"
                  className="bg-[#acbacb] p-4 w-full text-black rounded"
                />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>Company Name</label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Street Address<span className="text-[tomato]">*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>Apartment, floor, etc. (optional)</label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Town/City<span className="text-[tomato]">*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Phone Number<span className="text-[tomato]">*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 w-full my-4">
                <label>
                  Email Address<span className="text-[tomato]">*</span>
                </label>
                <input type="text" className="bg-[#f5f5f5] p-4 w-full" />
              </div>

              <div className="flex justify-start gap-4">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <p className="text-[16px]">
                  Save this information for faster check-out next time
                </p>
              </div>
            </form> */
}
