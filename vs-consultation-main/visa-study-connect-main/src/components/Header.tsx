import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const countries = ["Canada", "Australia", "UK", "USA", "Germany", "Russia"];
  
  const visaTypes = {
    Canada: ["PR Visa", "Work Visa", "Student Visa", "Express Entry", "PNP", "Business Visa", "Visit Visa", "Digital Nomad Visa"],
    Australia: ["PR Visa", "Work Visa", "Student Visa", "Subclass 462", "Business Visa", "Subclass 189", "TSS Visa", "Visit Visa"],
    UK: ["Student Visa", "Work Visa", "Business Visa", "Visit Visa"],
    USA: ["Student Visa", "Work Visa", "Business Visa", "Visit Visa"],
    Germany: ["Student Visa", "Work Visa", "Business Visa", "Visit Visa"],
    Russia: ["Student Visa", "Work Visa", "Business Visa", "Visit Visa"],
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              VS Consultancy
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Study</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {countries.map((country) => (
                        <Link
                          key={country}
                          to={`/universities/${country.toLowerCase()}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Study in {country}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Discover universities and programs
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {countries.map((country) => (
                        <Link
                          key={country}
                          to={`/work/${country.toLowerCase()}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Work in {country}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Find work opportunities
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Migrate</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {countries.map((country) => (
                        <Link
                          key={country}
                          to={`/migrate/${country.toLowerCase()}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{country}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore migration options
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/visaservices">
                  <Button variant="ghost">Visa Services</Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/coaching">
                  <Button variant="ghost">Test Coaching</Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/whyus">
                  <Button variant="ghost">Why Us</Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link to="/bookconsultation">
              <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <details className="group">
                <summary className="text-sm font-medium hover:text-primary cursor-pointer list-none flex items-center justify-between py-2">
                  Study
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  {countries.map((country) => (
                    <Link 
                      key={country}
                      to={`/universities/${country.toLowerCase()}`} 
                      className="block text-sm text-muted-foreground hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              </details>
              
              <details className="group">
                <summary className="text-sm font-medium hover:text-primary cursor-pointer list-none flex items-center justify-between py-2">
                  Work
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  {countries.map((country) => (
                    <Link 
                      key={country}
                      to={`/work/${country.toLowerCase()}`} 
                      className="block text-sm text-muted-foreground hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              </details>
              
              <details className="group">
                <summary className="text-sm font-medium hover:text-primary cursor-pointer list-none flex items-center justify-between py-2">
                  Migrate
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  {countries.map((country) => (
                    <Link 
                      key={country}
                      to={`/migrate/${country.toLowerCase()}`} 
                      className="block text-sm text-muted-foreground hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              </details>
              
              <Link to="/visa" className="text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Visa Services
              </Link>
              <Link to="/coaching" className="text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Test Coaching
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Why Choose Us
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-primary hover:opacity-90">Book Consultation</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
