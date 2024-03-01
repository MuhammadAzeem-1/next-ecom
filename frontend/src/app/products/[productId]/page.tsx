import BreadCrumbs from "@/components/BreadCrumbs";
import ProductDetailCard from "@/components/ProductDetailCard";
import React from "react";
import RelatedItems from "./RelatedItems";

const ProductDetail = () => {
  return (
    <div>
      <ProductDetailCard />
      <RelatedItems />
    </div>
  );
};

export default ProductDetail;
