import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Product } from "@/types";
import {
  Container,
  Content,
  IconWrapper,
  Title,
  Section,
  SectionTitle,
  Text,
  BoldText,
  InfoText,
  ButtonWrapper,
  StyledLink,
} from "./ProductDetail.styles";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <Container>
      <Content>
        <IconWrapper>
          <AiOutlineCreditCard size={80} />
        </IconWrapper>
        <Title>{product.name}</Title>

        {product.description && (
          <Section>
            <SectionTitle>Descripción</SectionTitle>
            <Text>{product.description}</Text>
          </Section>
        )}

        <InfoText>
          <BoldText>Tipo:</BoldText> {product.type}
        </InfoText>

        {product.interestRate && (
          <InfoText>
            <BoldText>Tasa de Interés:</BoldText> {product.interestRate}
          </InfoText>
        )}

        <InfoText>
          <BoldText>Categoría:</BoldText> {product.category}
        </InfoText>

        {product.riskLevel && (
          <InfoText>
            <BoldText>Nivel de Riesgo:</BoldText> {product.riskLevel}
          </InfoText>
        )}

        <ButtonWrapper>
          <StyledLink href="/">Volver al catálogo</StyledLink>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default ProductDetail;
// Compare this snippet from src/app/products/[id]/page.tsx:
