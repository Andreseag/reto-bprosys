"use client";

import Hero from "@/components/Hero/Hero";
import ProductsList from "@/components/ProductsList/ProductsList";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-100">
      <main className="">
        <Hero />
        <ProductsList />
      </main>
    </div>
  );
}
