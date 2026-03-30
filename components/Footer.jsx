"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#faf9f7] border-t border-stone-100">
      <div className="px-6 md:px-16 lg:px-32 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-stone-100">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Image className="w-28 md:w-32 mb-6" src={assets.logo} alt="logo" />
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Indulge in the world of luxury scents. Each fragrance is a masterpiece, meticulously curated to evoke emotions and memories.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {[assets.instagram_icon, assets.twitter_icon, assets.facebook_icon].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-stone-400 transition-colors duration-200">
                  <Image src={icon} alt="social" className="w-3.5 h-3.5 opacity-50 hover:opacity-80 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-stone-800 mb-6 font-medium">Navigate</h3>
            <ul className="space-y-3">
              {["Home", "Shop", "About Us", "Contact Us", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-stone-400 hover:text-stone-800 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-stone-800 mb-6 font-medium">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-stone-300 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.38 1.24 2 2 0 012.38 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <p className="text-sm text-stone-400">076-0589218</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-stone-300 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                </svg>
                <p className="text-sm text-stone-400">sampathhpha.23@uom.lk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-300">© 2025 Essentique. All Rights Reserved.</p>
          <p className="text-xs text-stone-200">Crafted with care for those who appreciate the finer things.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
