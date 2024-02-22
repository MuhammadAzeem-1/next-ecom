import React from "react";
import InputComponent from "./InputComponent";
import Image from "next/image";

const Footer = () => {
  const footerData = [
    {
      title: "Exclusive",
      children: [
        {
          text: "Subscribe",
        },
        {
          text: "Get 10% off your first order",
        },
      ],
      component: <InputComponent />,
    },
    {
      title: "Support",
      children: [
        {
          text: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
        },
        {
          text: "exclusive@gmail.com",
        },
        {
          text: "+88015-88888-9999",
        },
      ],
      component: <></>,
    },
    {
      title: "Account",
      children: [
        {
          text: "My Account",
        },
        {
          text: "Login / Register",
        },
        {
          text: "Cart",
        },
        {
          text: "Wishlist",
        },
        {
          text: "Shop",
        },
      ],
      component: <></>,
    },
    {
      title: "Quick Link",
      children: [
        {
          text: "Privacy Policy",
        },
        {
          text: "Terms Of Use",
        },
        {
          text: "FAQ",
        },
        {
          text: "Contact",
        },
      ],
      component: <></>,
    },
    {
      title: "Download App",
      children: [],
      component: <RenderLinksAndQR />,
    },
  ];

  function RenderLinksAndQR() {
    return (
      <div>
        <p className="text-[12px]">Save $3 with App New User Only</p>
        <div className="pt-3 flex gap-3">
          <Image src="/assets/images/QR.jpg" height={76} width={76} alt="QR" />
          <div className="flex flex-col justify-between gap-2">
            <Image
              src="/assets/images/googlePlay.png"
              className="object-contain"
              width={110}
              height={30}
              alt="google play"
            />
            <Image
              src="/assets/images/applePlay.png"
              className="object-contain"
              width={110}
              height={30}
              alt="google play"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black text-textWhite mt-10 px-32 py-20 flex justify-between">
      {footerData?.map((column, i) => {
        return (
          <div key={i + 1} className="max-w-[200px]">
            <p className="text-[22px] font-600 leading-[22px] pb-5">
              {column?.title}
            </p>
            {column?.children?.map((option, i) => (
              <p key={`sub-${i + 1}`} className="text-[14px] py-2">
                {option?.text}
              </p>
            ))}
            {column?.component}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
