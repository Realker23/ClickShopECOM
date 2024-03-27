// import React, {useContext} from "react";
// import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
// import ProductContext from "./context/ProductContext";
import FeaturedProducts from "./components/FeaturedProducts";

const Home = () => {
  // const productData = useContext(ProductContext);
  const data = {
    name: "clickShop",
  };

  return (
    <>
      <HeroSection myData={data.name} />

      <FeaturedProducts />

      <Services />
      <Trusted />
    </>
  );
};

export default Home;
