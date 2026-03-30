"use client";
import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext();

  return (
    <div
      onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0); }}
      className="group flex flex-col cursor-pointer w-full"
    >
      {/* Image Container */}
      <div className="relative bg-[#f7f5f2] rounded-xl overflow-hidden w-full aspect-[3/4] flex items-center justify-center">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="object-cover w-4/5 h-4/5 md:w-full md:h-full transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={800}
        />

        {/* Wishlist */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
        >
          <Image className="h-3.5 w-3.5" src={assets.heart_icon} alt="wishlist" />
        </button>

        {/* Quick buy overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-full text-center text-xs tracking-widest uppercase text-white py-1"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 flex flex-col gap-1">
        <p className="text-sm font-medium text-stone-800 truncate leading-snug">{product.name}</p>
        <p className="text-xs text-stone-400 truncate max-sm:hidden">{product.description}</p>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                className="h-2.5 w-2.5"
                src={index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon}
                alt="star"
              />
            ))}
          </div>
          <span className="text-[10px] text-stone-400">(4.5)</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-1">
          <p className="text-base font-semibold text-stone-900 tracking-tight">
            {currency}{product.offerPrice}
          </p>
          <button
            onClick={(e) => e.stopPropagation()}
            className="max-sm:hidden text-[10px] tracking-widest uppercase text-stone-400 border border-stone-200 px-3 py-1 hover:border-stone-800 hover:text-stone-800 transition-all duration-200"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
