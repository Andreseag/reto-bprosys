import React from "react";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// import data
import { products } from "@/data";
// import types
import { Category } from "@/types";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
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
    <section className="servies-section px-20 mt-20">
      <h2 className="text-5xl mb-4">Encuentra los planes que necesitas</h2>
      {/* Tabs */}
      <div className="tabs tabs-boxed mb-6">
        {categories.map((cat) => (
          <a
            key={cat}
            className={`tab ${selectedCategory === cat ? "tab-active" : ""}`}
            onClick={() => setSelectedCategory(cat)}>
            {cat}
          </a>
        ))}
      </div>

      {/* List cards */}
      <div className="grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsList;
