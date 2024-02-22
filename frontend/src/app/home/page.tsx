import BannerSlide from "@/components/BannerSlide";
import BestProducts from "@/components/BestProducts";
import Categories from "@/components/Categories";
import FlashSales from "@/components/FlashSales";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerSlide />
      <FlashSales />
      <Categories />
      <BestProducts />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Home;
