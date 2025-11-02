import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/bookconsultation"); // ✅ Use route path, not file path
  };

  const handleContactClick = () => {
    navigate("/contactus");
  };
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* ✅ Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* ✅ Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Your Gateway to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Global Opportunities
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl">
            Expert guidance for studying, working, and settling abroad. We turn
            your international dreams into reality with personalized visa and
            immigration solutions.
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Check Eligibility
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={handleBookClick}
            >
              Book Consultation
            </Button>
          </div>

          {/* ✅ Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-start space-x-3 animate-slide-up bg-background/50 p-4 rounded-lg backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">
                  Expert Counsellors
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Certified migration specialists
                </p>
              </div>
            </div>

            <div
              className="flex items-start space-x-3 animate-slide-up bg-background/50 p-4 rounded-lg backdrop-blur-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">
                  High Success Rate
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  98% visa approval rate
                </p>
              </div>
            </div>

            <div
              className="flex items-start space-x-3 animate-slide-up bg-background/50 p-4 rounded-lg backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">
                  End-to-End Support
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  From application to arrival
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
