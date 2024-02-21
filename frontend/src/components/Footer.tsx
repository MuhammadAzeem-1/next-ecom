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
          <Image
            src="data:image/png;base64,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"
            height={76}
            width={76}
            alt="QR"
          />
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
