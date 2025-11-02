import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from '@/components/Footer'
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, DollarSign, TrendingUp, MapPin, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const workData: Record<string, any> = {
  canada: {
    title: "Work in Canada",
    flag: "🇨🇦",
    visaTypes: [
      {
        name: "Temporary Foreign Worker Program (TFWP)",
        description: "For skilled workers with a job offer from a Canadian employer",
        processing: "2-4 months",
        requirements: ["Valid job offer", "LMIA approval", "Work permit"],
      },
      {
        name: "International Mobility Program (IMP)",
        description: "LMIA-exempt work permits for certain categories",
        processing: "2-3 months",
        requirements: ["Reciprocal employment", "Significant benefit to Canada"],
      },
      {
        name: "Provincial Nominee Program (PNP)",
        description: "Employer-sponsored work permits through provinces",
        processing: "3-6 months",
        requirements: ["Provincial nomination", "Job offer", "Work experience"],
      },
    ],
    popularJobs: [
      "Software Developer",
      "Registered Nurse",
      "Accountant",
      "Truck Driver",
      "Welder",
      "Construction Manager",
    ],
    averageSalary: "CAD 50,000 - 100,000",
    benefits: [
      "Universal healthcare",
      "High quality of life",
      "Path to permanent residency",
      "Family sponsorship options",
      "Strong workers' rights",
    ],
  },
  australia: {
    title: "Work in Australia",
    flag: "🇦🇺",
    visaTypes: [
      {
        name: "Temporary Skill Shortage (TSS) Visa",
        description: "For skilled workers sponsored by Australian employers",
        processing: "1-4 months",
        requirements: ["Employer sponsorship", "Skills assessment", "English proficiency"],
      },
      {
        name: "Skilled Independent Visa (Subclass 189)",
        description: "Points-based permanent visa for skilled workers",
        processing: "6-9 months",
        requirements: ["Points test", "Skills assessment", "Age under 45"],
      },
      {
        name: "Working Holiday Visa (Subclass 417)",
        description: "For young travelers looking to work and explore",
        processing: "1-2 weeks",
        requirements: ["Age 18-30", "Eligible passport", "Sufficient funds"],
      },
    ],
    popularJobs: [
      "Healthcare Professional",
      "IT Specialist",
      "Engineer",
      "Electrician",
      "Chef",
      "Teacher",
    ],
    averageSalary: "AUD 60,000 - 120,000",
    benefits: [
      "Excellent work-life balance",
      "High minimum wage",
      "Superannuation (pension)",
      "Paid annual leave",
      "Strong economy",
    ],
  },
  uk: {
    title: "Work in United Kingdom",
    flag: "🇬🇧",
    visaTypes: [
      {
        name: "Skilled Worker Visa",
        description: "For skilled workers with a job offer from UK sponsor",
        processing: "3-4 weeks",
        requirements: ["Certificate of Sponsorship", "Salary threshold", "English proficiency"],
      },
      {
        name: "Global Talent Visa",
        description: "For leaders in science, humanities, engineering, arts",
        processing: "3-8 weeks",
        requirements: ["Endorsement", "Exceptional talent or promise"],
      },
      {
        name: "Graduate Visa",
        description: "For international students who completed UK degree",
        processing: "8 weeks",
        requirements: ["UK degree", "Valid student visa", "Current UK residence"],
      },
    ],
    popularJobs: [
      "Software Engineer",
      "Data Analyst",
      "Healthcare Worker",
      "Teacher",
      "Financial Analyst",
      "Marketing Manager",
    ],
    averageSalary: "£25,000 - £60,000",
    benefits: [
      "NHS healthcare access",
      "Strong workers' protection",
      "Generous annual leave",
      "Path to settlement",
      "Diverse job market",
    ],
  },
  usa: {
    title: "Work in United States",
    flag: "🇺🇸",
    visaTypes: [
      {
        name: "H-1B Specialty Occupation Visa",
        description: "For professionals in specialty occupations",
        processing: "3-6 months",
        requirements: ["Bachelor's degree", "Employer sponsorship", "Specialty occupation"],
      },
      {
        name: "L-1 Intracompany Transfer",
        description: "For employees transferring to US office",
        processing: "2-4 months",
        requirements: ["Worked for company 1 year", "Executive/managerial role"],
      },
      {
        name: "O-1 Extraordinary Ability Visa",
        description: "For individuals with extraordinary ability",
        processing: "2-3 months",
        requirements: ["National/international recognition", "Sustained acclaim"],
      },
    ],
    popularJobs: [
      "Software Developer",
      "Data Scientist",
      "Financial Analyst",
      "Healthcare Professional",
      "Project Manager",
      "Business Analyst",
    ],
    averageSalary: "$50,000 - $150,000",
    benefits: [
      "Competitive salaries",
      "Career advancement",
      "Innovation hub",
      "Green card pathway",
      "Diverse opportunities",
    ],
  },
  germany: {
    title: "Work in Germany",
    flag: "🇩🇪",
    visaTypes: [
      {
        name: "EU Blue Card",
        description: "For highly qualified non-EU workers",
        processing: "1-3 months",
        requirements: ["University degree", "Job offer", "Minimum salary threshold"],
      },
      {
        name: "Job Seeker Visa",
        description: "6-month visa to search for employment",
        processing: "4-12 weeks",
        requirements: ["University degree", "Sufficient funds", "Health insurance"],
      },
      {
        name: "Skilled Immigration Act Visa",
        description: "For skilled workers with vocational training",
        processing: "2-4 months",
        requirements: ["Recognized qualification", "Job offer", "German language skills"],
      },
    ],
    popularJobs: [
      "Engineer",
      "IT Specialist",
      "Healthcare Professional",
      "Scientist",
      "Mechanic",
      "Project Manager",
    ],
    averageSalary: "€40,000 - €80,000",
    benefits: [
      "Strong workers' rights",
      "Excellent healthcare",
      "Work-life balance",
      "Free education",
      "Stable economy",
    ],
  },
  russia: {
    title: "Work in Russia",
    flag: "🇷🇺",
    visaTypes: [
      {
        name: "Highly Qualified Specialist (HQS) Visa",
        description: "For professionals with specialized skills",
        processing: "2-3 months",
        requirements: ["High salary", "Employer invitation", "Qualifications"],
      },
      {
        name: "Regular Work Visa",
        description: "For standard employment in Russia",
        processing: "1-2 months",
        requirements: ["Work permit", "Employer invitation", "Migration card"],
      },
    ],
    popularJobs: [
      "IT Specialist",
      "English Teacher",
      "Oil & Gas Professional",
      "Interpreter",
      "Business Consultant",
      "Engineer",
    ],
    averageSalary: "₽50,000 - ₽200,000/month",
    benefits: [
      "Low cost of living",
      "Growing IT sector",
      "Cultural experience",
      "Language opportunity",
      "Career growth",
    ],
  },
};

