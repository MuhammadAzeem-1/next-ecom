"use client";

import SectionHeader from "@/components/common/SectionHeader";
import Card from "@/components/common/Card";
import { productList2 } from "@/utils/dummyData";

const RelatedItems = () => {
  return (
    <section className="mt-[2rem] tab:mt-[5rem]">
      <SectionHeader sectionName={"Related Items"} />

      <div className="flex flex-wrap pt-8 justify-center mx-4 tab:mx-[8rem] m-auto gap-[1rem] tab:gap-[2rem]">
        {productList2.slice(0, 4).map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default RelatedItems;
