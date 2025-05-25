import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import { NAV_LINKS, SECTION_IDS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll(100);
  const activeSection = useSectionVisibility(Object.values(SECTION_IDS));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      id="navbar" 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-primary-darker" : "bg-primary-dark bg-opacity-90 navbar-fixed"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-accent-blue text-2xl font-bold font-poppins tracking-tight">AM</span>
            <span className="text-white font-medium hidden sm:inline-block">| Network Security</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={cn(
                  "transition duration-300",
                  activeSection === link.href.substring(1) 
                    ? "text-accent-blue" 
                    : "text-gray-300 hover:text-accent-blue"
                )}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-md bg-accent-blue text-white hover:bg-accent-light-blue transition duration-300"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn("md:hidden pb-4", mobileMenuOpen ? "block" : "hidden")}>
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={cn(
                  "transition duration-300 py-2",
                  activeSection === link.href.substring(1) 
                    ? "text-accent-blue" 
                    : "text-gray-300 hover:text-accent-blue"
                )}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-md bg-accent-blue text-white hover:bg-accent-light-blue transition duration-300 inline-block mt-2"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
