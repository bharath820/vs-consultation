import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from '@/components/Footer'
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Heart, Users, Landmark, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const migrationData: Record<string, any> = {
  canada: {
    title: "Migrate to Canada",
    flag: "🇨🇦",
    pathways: [
      {
        name: "Express Entry",
        description: "Points-based immigration system for skilled workers",
        icon: Users,
        processing: "6-8 months",
        requirements: ["CRS score 470+", "IELTS 7.0+", "Education credential assessment"],
        eligibility: "For skilled workers with education and work experience",
      },
      {
        name: "Provincial Nominee Program (PNP)",
        description: "Province-specific immigration programs",
        icon: Landmark,
        processing: "12-18 months",
        requirements: ["Provincial nomination", "Job offer (varies)", "Language proficiency"],
        eligibility: "For workers nominated by Canadian provinces",
      },
      {
        name: "Family Sponsorship",
        description: "Sponsor your family members to Canada",
        icon: Heart,
        processing: "12-24 months",
        requirements: ["Canadian citizen/PR", "Financial capability", "Relationship proof"],
        eligibility: "For relatives of Canadian citizens and PRs",
      },
      {
        name: "Start-up Visa",
        description: "For entrepreneurs with innovative business ideas",
        icon: Home,
        processing: "12-16 months",
        requirements: ["Support letter", "Language proficiency", "Sufficient funds"],
        eligibility: "For entrepreneurs with designated organization support",
      },
    ],
    benefits: [
      "Universal healthcare system",
      "High quality of life and safety",
      "Excellent education system",
      "Multicultural society",
      "Strong economy and job market",
      "Path to citizenship in 3 years",
    ],
    processingFee: "CAD 1,325 + CAD 500",
  },
  australia: {
    title: "Migrate to Australia",
    flag: "🇦🇺",
    pathways: [
      {
        name: "Skilled Independent Visa (189)",
        description: "Points-tested permanent residency visa",
        icon: Users,
        processing: "6-12 months",
        requirements: ["65+ points", "Occupation in skilled list", "Age under 45"],
        eligibility: "For skilled workers without sponsorship",
      },
      {
        name: "Skilled Nominated Visa (190)",
        description: "State/territory nominated PR visa",
        icon: Landmark,
        processing: "8-12 months",
        requirements: ["State nomination", "60+ points", "Occupation in list"],
        eligibility: "For skilled workers with state nomination",
      },
      {
        name: "Business Innovation Visa (188)",
        description: "For business owners and investors",
        icon: Home,
        processing: "12-24 months",
        requirements: ["Business experience", "Assets threshold", "Points test"],
        eligibility: "For entrepreneurs and investors",
      },
      {
        name: "Partner Visa (820/801)",
        description: "For partners of Australian citizens",
        icon: Heart,
        processing: "18-24 months",
        requirements: ["Genuine relationship", "Sponsor eligibility"],
        eligibility: "For married or de facto partners",
      },
    ],
    benefits: [
      "World-class healthcare (Medicare)",
      "Excellent work-life balance",
      "Beautiful climate and beaches",
      "Strong education system",
      "High wages and living standards",
      "Pathway to citizenship in 4 years",
    ],
    processingFee: "AUD 4,115 - AUD 9,095",
  },
  uk: {
    title: "Migrate to United Kingdom",
    flag: "🇬🇧",
    pathways: [
      {
        name: "Skilled Worker Visa",
        description: "Work-based immigration route",
        icon: Users,
        processing: "3-8 weeks",
        requirements: ["Job offer", "£25,600+ salary", "English proficiency"],
        eligibility: "For workers with UK employer sponsorship",
      },
      {
        name: "Global Talent Visa",
        description: "For exceptional talent and promise",
        icon: Landmark,
        processing: "3-8 weeks",
        requirements: ["Endorsement", "Exceptional talent proof"],
        eligibility: "For leaders in tech, science, arts",
      },
      {
        name: "Innovator Founder Visa",
        description: "For innovative business founders",
        icon: Home,
        processing: "3-8 weeks",
        requirements: ["£50,000 investment", "Endorsement", "Business plan"],
        eligibility: "For entrepreneurs with innovative ideas",
      },
      {
        name: "Family Visa",
        description: "Join family members in UK",
        icon: Heart,
        processing: "12-24 weeks",
        requirements: ["Relationship proof", "Financial requirement", "English test"],
        eligibility: "For partners and family of UK residents",
      },
    ],
    benefits: [
      "NHS healthcare access",
      "Rich history and culture",
      "World-renowned education",
      "Gateway to Europe",
      "Strong workers' rights",
      "Settlement after 5 years",
    ],
    processingFee: "£625 - £1,500",
  },
  usa: {
    title: "Migrate to United States",
    flag: "🇺🇸",
    pathways: [
      {
        name: "EB-1 Extraordinary Ability",
        description: "For individuals with extraordinary ability",
        icon: Landmark,
        processing: "6-12 months",
        requirements: ["National/international acclaim", "Sustained achievement"],
        eligibility: "For top professionals in their field",
      },
      {
        name: "EB-5 Investor Visa",
        description: "Investment-based green card",
        icon: Home,
        processing: "24-36 months",
        requirements: ["$800,000-$1,050,000 investment", "Job creation"],
        eligibility: "For qualified investors",
      },
      {
        name: "Family-Based Immigration",
        description: "Sponsorship by US citizen/resident",
        icon: Heart,
        processing: "12-24 months",
        requirements: ["Family relationship", "Sponsor eligibility", "Affidavit of support"],
        eligibility: "For immediate relatives of US citizens/PRs",
      },
      {
        name: "Employment-Based Green Card",
        description: "Employer-sponsored permanent residency",
        icon: Users,
        processing: "12-36 months",
        requirements: ["Job offer", "Labor certification", "Qualifications"],
        eligibility: "For sponsored employees",
      },
    ],
    benefits: [
      "World's largest economy",
      "Innovation and opportunity hub",
      "Diverse career options",
      "Quality education system",
      "Cultural diversity",
      "Citizenship after 5 years",
    ],
    processingFee: "$1,140 - $3,675",
  },
  germany: {
    title: "Migrate to Germany",
    flag: "🇩🇪",
    pathways: [
      {
        name: "EU Blue Card",
        description: "For highly qualified professionals",
        icon: Users,
        processing: "1-3 months",
        requirements: ["University degree", "€58,400+ salary", "Job offer"],
        eligibility: "For qualified non-EU workers",
      },
      {
        name: "Self-Employment Visa",
        description: "For entrepreneurs and freelancers",
        icon: Home,
        processing: "3-6 months",
        requirements: ["Business plan", "Capital proof", "Qualifications"],
        eligibility: "For self-employed professionals",
      },
      {
        name: "Family Reunion Visa",
        description: "Join family members in Germany",
        icon: Heart,
        processing: "2-6 months",
        requirements: ["Relationship proof", "German language A1", "Living space"],
        eligibility: "For family of German residents",
      },
    ],
    benefits: [
      "Excellent healthcare system",
      "Free university education",
      "Strong economy",
      "Central European location",
      "High quality of life",
      "Permanent residence after 5 years",
    ],
    processingFee: "€75 - €100",
  },
  russia: {
    title: "Migrate to Russia",
    flag: "🇷🇺",
    pathways: [
      {
        name: "Temporary Residence Permit",
        description: "3-year renewable residence permit",
        icon: Users,
        processing: "6-12 months",
        requirements: ["Valid visa", "Medical certificate", "Russian language test"],
        eligibility: "For foreign nationals seeking residency",
      },
      {
        name: "Permanent Residence",
        description: "Indefinite residence permit",
        icon: Home,
        processing: "6-12 months",
        requirements: ["5 years TRP", "Income proof", "Housing"],
        eligibility: "After 5 years of temporary residence",
      },
      {
        name: "Family Immigration",
        description: "Join family in Russia",
        icon: Heart,
        processing: "6-12 months",
        requirements: ["Family ties", "Sponsor support"],
        eligibility: "For family members of Russian residents",
      },
    ],
    benefits: [
      "Low cost of living",
      "Rich cultural heritage",
      "Growing economy",
      "Education opportunities",
      "Simplified citizenship path",
    ],
    processingFee: "₽3,500 - ₽5,000",
  },
};

