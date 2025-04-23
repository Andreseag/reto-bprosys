import ProductDetail from "@/components/ProductDetail/ProductDetail";
import ProductNotFound from "@/components/ProductNotFound/ProductNotFound";
import { products } from "@/data";

async function fetchProduct(productId: string) {
  // Simulación de datos (puedes reemplazar esto con una llamada real a una API)
  const product = products.find((p) => p.id === parseInt(productId));

  return product;
}

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await fetchProduct(params.productId);

  if (!product) {
    return (
      <ProductNotFound /> // Componente que muestra un mensaje de error o una página 404
    );
  }

  return <ProductDetail product={product} />;
}
