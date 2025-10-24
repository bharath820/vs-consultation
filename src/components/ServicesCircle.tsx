import { GraduationCap, Briefcase, Building2, Plane, Globe, FileText } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Visa",
    description: "Expert guidance for international education",
    color: "bg-primary",
    delay: 0,
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    description: "Career opportunities worldwide",
    color: "bg-secondary",
    delay: 3.33,
  },
  {
    icon: Building2,
    title: "Business Visa",
    description: "Expand your business globally",
    color: "bg-accent",
    delay: 6.66,
  },
  {
    icon: Plane,
    title: "Visit Visa",
    description: "Travel and explore new destinations",
    color: "bg-primary-light",
    delay: 10,
  },
  {
    icon: Globe,
    title: "PR Visa",
    description: "Permanent residency solutions",
    color: "bg-secondary",
    delay: 13.33,
  },
  {
    icon: FileText,
    title: "Document Help",
    description: "Complete documentation support",
    color: "bg-accent",
    delay: 16.66,
  },
];

const ServicesCircle = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive visa and immigration services for all your needs
          </p>
        </div>

       {/* Desktop Circular Layout */}
<div className="hidden lg:block relative h-[600px] flex items-center justify-center">
  {/* Center Logo/Text */}
  <div className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center justify-center"
       style={{ transform: "translate(-50%, -50%)" }}>
    <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-large">
      <span className="text-2xl font-bold text-primary-foreground">VS</span>
    </div>
    <p className="mt-4 font-semibold text-lg">Your Global Partner</p>
  </div>

  {/* Orbiting Services */}
  {services.map((service, index) => {
    const Icon = service.icon;
    const angle = (index * 60) * (Math.PI / 180);
    const radius = 250;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return (
      <div
        key={service.title}
        className="absolute animate-float"
        style={{
          left: `calc(50% + ${x}px - 48px)`,
          top: `calc(50% + ${y}px - 48px)`,
          animationDelay: `${service.delay}s`,
        }}
      >
        <div className="group cursor-pointer">
          <div
            className={`w-24 h-24 rounded-full ${service.color} flex items-center justify-center shadow-medium transition-transform hover:scale-110 hover:shadow-large`}
          >
            <Icon className="h-10 w-10 text-white" />
          </div>
          <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="font-semibold text-sm">{service.title}</p>
            <p className="text-xs text-muted-foreground max-w-[120px]">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>


        {/* Mobile/Tablet Grid Layout */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-card hover:shadow-medium transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${service.color} flex items-center justify-center shadow-soft mb-3 md:mb-4`}>
                  <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <p className="font-semibold text-sm md:text-base mb-1 md:mb-2">{service.title}</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
