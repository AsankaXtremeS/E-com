"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const collections = [
  {
    id: 1,
    image: assets.fp1,
    title: "Male Collection",
    description: "Crafted for strength, worn with style.",
    tag: "For Him",
  },
  {
    id: 2,
    image: assets.fp2,
    title: "Female Collection",
    description: "Grace in every note, beauty in every spray.",
    tag: "For Her",
  },
  {
    id: 3,
    image: assets.fp3,
    title: "Unisex Collection",
    description: "Where gender fades, and identity shines.",
    tag: "For All",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="mt-24">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-12">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">Explore</p>
        <h2 className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">Featured Collections</h2>
        <div className="w-12 h-px bg-amber-400/70 mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {collections.map(({ id, image, title, description, tag }) => (
          <div
            key={id}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay always on */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Tag chip */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1">
              <span className="text-[10px] tracking-widest uppercase text-white">{tag}</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-medium text-xl text-white leading-tight">{title}</p>
              <p className="text-sm text-white/70 mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {description}
              </p>
              <button className="mt-4 flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/80 hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300">
                Shop Collection
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
