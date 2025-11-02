import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "../assets/hero-bg.jpg"; // ✅ Make sure this file exists

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm("service_43a3t57", "template_uf5ef8o", form.current, {
        publicKey: "ZMfPDKl-B5w3uZ-aM",
      })
      .then(
        () => {
          alert("✅ Thank you! Your message has been sent successfully.");
          setFormData({
            name: "",
            email: "",
            contact: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("❌ FAILED...", error.text);
          alert("Something went wrong. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Main Content */}
      <div className="flex flex-col md:flex-row flex-1 w-full">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full h-[300px] md:h-auto">
          <img
            src={heroImage}
            alt="Abroad Education"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Contact Form Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>

          <p className="text-gray-600 mb-3 text-center">
            📞 <span className="font-medium">+91 9177714471</span> | ✉️{" "}
            <span className="font-medium">Info@vsconsultancy.org</span>
          </p>

          <p className="text-gray-700 mb-8 text-center">
            Fill the details below, and we’ll get in touch with you soon.
          </p>

          {/* ✅ Contact Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full max-w-md grid grid-cols-1 gap-4"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Contact Number & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number *"
                value={formData.contact}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message (Character limit is 500)"
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 text-white py-3 rounded-lg transition-all font-medium shadow-md ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default ContactSection;