const Migrate = () => {
  const { country } = useParams<{ country: string }>();
  const countryKey = country?.toLowerCase() || "canada";
  const data = migrationData[countryKey] || migrationData.canada;

  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/bookconsultation");
  };

  const handleBook = () => {
    navigate("/contactus");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <span className="text-5xl md:text-7xl mb-4 block">{data.flag}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore permanent residency and citizenship pathways
            </p>
          </div>
        </div>
      </section>

      {/* Migration Pathways */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Immigration Pathways</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the right immigration route for your situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {data.pathways.map((pathway: any, index: number) => {
              const Icon = pathway.icon;
              return (
                <Card
                  key={pathway.name}
                  className="p-6 md:p-8 hover:shadow-large transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{pathway.name}</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-3">{pathway.description}</p>
                      <Badge variant="secondary" className="flex items-center gap-1 w-fit text-xs">
                        <Clock className="h-3 w-3" />
                        {pathway.processing}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {pathway.requirements.map((req: string) => (
                          <Badge key={req} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Eligibility:</p>
                      <p className="text-sm text-muted-foreground">{pathway.eligibility}</p>
                    </div>
                  </div>

                  <Button 
                  onClick={handleLearnMore}
                  className="w-full bg-gradient-primary hover:opacity-90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Migrate?</h2>
              <div className="space-y-4">
                {data.benefits.map((benefit: string, index: number) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Start Your Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <span className="font-semibold text-sm md:text-base">Processing Fee:</span>
                  <span className="text-base md:text-lg font-bold text-primary">{data.processingFee}</span>
                </div>
                <Button 
                onClick={handleBook}
                className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                  Check Eligibility
                </Button>
                <Button 
                onClick={handleLearnMore}
                variant="outline" className="w-full" size="lg">
                  Book Consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Migrate;
