import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-darker py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-accent-blue text-2xl font-bold font-poppins tracking-tight">AM</span>
              <span className="text-white font-medium">| Network Security</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Akshatha Mundrathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
