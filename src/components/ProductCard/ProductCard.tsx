import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Product } from "@/types";
import {
  Card,
  CardBody,
  IconWrapper,
  Title,
  Description,
  Actions,
  StyledLink,
} from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}>
      <CardBody>
        <IconWrapper>
          <AiOutlineCreditCard size={50} />
        </IconWrapper>

        <Title>{product.name}</Title>
        {product.description && (
          <Description>{product.description}</Description>
        )}

        <Actions>
          <StyledLink href={`/products/${product.id}`}>Ver Detalles</StyledLink>
        </Actions>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
