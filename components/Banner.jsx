"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="my-24">
      <div className="relative overflow-hidden rounded-2xl bg-[#1a1713]" style={{ minHeight: "320px" }}>

        {/* Warm grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Warm gradient */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(200,169,126,0.15) 0%, transparent 60%)" }}
        />

        {/* Left perfume image */}
        <div className="absolute left-0 bottom-0 hidden md:block" style={{ width: "220px" }}>
          <Image src={assets.b1} alt="perfume" className="w-full h-auto object-contain" />
        </div>

        {/* Right perfume image */}
        <div className="absolute right-0 bottom-0" style={{ width: "260px" }}>
          <Image src={assets.b2} alt="perfume" className="w-full h-auto object-contain" />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-amber-400/80 mb-4">Limited Edition</p>
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight max-w-sm tracking-tight">
            Discover Your<br />
            <span className="italic" style={{ color: "#c8a97e" }}>Signature Aura</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-xs leading-relaxed">
            From alluring blends to lasting allure — crafted to leave a mark
          </p>

          <Link href="/all-products">
            <button className="mt-8 flex items-center gap-3 text-xs tracking-widest uppercase text-[#1a1713] bg-[#c8a97e] px-10 py-3.5 hover:bg-[#d4b88e] transition-colors duration-200">
              Shop Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
