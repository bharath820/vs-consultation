import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    country: "Canada",
    flag: "🇨🇦",
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Express Entry",
      "PNP",
      "Business Visa",
      "Visit Visa",
      "Digital Nomad Visa",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Subclass 462",
      "Business Visa",
      "Subclass 189",
      "TSS Visa",
      "Visit Visa",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    visaTypes: [
      "Student Visa",
      "Work Visa",
      "Business Visa",
      "Visit Visa",
      "Graduate Visa",
      "Skilled Worker Visa",
    ],
    color: "from-blue-700 to-red-600",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    visaTypes: [
      "Student Visa (F-1)",
      "Work Visa (H-1B)",
      "Business Visa",
      "Visit Visa",
      "Green Card",
      "EB-5 Visa",
    ],
    color: "from-blue-600 to-red-500",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    visaTypes: [
      "Student Visa",
      "Work Visa",
      "Business Visa",
      "Job Seeker Visa",
      "Blue Card",
      "Visit Visa",
    ],
    color: "from-gray-800 to-red-600",
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    visaTypes: [
      "Student Visa",
      "Work Visa",
      "Business Visa",
      "Visit Visa",
      "Residence Permit",
    ],
    color: "from-blue-600 to-red-600",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Popular Destinations</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Explore visa options for top study and work destinations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((dest, index) => (
            <Card
              key={dest.country}
              className="p-4 md:p-6 hover:shadow-large transition-all duration-300 animate-slide-up border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-3xl md:text-4xl">{dest.flag}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{dest.country}</h3>
                    <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {dest.visaTypes.length} visa types
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                {dest.visaTypes.slice(0, 3).map((visa) => (
                  <Badge key={visa} variant="secondary" className="text-xs">
                    {visa}
                  </Badge>
                ))}
                {dest.visaTypes.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{dest.visaTypes.length - 3} more
                  </Badge>
                )}
              </div>

              <Link
                to={`/migrate/${dest.country.toLowerCase()}`}
                className="flex items-center text-primary hover:text-primary-dark font-medium text-sm transition-colors group"
              >
                Explore {dest.country}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
