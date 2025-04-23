import React from "react";
import Link from "next/link";
import { AiOutlineCreditCard } from "react-icons/ai";
import { motion } from "framer-motion";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="card border border-base-300 rounded-none h-[300px] overflow-hidden flex flex-col">
      <div className="card-body flex flex-col justify-between p-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <AiOutlineCreditCard size={50} />
          </div>

          <h2 className="text-2xl mb-2">{product.name}</h2>
          {product.description && (
            <p className="text-gray-600 mb-2 text-base">
              {product.description}
            </p>
          )}
        </div>
        <div className="card-actions mt-4">
          <Link
            href={`/products/${product.id}`}
            className="btn bg-[#77F7D3] text-black border-none hover:bg-[#66e6c2] py-3 px-6 rounded-none shadow-none h-[50px] w-full text-center">
            Ver Detalles
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
