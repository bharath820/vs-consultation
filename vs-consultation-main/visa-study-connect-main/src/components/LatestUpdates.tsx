import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const updates = [
  {
    id: 1,
    title: "Canada Express Entry Draw: 4,750 ITAs Issued",
    excerpt: "Latest Express Entry draw sees CRS score of 496. Find out if you qualify for Canadian PR.",
    date: "2025-01-15",
    category: "Canada",
    categoryColor: "bg-red-500",
  },
  {
    id: 2,
    title: "UK Graduate Visa Extension Announced",
    excerpt: "UK government extends post-study work rights for international graduates to 3 years.",
    date: "2025-01-14",
    category: "United Kingdom",
    categoryColor: "bg-blue-600",
  },
  {
    id: 3,
    title: "Australia Skilled Migration Points Update",
    excerpt: "New points system for skilled migration. Changes effective from March 2025.",
    date: "2025-01-13",
    category: "Australia",
    categoryColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Germany Blue Card Salary Threshold Reduced",
    excerpt: "Lower salary requirements make it easier for skilled workers to obtain German Blue Card.",
    date: "2025-01-12",
    category: "Germany",
    categoryColor: "bg-gray-800",
  },
  {
    id: 5,
    title: "USA H-1B Visa Registration Opens",
    excerpt: "H-1B visa lottery registration period announced for 2025. Key dates and requirements.",
    date: "2025-01-10",
    category: "USA",
    categoryColor: "bg-blue-700",
  },
  {
    id: 6,
    title: "New Scholarship Programs for International Students",
    excerpt: "Over $2 million in scholarships announced for students pursuing education abroad.",
    date: "2025-01-08",
    category: "Education",
    categoryColor: "bg-secondary",
  },
];

const LatestUpdates = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest immigration news and policy changes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <Card
              key={update.id}
              className="p-6 hover:shadow-large transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Badge className={`${update.categoryColor} mb-3`}>
                {update.category}
              </Badge>
              
              <h3 className="text-lg font-bold mb-2 line-clamp-2">
                {update.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {update.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(update.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                
                <Link
                  to={`/updates/${update.id}`}
                  className="flex items-center text-primary hover:text-primary-dark text-sm font-medium transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
