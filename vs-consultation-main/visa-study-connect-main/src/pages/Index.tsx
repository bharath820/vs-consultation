import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import ServicesCircle from "@/components/ServicesCircle";
import WhyChooseUs from "@/components/WhyChooseUs";
import LatestUpdates from "@/components/LatestUpdates";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PopularDestinations />
      <ServicesCircle />
      <WhyChooseUs />
      <LatestUpdates />
      <Footer />
      
    </div>
  );
};

export default Index;
