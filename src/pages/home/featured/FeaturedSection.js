import React from "react";
import ProductCard from "../../../components/cards/ProductCard";

const FeaturedSection = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-96 p-4">
      <p className="w-full text-left font-semibold text-xl text-primary-main">
        FeaturedSection
      </p>
      <div className="flex w-screen overscroll-x-auto p-4">
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default FeaturedSection;
