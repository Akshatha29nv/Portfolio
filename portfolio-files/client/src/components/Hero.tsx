import { PROFILE_INFO, BACKGROUND_IMAGES, SECTION_IDS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id={SECTION_IDS.HOME}
      className="section-bg h-screen flex items-center" 
      style={{ backgroundImage: `url('${BACKGROUND_IMAGES.HERO}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-accent-blue font-code text-lg mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-4">{PROFILE_INFO.name}</h1>
          <h2 className="text-xl md:text-3xl font-medium text-gray-300 mb-6">{PROFILE_INFO.title}</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            Specializing in enterprise network infrastructure with expertise in Fortinet, Cisco, and Palo Alto security solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-6 py-3 bg-accent-blue hover:bg-accent-light-blue transition duration-300 rounded-md text-white font-medium"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-3 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition duration-300 rounded-md font-medium"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
