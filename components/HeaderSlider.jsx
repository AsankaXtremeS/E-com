"use client";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      eyebrow: "New Arrival",
      title: "Indulge in Pure Elegance",
      subtitle: "Your Signature Fragrance Awaits",
      offer: "Limited Time — 30% Off All Collections",
      buttonText1: "Shop Now",
      buttonText2: "Discover More",
      imgSrc: assets.header_perfume1_image,
      accent: "#c8a97e",
    },
    {
      id: 2,
      eyebrow: "Bestseller",
      title: "Next-Level Luxury",
      subtitle: "Discover Your Perfect Perfume",
      offer: "Only a Few Bottles Left",
      buttonText1: "Buy Now",
      buttonText2: "Explore Scents",
      imgSrc: assets.header_perfume2_image,
      accent: "#a08060",
    },
    {
      id: 3,
      eyebrow: "Exclusive",
      title: "Grace Meets Sophistication",
      subtitle: "Your Ideal Fragrance is Here",
      offer: "Exclusive Deal — 40% Off Today Only",
      buttonText1: "Order Now",
      buttonText2: "View Collection",
      imgSrc: assets.header_perfume3_image,
      accent: "#b89070",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        setIsAnimating(false);
      }, 300);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  const slide = sliderData[currentSlide];

  return (
    <div className="pt-20 w-full">
      <div className="relative mt-6 w-full overflow-hidden rounded-2xl bg-[#faf9f7] border border-stone-100" style={{ minHeight: "420px" }}>
        
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #8B6914 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c8a97e 0%, transparent 40%)`,
          }}
        />
        
        {/* Thin accent line top */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${slide.accent}, transparent)`, transition: "background 0.5s" }} />

        <div className={`flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-6 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
          
          {/* Text Side */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-stone-400" />
              <span className="text-xs tracking-[0.2em] uppercase text-stone-400">{slide.eyebrow}</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight tracking-tight">
                {slide.title}
              </h1>
              <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight" style={{ color: slide.accent }}>
                {slide.subtitle}
              </h2>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: slide.accent }} />
              <p className="text-sm text-stone-500">{slide.offer}</p>
            </div>

            <div className="flex items-center gap-4 mt-3">
              <Link href="/all-products">
                <button
                  className="px-8 py-3 text-sm tracking-widest uppercase text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: slide.accent }}
                >
                  {slide.buttonText1}
                </button>
              </Link>
              <button className="flex items-center gap-2 text-sm tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors duration-200">
                {slide.buttonText2}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="md:w-1/2 flex items-center justify-center relative">
            {/* Soft glow behind bottle */}
            <div className="absolute w-56 h-56 rounded-full opacity-20 blur-3xl" style={{ background: slide.accent }} />
            <Image
              className="relative z-10 md:w-72 w-44 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              src={slide.imgSrc}
              alt={`Slide ${currentSlide + 1}`}
            />
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-5 left-8 md:left-16 flex items-center gap-3">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-6 h-1.5"
                  : "w-1.5 h-1.5 bg-stone-300"
              }`}
              style={currentSlide === index ? { background: slide.accent } : {}}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-4 right-8 md:right-16 text-xs tracking-widest text-stone-300">
          0{currentSlide + 1} / 0{sliderData.length}
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
