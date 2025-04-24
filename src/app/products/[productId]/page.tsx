import ProductDetail from "@/components/ProductDetail/ProductDetail";
import ProductNotFound from "@/components/ProductNotFound/ProductNotFound";
import { products } from "@/data";
import { JSX } from "react";

async function fetchProduct(productId: string) {
  return products.find((p) => p.id === parseInt(productId, 10));
}

export default async function Page({
  params,
}: Readonly<{ params: Promise<{ productId: string }> }>): Promise<JSX.Element> {
  const { productId } = await params;

  const product = await fetchProduct(productId);

  if (!product) {
    return <ProductNotFound />;
  }
  return <ProductDetail product={product} />;
}
