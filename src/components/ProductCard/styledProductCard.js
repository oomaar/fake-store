import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1rem;
  background: #4049951a;
  border-radius: 0.5rem;

  @media screen and (max-width: 1024px) {
    width: 290px;
    margin: 1rem 0 0 0;
  }

  @media screen and (max-width: 310px) {
    width: 100%;
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;

  img {
    width: 50%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
`;

export const ProductTextContainer = styled.div`
  height: 180px;
`;

export const ProductTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  color: #73777b;
  font-size: 0.85rem;
`;

export const ProductCategory = styled.p`
  margin-left: auto;
  background-color: #4049b5;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  text-transform: capitalize;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: bold;
  }
`;

export const ProductsRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.3rem;
  color: #73777b;

  i {
    color: #cdbe78;
  }
`;
