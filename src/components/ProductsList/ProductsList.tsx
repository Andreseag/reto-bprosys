import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { products } from "@/data";
import { Category } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import { Section, Title, Tabs, Tab, Grid } from "./ProductsList.styles";

const ProductsList: React.FC = () => {
  const categories: Category[] = [
    Category.Todos,
    Category.Cuentas,
    Category.Tarjetas,
    Category.Fondos,
    Category.Seguros,
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.Todos
  );

  const filteredProducts =
    selectedCategory === Category.Todos
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Section>
      <Title>Encuentra los planes que necesitas</Title>

      <Tabs>
        {categories.map((cat) => (
          <Tab
            key={cat}
            active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}>
            {cat}
          </Tab>
        ))}
      </Tabs>

      <Grid>
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </Grid>
    </Section>
  );
};

export default ProductsList;
