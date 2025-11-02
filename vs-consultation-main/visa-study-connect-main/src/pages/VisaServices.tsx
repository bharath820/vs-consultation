import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from '@/components/Footer'
import {
  BookOpen,
  Briefcase,
  Home,
  DollarSign,
  Plane,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const visaServices = [
  {
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: "Study Visa",
    desc: "Open the doors to world-class education. We help you choose the right country, university, and course — ensuring smooth admission and visa processing.",
    includes: [
      "Admission & application guidance",
      "Financial document support",
      "SOP & visa interview preparation",
    ],
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: "Work Visa",
    desc: "Take your career global. We assist skilled professionals and job seekers in finding suitable opportunities and securing the right work permits.",
    includes: [
      "Job market guidance",
      "Employer sponsorship assistance",
      "Work visa documentation and filing",
    ],
  },
  {
    icon: <Home className="w-10 h-10 text-blue-600" />,
    title: "Permanent Residency (PR) Visa",
    desc: "Settle abroad permanently with our end-to-end PR support. Our team helps you navigate point-based systems, express entry processes, and all country-specific requirements.",
    includes: [
      "Eligibility assessment",
      "Profile creation and EOI submission",
      "PR documentation and follow-up",
    ],
  },
  {
    icon: <DollarSign className="w-10 h-10 text-blue-600" />,
    title: "Business & Investor Visa",
    desc: "Expand your business across borders. We provide strategic advice and application support for entrepreneurs and investors looking to establish or expand operations globally.",
    includes: [
      "Investment requirement guidance",
      "Business plan assistance",
      "Embassy submission support",
    ],
  },
  {
    icon: <Plane className="w-10 h-10 text-blue-600" />,
    title: "Visit Visa",
    desc: "Explore the world with confidence. We handle short-term travel visas for tourism, family visits, and conferences — ensuring a stress-free process.",
    includes: [
      "Invitation letter guidance",
      "Itinerary and travel insurance support",
      "Embassy appointment scheduling",
    ],
  },
  {
    icon: <FileCheck className="w-10 h-10 text-blue-600" />,
    title: "Document & Legalization Assistance",
    desc: "Accurate documentation is the key to visa success. We help with translations, notarization, attestation, and verification to meet all embassy standards.",
    includes: [],
  },
];


const VisaServices: React.FC = () => {
  const navigate = useNavigate();
  const handleConsultClick = () => {
    navigate("/contactus");
  };
  const handleBookClick = () => {
    navigate("/bookconsultation");
  }
  return (
    <div className="bg-white text-gray-800">
      <Header />
      {/* Header */}
      <section className="bg-blue-50 py-16 text-center">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Visa Services — Simplifying Your Global Journey
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your trusted partner for all types of visa and immigration needs —
          from study and work permits to permanent residency and business visas.
        </motion.p>
      </section>

      {/* Our Expertise */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Expertise
        </motion.h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          At <span className="font-semibold">VS Consultancy</span>, we provide
          comprehensive visa assistance for individuals, students, professionals,
          and entrepreneurs aiming to study, work, invest, or settle abroad. Our
          experienced counsellors guide you through every step — from eligibility
          checks and document preparation to interview coaching and final visa
          approval.
        </p>
      </section>

      {/* Visa Types Grid */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visaServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-blue-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
              {service.includes.length > 0 && (
                <ul className="text-left mt-4 space-y-2">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 text-center px-6">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Why Choose Our Visa Services
        </motion.h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "98% success rate — built on precise application handling.",
            "Dedicated case officers — your single point of contact.",
            "Transparent pricing — no hidden costs.",
            "Country-specific experts — Canada, Australia, UK, USA, Germany, and more.",
          ].map((reason, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md p-6 rounded-xl border"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Start Your Visa Journey Today
        </motion.h2>
        <p className="text-gray-600 mb-8">
          Your dream destination is just one step away.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
          onClick={handleBookClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
            Check Your Eligibility
          </button>
          <button 
          onClick={handleConsultClick}
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-medium transition">
            Book a Consultation Now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VisaServices;
