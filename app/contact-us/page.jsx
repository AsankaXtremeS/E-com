'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-6 md:px-16 pt-20 pb-16">
        <div className="text-center mt-12 mb-10">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mt-2 rounded-full"></div>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you. Whether it’s a question, suggestion, or fragrance request, we’re here to help!
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 max-w-xl w-full text-gray-700 space-y-4">
          <div>
            <h3 className="text-lg font-medium">📧 Email</h3>
            <p>essentiquelk@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">📞 Phone</h3>
            <p>+94 71 234 5678</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">📍 Location</h3>
            <p>Moratuwa, Sri Lanka</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
