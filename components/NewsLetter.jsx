"use client";
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20">
      <div className="relative overflow-hidden rounded-2xl bg-[#faf9f7] border border-stone-100 px-8 md:px-16 py-14 flex flex-col items-center text-center">
        
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-stone-200/50" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-stone-200/30" />

        <p className="text-[10px] tracking-[0.3em] uppercase text-amber-600/70 mb-3 relative z-10">Exclusive Access</p>
        <h2 className="text-2xl md:text-4xl font-light text-stone-900 tracking-tight max-w-md relative z-10">
          Join Our Scented Circle<br />
          <span className="italic text-stone-400">&amp; Enjoy 20% Off</span>
        </h2>
        <p className="mt-4 text-sm text-stone-400 max-w-sm leading-relaxed relative z-10">
          Unlock exclusive access to our latest fragrance launches, limited-time offers, and signature scent tips.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex items-stretch w-full max-w-lg mt-8 shadow-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white border border-stone-200 border-r-0 px-5 py-3.5 text-sm text-stone-700 placeholder:text-stone-300 outline-none focus:border-stone-400 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-stone-900 text-white text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="relative z-10 mt-8 flex items-center gap-3 text-stone-600">
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c8a97e" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <span className="text-sm">You're in! Check your inbox for your 20% discount.</span>
          </div>
        )}

        <p className="relative z-10 text-xs text-stone-300 mt-4">No spam. Unsubscribe any time.</p>
      </div>
    </section>
  );
};

export default NewsLetter;
