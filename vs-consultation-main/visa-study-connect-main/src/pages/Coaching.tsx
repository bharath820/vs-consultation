import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, BookOpen, Target, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const coachingPrograms = [
  {
    title: "IELTS Coaching",
    description: "Comprehensive IELTS preparation for academic and general training",
    duration: "8-12 weeks",
    batchSize: "15-20 students",
    features: [
      "Expert trainers with 10+ years experience",
      "Speaking practice sessions",
      "Mock tests every week",
      "Study materials included",
      "Guaranteed band score improvement",
    ],
    icon: BookOpen,
  },
  {
    title: "PTE Coaching",
    description: "Intensive PTE Academic preparation with AI-based practice",
    duration: "6-8 weeks",
    batchSize: "10-15 students",
    features: [
      "Computer-based test training",
      "Real exam simulation",
      "Speaking & writing feedback",
      "Unlimited online practice",
      "Score prediction system",
    ],
    icon: Target,
  },
  {
    title: "TOEFL Coaching",
    description: "Complete TOEFL iBT preparation for USA universities",
    duration: "8-10 weeks",
    batchSize: "12-18 students",
    features: [
      "All 4 sections covered",
      "Native speaker sessions",
      "Weekly progress tracking",
      "Official practice tests",
      "Score improvement guarantee",
    ],
    icon: Award,
  },
  {
    title: "GRE/GMAT Coaching",
    description: "Specialized coaching for graduate school admissions",
    duration: "10-14 weeks",
    batchSize: "8-12 students",
    features: [
      "Quantitative & verbal training",
      "Analytical writing guidance",
      "Strategy sessions",
      "Personalized study plans",
      "Top scorer mentorship",
    ],
    icon: Users,
  },
];

const successStats = [
  { number: "5000+", label: "Students Trained" },
  { number: "95%", label: "Success Rate" },
  { number: "8.0", label: "Average IELTS Band" },
  { number: "15+", label: "Years Experience" },
];

const Coaching = () => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate("/contactus");
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Test Preparation Coaching
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Ace your IELTS, PTE, TOEFL, GRE, or GMAT with expert guidance and proven strategies
            </p>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {successStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coaching Programs</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of expert-led test preparation programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {coachingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.title}
                  className="p-6 md:p-8 hover:shadow-large transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{program.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4">
                        {program.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs md:text-sm">
                      <Clock className="h-3 w-3 md:h-4 md:w-4" />
                      {program.duration}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs md:text-sm">
                      <Users className="h-3 w-3 md:h-4 md:w-4" />
                      {program.batchSize}
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                  onClick={handleBookClick}
                  className="w-full bg-gradient-primary hover:opacity-90">
                    Enroll Now
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Coaching */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Coaching?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Expert Trainers",
                description: "Certified professionals with extensive teaching experience",
              },
              {
                title: "Flexible Batches",
                description: "Weekend, weekday, and online batches available",
              },
              {
                title: "Study Material",
                description: "Comprehensive books, practice tests, and online resources",
              },
              {
                title: "Mock Tests",
                description: "Regular full-length tests with detailed feedback",
              },
              {
                title: "Personalized Attention",
                description: "Small batch sizes for individual focus",
              },
              {
                title: "Proven Results",
                description: "Track record of high scores and successful admissions",
              },
            ].map((benefit, index) => (
              <Card
                key={benefit.title}
                className="p-6 text-center hover:shadow-medium transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Coaching;
