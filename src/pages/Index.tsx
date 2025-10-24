import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import ServicesCircle from "@/components/ServicesCircle";
import WhyChooseUs from "@/components/WhyChooseUs";
import LatestUpdates from "@/components/LatestUpdates";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PopularDestinations />
      <ServicesCircle />
      <WhyChooseUs />
      <LatestUpdates />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                VS Consultancy
              </h3>
              <p className="text-background/80 text-sm">
                Your trusted partner for global education and career opportunities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="/migrate" className="hover:text-background">Migrate</a></li>
                <li><a href="/study" className="hover:text-background">Study Abroad</a></li>
                <li><a href="/work" className="hover:text-background">Work Abroad</a></li>
                <li><a href="/coaching" className="hover:text-background">Coaching</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Countries</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="/migrate/canada" className="hover:text-background">Canada</a></li>
                <li><a href="/migrate/australia" className="hover:text-background">Australia</a></li>
                <li><a href="/migrate/uk" className="hover:text-background">United Kingdom</a></li>
                <li><a href="/migrate/usa" className="hover:text-background">USA</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-background/80">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@vsconsultancy.com
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  123 Business Street, Suite 100
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2025 VS Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
