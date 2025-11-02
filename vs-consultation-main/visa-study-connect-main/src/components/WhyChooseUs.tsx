import { Card } from "@/components/ui/card";
import { Award, Users, Globe, HeadphonesIcon, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Counsellors",
    description: "Certified immigration consultants with years of experience and high success rates",
  },
  {
    icon: Users,
    title: "10,000+ Happy Clients",
    description: "Successfully helped thousands achieve their dreams of studying and working abroad",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Partnerships with universities and employers across 30+ countries worldwide",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries and concerns",
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    description: "Industry-leading visa approval rate backed by meticulous application preparation",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "No hidden fees, clear timelines, and honest guidance throughout your journey",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Why Choose VS Consultancy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for global education and career opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-large transition-all duration-300 animate-slide-up border-2 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
