import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import {
  Briefcase,
  CheckCircle2,
  Globe2,
  Search,
  Handshake,
  Headphones,
  Newspaper,
  Phone,
  ClipboardCheck,
} from "lucide-react";
import Footer from '@/components/Footer'
import { useNavigate } from "react-router-dom";
const WhyChooseVS: React.FC = () => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate("/contactus");
  };
  const handleContact = () => {
    navigate("/bookconsultation");
  };
  const reasons = [
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      title: "Expert Counsellors",
      desc: "Certified and experienced immigration consultants with a proven record of helping students and professionals achieve their international goals.",
      note: "→ 10,000+ successful clients worldwide",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />,
      title: "98% Visa Success Rate",
      desc: "Our meticulous documentation and personalized strategy ensure a 98% visa approval rate, making your dream destination closer than ever.",
      note: "→ High success through proven expertise",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-blue-600" />,
      title: "Global Network",
      desc: "Strong partnerships with universities and employers across 30+ countries, connecting you to top global opportunities.",
      note: "→ Access to study, work, and PR options worldwide",
    },
    {
      icon: <Search className="w-10 h-10 text-blue-600" />,
      title: "Transparent & Honest Process",
      desc: "No hidden fees. No false promises. We provide clear timelines, realistic expectations, and step-by-step updates throughout your journey.",
      note: "→ 100% transparency and integrity",
    },
    {
      icon: <Handshake className="w-10 h-10 text-blue-600" />,
      title: "End-to-End Support",
      desc: "From the first consultation to your arrival abroad — we’re with you every step of the way.",
      extra: [
        "Study, Work, PR, Business & Visit Visas",
        "Eligibility assessment",
        "Documentation & application support",
        "Post-arrival assistance",
      ],
      note: "→ Complete guidance under one roof",
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-600" />,
      title: "24/7 Assistance",
      desc: "Our dedicated team offers round-the-clock support to answer your questions and guide you through the process — whenever you need help.",
      note: "→ Always available, always reliable",
    },
    {
      icon: <Newspaper className="w-10 h-10 text-blue-600" />,
      title: "Stay Updated, Stay Ahead",
      desc: "We keep you informed with the latest immigration news, policy changes, and scholarship opportunities — ensuring you make informed decisions.",
      note: "→ Smart choices backed by real-time information",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Header />
    <section
      id="why-choose-vs"
      className="font-poppins bg-gray-50 py-20 px-6 text-gray-800"
    >
      {/* Header */}

      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Why Choose VS Consultancy
        </motion.h2>
        <p className="text-lg text-gray-600">
          Your Trusted Partner for Global Education & Migration
        </p>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          At <strong>VS Consultancy</strong>, we don’t just process visas — we
          build pathways to your global success. Here’s why thousands of clients
          trust us to guide their study, work, and migration journeys.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg border transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-start gap-3">
              <div>{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>

              {item.extra && (
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {item.extra.map((e, j) => (
                    <li key={j}>{e}</li>
                  ))}
                </ul>
              )}

              <p className="font-medium text-blue-600 mt-3">{item.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-blue-900 mb-3">
          Choose VS Consultancy — Your Gateway to Global Opportunities
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Whether you’re planning to{" "}
          <strong>study, work, or settle abroad</strong>, our expertise,
          integrity, and results-driven approach make us your most trusted
          partner in global migration success.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
          onClick={handleBookClick}
           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition">
            <Phone className="w-5 h-5" /> Book Free Consultation
          </button>
          <button 
          onClick={handleContact}
          className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition">
            <ClipboardCheck className="w-5 h-5" /> Check Eligibility
          </button>
        </div>
      </motion.div>
    </section>
    <Footer />
    </div>
  );
};

export default WhyChooseVS;
