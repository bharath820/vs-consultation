import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Video,
  Users,
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from '@/components/Footer'
import { useNavigate } from "react-router-dom";


const BookConsultation: React.FC = () => {
   const navigate = useNavigate();
  const handleBookClick = () => {
    navigate("/contactus");
  };
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <section className="bg-blue-50 py-16 text-center">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Book a Consultation — Personalized Guidance for Your Global Plans
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Get one-on-one expert advice on studying, working, or migrating abroad.
          Our certified counsellors will analyze your goals, eligibility, and
          documents to create a tailored roadmap for success.
        </motion.p>
      </section>

      {/* What You'll Get */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          What You’ll Get
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Personalized eligibility assessment",
            "Detailed overview of visa options",
            "Guidance on documents and timelines",
            "Country & program recommendations",
            "Fee structure and process explanation",
            "Q&A session with an expert counsellor",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-xl border p-6 flex items-center gap-3 hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <CheckCircle2 className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation Options */}
      <section className="bg-blue-50 py-16 px-6">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Consultation Options
        </motion.h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Video className="w-10 h-10 text-blue-600" />,
              title: "Online Consultation",
              desc: "Ideal for international clients. Connect via Zoom or Google Meet from anywhere in the world.",
            },
            {
              icon: <MapPin className="w-10 h-10 text-blue-600" />,
              title: "In-Person Consultation",
              desc: "Visit our office for a face-to-face session with our counsellors and get personalized advice.",
            },
            {
              icon: <Users className="w-10 h-10 text-blue-600" />,
              title: "Group Sessions",
              desc: "Perfect for universities, corporate teams, or recruitment drives looking for collective insights.",
            },
          ].map((option, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg border p-8 text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center gap-4">
                {option.icon}
                <h3 className="text-xl font-semibold text-blue-700">
                  {option.title}
                </h3>
                <p className="text-gray-600">{option.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          How It Works
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "Submit Your Details",
              desc: "Fill out the short form with your basic information.",
            },
            {
              step: "Schedule Your Slot",
              desc: "Choose a convenient date and time for your session.",
            },
            {
              step: "Meet Your Counsellor",
              desc: "Get expert guidance on your study, work, or migration plans.",
            },
            {
              step: "Receive Your Action Plan",
              desc: "We’ll send a personalized roadmap after your consultation.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {item.step}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Why Book With Us
        </motion.h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Certified immigration & education specialists",
            "10,000+ successful clients worldwide",
            "Honest advice & transparent processes",
            "Free initial eligibility review",
          ].map((reason, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-6">
        <motion.h2
          className="text-3xl font-semibold text-blue-700 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Ready to Begin?
        </motion.h2>
        <p className="text-gray-600 mb-8">Turn your dreams into plans.</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
          onClick={handleBookClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition">
            Book Your Consultation Now <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="tel:+15551234567"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition"
          >
            <Phone className="w-5 h-5" /> +91 8125086767
          </a>
        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default BookConsultation;
