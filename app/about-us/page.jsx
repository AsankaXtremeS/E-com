'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-6 md:px-16 pt-20 pb-16">
        <div className="text-center mt-12 mb-10">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mt-2 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We’re passionate about delivering high-quality, long-lasting fragrances that reflect elegance, style, and personality. Our mission is to make premium scents accessible to everyone — no matter where you are.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">🌿 Our Story</h3>
            <p>
              Born from a love for unique aromas and modern design, our journey began with a simple goal: to redefine how people experience perfumes. We blend art and science to craft scents that evoke emotion and memory.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🧪 Quality Promise</h3>
            <p>
              All our products are made using premium-grade ingredients. We partner with skilled perfumers and ensure every bottle meets the highest standards in fragrance quality and longevity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🚚 What We Offer</h3>
            <ul className="list-disc list-inside ml-2">
              <li>Elegant, gender-neutral and signature perfumes</li>
              <li>Affordable luxury with fast local delivery</li>
              <li>Personalized customer support and care</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
