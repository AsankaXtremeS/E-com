"use client";
import React, { useState, useEffect } from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-white"
        } border-b border-stone-100`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4">
          <Image
            className="cursor-pointer w-28 md:w-32"
            onClick={() => router.push("/")}
            src={assets.logo}
            alt="logo"
          />

          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "/", label: "Home" },
              { href: "/all-products", label: "Shop" },
              { href: "/about-us", label: "About" },
              { href: "/contact-us", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="relative text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}

            {isSeller && (
              <button
                onClick={() => router.push("/seller")}
                className="text-xs tracking-widest uppercase border border-amber-400 px-4 py-1.5 text-amber-700 hover:bg-amber-50 transition-colors duration-200"
              >
                Dashboard
              </button>
            )}
          </div>

          <div className="flex items-center gap-5">
            {user ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Cart"
                    labelIcon={<CartIcon />}
                    onClick={() => router.push("/cart")}
                  />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<BagIcon />}
                    onClick={() => router.push("/my-orders")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={openSignIn}
                className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                Account
              </button>
            )}

            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-px bg-stone-800 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}/>
              <span className={`block w-5 h-px bg-stone-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
              <span className={`block w-5 h-px bg-stone-800 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}/>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="pt-24 px-8 flex flex-col gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/all-products", label: "Shop" },
              { href: "/about-us", label: "About" },
              { href: "/contact-us", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-light text-stone-700 hover:text-stone-900 transition-colors border-b border-stone-100 pb-4"
              >
                {label}
              </Link>
            ))}
            {!user && (
              <button onClick={() => { openSignIn(); setMenuOpen(false); }}
                className="text-left text-2xl font-light text-stone-700 border-b border-stone-100 pb-4">
                Account
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
