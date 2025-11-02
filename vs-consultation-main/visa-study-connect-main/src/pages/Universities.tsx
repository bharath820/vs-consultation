import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

const universities = {
  uk: [
    { id: 1, name: "Coventry University", country: "United Kingdom", location: "Coventry", ranking: "Top 15 Modern University" },
    { id: 2, name: "Sheffield Hallam University", country: "United Kingdom", location: "Sheffield", ranking: "Top 50 UK University" },
    { id: 3, name: "University of Greenwich", country: "United Kingdom", location: "London", ranking: "Top 100 UK University" },
    { id: 4, name: "University of East London", country: "United Kingdom", location: "London", ranking: "Modern University" },
    { id: 5, name: "Teesside University", country: "United Kingdom", location: "Middlesbrough", ranking: "Top Modern University" },
    { id: 6, name: "University of Sunderland", country: "United Kingdom", location: "Sunderland", ranking: "Modern University" },
    { id: 7, name: "University of Hertfordshire", country: "United Kingdom", location: "Hatfield", ranking: "Top 100 UK University" },
    { id: 8, name: "Northumbria University", country: "United Kingdom", location: "Newcastle", ranking: "Top 50 UK University" },
    { id: 9, name: "Queen Mary University of London", country: "United Kingdom", location: "London", ranking: "Russell Group - Top 20" },
    { id: 10, name: "University of Portsmouth", country: "United Kingdom", location: "Portsmouth", ranking: "Top 100 UK University" },
  ],
  canada: [
    { id: 1, name: "University of Toronto", country: "Canada", location: "Toronto, ON", ranking: "Top 1 in Canada" },
    { id: 2, name: "University of British Columbia", country: "Canada", location: "Vancouver, BC", ranking: "Top 3 in Canada" },
    { id: 3, name: "McGill University", country: "Canada", location: "Montreal, QC", ranking: "Top 3 in Canada" },
    { id: 4, name: "University of Alberta", country: "Canada", location: "Edmonton, AB", ranking: "Top 5 in Canada" },
    { id: 5, name: "McMaster University", country: "Canada", location: "Hamilton, ON", ranking: "Top 10 in Canada" },
  ],
  australia: [
    { id: 1, name: "University of Melbourne", country: "Australia", location: "Melbourne, VIC", ranking: "Top 1 in Australia" },
    { id: 2, name: "Australian National University", country: "Australia", location: "Canberra, ACT", ranking: "Top 3 in Australia" },
    { id: 3, name: "University of Sydney", country: "Australia", location: "Sydney, NSW", ranking: "Top 3 in Australia" },
    { id: 4, name: "University of Queensland", country: "Australia", location: "Brisbane, QLD", ranking: "Top 5 in Australia" },
    { id: 5, name: "Monash University", country: "Australia", location: "Melbourne, VIC", ranking: "Top 10 in Australia" },
  ],
  usa: [
    { id: 1, name: "Harvard University", country: "USA", location: "Cambridge, MA", ranking: "Ivy League - Top 5" },
    { id: 2, name: "Stanford University", country: "USA", location: "Stanford, CA", ranking: "Top 5 in USA" },
    { id: 3, name: "MIT", country: "USA", location: "Cambridge, MA", ranking: "Top 5 in USA" },
    { id: 4, name: "University of California, Berkeley", country: "USA", location: "Berkeley, CA", ranking: "Top 10 in USA" },
    { id: 5, name: "Columbia University", country: "USA", location: "New York, NY", ranking: "Ivy League" },
  ],
  germany: [
    { id: 1, name: "Technical University of Munich", country: "Germany", location: "Munich", ranking: "Top 1 in Germany" },
    { id: 2, name: "Ludwig Maximilian University", country: "Germany", location: "Munich", ranking: "Top 3 in Germany" },
    { id: 3, name: "Heidelberg University", country: "Germany", location: "Heidelberg", ranking: "Top 3 in Germany" },
    { id: 4, name: "Humboldt University of Berlin", country: "Germany", location: "Berlin", ranking: "Top 10 in Germany" },
    { id: 5, name: "RWTH Aachen University", country: "Germany", location: "Aachen", ranking: "Top 5 in Germany" },
  ],
  russia: [
    { id: 1, name: "Moscow State University", country: "Russia", location: "Moscow", ranking: "Top 1 in Russia" },
    { id: 2, name: "Saint Petersburg State University", country: "Russia", location: "Saint Petersburg", ranking: "Top 3 in Russia" },
    { id: 3, name: "Novosibirsk State University", country: "Russia", location: "Novosibirsk", ranking: "Top 5 in Russia" },
    { id: 4, name: "Bauman Moscow State Technical University", country: "Russia", location: "Moscow", ranking: "Top Technical University" },
    { id: 5, name: "Higher School of Economics", country: "Russia", location: "Moscow", ranking: "Top Economics University" },
  ],
};

const Universities = () => {
  const { country } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const countryKey = country?.toLowerCase() || "uk";
  const universityList = universities[countryKey] || universities.uk;

  const filteredUniversities = universityList.filter(
    (uni) =>
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const countryNames = {
    uk: "United Kingdom",
    canada: "Canada",
    australia: "Australia",
    usa: "United States",
    germany: "Germany",
    russia: "Russia",
  };

  // ✅ Correct Unicode emoji flags
  const countryFlags = {
    uk: "🇬🇧",
    canada: "🇨🇦",
    australia: "🇦🇺",
    usa: "🇺🇸",
    germany: "🇩🇪",
    russia: "🇷🇺",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 bg-gradient-primary text-white text-center">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
              <span className="text-5xl">{countryFlags[countryKey]}</span>
              Universities in {countryNames[countryKey]}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore top-ranked universities and institutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and country buttons */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search universities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {Object.keys(universities).map((key) => (
                  <Link key={key} to={`/universities/${key}`}>
                    <Button
                      variant={countryKey === key ? "default" : "outline"}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <span>{countryFlags[key]}</span>
                      {countryNames[key]}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Universities grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni, index) => (
              <Card
                key={uni.id}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                  <Badge variant="secondary" className="mb-2">
                    {uni.ranking}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {uni.location}
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>

          {filteredUniversities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No universities found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
