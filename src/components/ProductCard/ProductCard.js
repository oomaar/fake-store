import {
  ProductCardContainer,
  ProductCategory,
  ProductDescription,
  ProductImageContainer,
  ProductInfo,
  ProductPriceContainer,
  ProductsRatingContainer,
  ProductTextContainer,
  ProductTitle,
} from "./styledProductCard";

export const ProductCard = ({ product }) => {
  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;

  return (
    <ProductCardContainer>
      <ProductImageContainer>
        <img src={product.image} alt="" />
      </ProductImageContainer>
      <ProductInfo className="product-info">
        <ProductTextContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>
            {truncate(product.description, 150)}
          </ProductDescription>
        </ProductTextContainer>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductPriceContainer>
          <p>${product.price}</p>
          <ProductsRatingContainer>
            <small>
              Ratings: {product.rating.rate} <i className="bx bxs-star" />
            </small>
            <small>Count: {product.rating.count}</small>
          </ProductsRatingContainer>
        </ProductPriceContainer>
      </ProductInfo>
    </ProductCardContainer>
  );
};
