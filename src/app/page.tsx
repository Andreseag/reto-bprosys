"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import data
import { products } from "@/data";
// import types
import { Category } from "@/types";

const categories: Category[] = [
  Category.Todos,
  Category.Cuentas,
  Category.Tarjetas,
  Category.Fondos,
  Category.Seguros,
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.Todos
  );

  const filteredProducts =
    selectedCategory === Category.Todos
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-base-200 px-4">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">FinanBrand</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
      </header>

      <main className="p-4">
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

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>
                    <strong>Tipo:</strong> {product.type}
                  </p>
                  {product.interestRate && (
                    <p>
                      <strong>Tasa:</strong> {product.interestRate}
                    </p>
                  )}
                  <p>
                    <strong>Categoría:</strong> {product.category}
                  </p>
                  {product.riskLevel && (
                    <p>
                      <strong>Riesgo:</strong> {product.riskLevel}
                    </p>
                  )}
                  <div className="card-actions justify-end">
                    <Link
                      href={`/product/${product.id}`}
                      className="btn btn-primary">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
