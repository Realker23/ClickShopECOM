import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import SortSection from "./components/SortSection";
import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <SortSection />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
    ${"" /* width: 80%; */}
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
