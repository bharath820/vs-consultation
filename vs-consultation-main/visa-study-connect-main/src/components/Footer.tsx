import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              VS Consultancy
            </h3>
            <p className="text-background/80 text-sm">
              Your trusted partner for global education and career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/migrate" className="hover:text-background">Migrate</a></li>
              <li><a href="/study" className="hover:text-background">Study Abroad</a></li>
              <li><a href="/work" className="hover:text-background">Work Abroad</a></li>
              <li><a href="/coaching" className="hover:text-background">Coaching</a></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold mb-4">Countries</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/migrate/canada" className="hover:text-background">Canada</a></li>
              <li><a href="/migrate/australia" className="hover:text-background">Australia</a></li>
              <li><a href="/migrate/uk" className="hover:text-background">United Kingdom</a></li>
              <li><a href="/migrate/usa" className="hover:text-background">USA</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91 9177714471
                +91 8125086767
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@vsconsultancy.org
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                #2-3-915,Arunodaya Nagar, Nagole, Hyderabad-500068, Telangana, India.
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} VS Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
