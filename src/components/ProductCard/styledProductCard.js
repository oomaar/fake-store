import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 1rem 0;
  background: whitesmoke;
  border-radius: 0.5rem;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid red;

  img {
    width: 100%;
    height: 250px;
  }
`;

export const ProductInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
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
  background-color: #91c483;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
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
  flex-direction: column;
  gap: 0.5rem 0;

  small {
    background-color: #91c483;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