const Work = () => {
  const { country } = useParams<{ country: string }>();
  const countryKey = country?.toLowerCase() || "canada";
  const data = workData[countryKey] || workData.canada;

  const navigate = useNavigate();
  const handleApply = () => {
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
              Explore work opportunities and visa options
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="p-4 md:p-6 text-center animate-scale-in">
              <DollarSign className="h-8 w-8 md:h-12 md:w-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-base md:text-lg mb-2">Average Salary</h3>
              <p className="text-xl md:text-2xl font-bold text-primary">{data.averageSalary}</p>
            </Card>
            <Card className="p-4 md:p-6 text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <TrendingUp className="h-8 w-8 md:h-12 md:w-12 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-base md:text-lg mb-2">Visa Types</h3>
              <p className="text-xl md:text-2xl font-bold text-secondary">{data.visaTypes.length}+</p>
            </Card>
            <Card className="p-4 md:p-6 text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <Briefcase className="h-8 w-8 md:h-12 md:w-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-base md:text-lg mb-2">Job Sectors</h3>
              <p className="text-xl md:text-2xl font-bold text-accent">{data.popularJobs.length}+</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Visa Types */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Visa Options</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the right work visa for your career goals
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {data.visaTypes.map((visa: any, index: number) => (
              <Card
                key={visa.name}
                className="p-4 md:p-8 hover:shadow-large transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{visa.name}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">{visa.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {visa.requirements.map((req: string) => (
                        <Badge key={req} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                      <span className="text-sm md:text-base text-muted-foreground">{visa.processing}</span>
                    </div>
                    <Button
                    onClick={handleApply}
                     className="w-full bg-gradient-primary hover:opacity-90">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Jobs & Benefits */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Popular Jobs */}
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">In-Demand Jobs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {data.popularJobs.map((job: string, index: number) => (
                  <Card
                    key={job}
                    className="p-4 hover:shadow-medium transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm md:text-base">{job}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Working Benefits</h2>
              <div className="space-y-3 md:space-y-4">
                {data.benefits.map((benefit: string) => (
                  <div key={benefit} className="flex items-start gap-3 p-3 md:p-4 bg-card rounded-lg">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Work;
