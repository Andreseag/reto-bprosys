import Link from "next/link";
import { products } from "@/data";
import { AiOutlineCreditCard } from "react-icons/ai";

async function fetchProduct(productId: string) {
  // Simulación de datos (puedes reemplazar esto con una llamada real a una API)
  const product = products.find((p) => p.id === parseInt(productId));

  return product;
}

export default async function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  const product = await fetchProduct(params.productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 px-10 py-10">
      <div className="mx-auto p-8">
        <AiOutlineCreditCard size={80} />
        <h1 className="text-5xl mb-4">{product.name}</h1>
        {product.description && (
          <div className="mt-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2">Descripción</h2>
            <p className="text-lg">{product.description}</p>
          </div>
        )}
        <p className="text-lg mb-4">
          <strong>Tipo:</strong> {product.type}
        </p>
        {product.interestRate && (
          <p className="text-lg mb-4">
            <strong>Tasa de Interés:</strong> {product.interestRate}
          </p>
        )}
        <p className="text-lg mb-4">
          <strong>Categoría:</strong> {product.category}
        </p>
        {product.riskLevel && (
          <p className="text-lg mb-4">
            <strong>Nivel de Riesgo:</strong> {product.riskLevel}
          </p>
        )}

        {/* Botón para volver al catálogo */}
        <div className="mt-6">
          <Link
            href="/"
            className="btn bg-[#77F7D3] text-black border-none hover:bg-[#66e6c2] py-4 px-8 rounded-none shadow-none h-[50px]">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
