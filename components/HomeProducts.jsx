"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <section className="pt-20">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-2">Our Collection</p>
          <h2 className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">Popular Products</h2>
        </div>
        <button
          onClick={() => router.push('/all-products')}
          className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-stone-400 hover:text-stone-800 transition-colors duration-200"
        >
          View All
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Thin divider */}
      <div className="w-full h-px bg-stone-100 mb-8" />

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Mobile see more */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push('/all-products')}
          className="flex items-center gap-3 text-xs tracking-widest uppercase text-stone-500 border border-stone-200 px-10 py-3 hover:border-stone-800 hover:text-stone-800 transition-all duration-200"
        >
          See All Products
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HomeProducts;
