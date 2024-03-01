import Icons from "@/utils/icons";
import React, { ReactNode } from "react";

type IProp = {
  data: IOffer[];
};

type IOffer = {
  title: string;
  des: string;
  icon: ReactNode;
};

const ExtraOffers: React.FC<IProp> = ({ data }) => {
  const handleDivider = (index: number) => {
    if (index < data?.length - 1) {
      return <div className="h-[1px] bg-[gray]" />;
    }
  };
  return (
    <div className="border-[1px] border-[gray] rounded-[4px]">
      {data?.map((offer: IOffer, index: number) => {
        const { title, des, icon } = { ...offer };
        return (
          <>
            <div className="py-6 px-4 flex items-center gap-4">
              {icon}
              <div>
                <p className="text-[16px] font-500">{title}</p>
                <p className="text-[12px] font-500">{des}</p>
              </div>
            </div>
            {handleDivider(index)}
          </>
        );
      })}
    </div>
  );
};

export default ExtraOffers;
