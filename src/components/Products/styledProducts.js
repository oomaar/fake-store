import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media screen and (max-width: 610px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
