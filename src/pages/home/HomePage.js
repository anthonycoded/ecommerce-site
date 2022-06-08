import React from "react";
import Collection from "../../components/layout/Collection";
import FeaturedSection from "./featured/FeaturedSection";
const HomePage = () => {
  return (
    <div className="w-full h-screen overflow-y-auto bg-white">
      <Collection></Collection>
      <FeaturedSection></FeaturedSection>
    </div>
  );
};

export default HomePage;
