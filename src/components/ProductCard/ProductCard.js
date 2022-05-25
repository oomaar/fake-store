import {
  ProductCardContainer,
  ProductCategory,
  ProductDescription,
  ProductImageContainer,
  ProductInfo,
  ProductPriceContainer,
  ProductsRatingContainer,
  ProductTitle,
} from "./styledProductCard";

export const ProductCard = ({ product, key }) => {
  return (
    <ProductCardContainer key={key}>
      <ProductImageContainer>
        <img src={product.image} alt="" />
      </ProductImageContainer>
      <ProductInfo className="product-info">
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductPriceContainer>
          <p>${product.price}</p>
          <ProductsRatingContainer>
            <small>Ratings: {product.rating.rate}</small>
            <small>Count: {product.rating.count}</small>
          </ProductsRatingContainer>
        </ProductPriceContainer>
      </ProductInfo>
    </ProductCardContainer>
  );
};
