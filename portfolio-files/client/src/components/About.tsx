import { PROFILE_INFO, SECTION_IDS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id={SECTION_IDS.ABOUT} className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="sticky top-32">
              <span className="text-accent-blue font-medium">ABOUT ME</span>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
                Network Security Professional with 4+ Years Experience
              </h2>
              <p className="text-gray-400 mb-6">
                I'm a dedicated network security engineer with extensive experience in designing, deploying, and troubleshooting enterprise-level network infrastructure. My expertise spans across Fortinet, Palo Alto, and Cisco security solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-primary-navy card-glow border-0">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-2">Education</h3>
                    {PROFILE_INFO.education.map((edu, index) => (
                      <p key={index} className="text-gray-400 mb-2">
                        {edu.degree}<br/>{edu.institution}, {edu.year}
                      </p>
                    ))}
                  </CardContent>
                </Card>
                
                <Card className="bg-primary-navy card-glow border-0">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-2">Contact Info</h3>
                    <p className="text-gray-400">Email: {PROFILE_INFO.email}</p>
                    <p className="text-gray-400">Phone: {PROFILE_INFO.phone}</p>
                    <p className="text-gray-400">Location: {PROFILE_INFO.location}</p>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                className="inline-flex items-center px-6 py-3 bg-accent-blue hover:bg-accent-light-blue transition duration-300 rounded-md text-white font-medium"
                asChild
              >
                <a href="#contact">
                  <span>Download Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Card className="bg-primary-navy p-6 rounded-lg mb-8 card-glow border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">Professional Profile</h3>
                <ul className="space-y-3 text-gray-300">
                  {PROFILE_INFO.profile.map((item, index) => (
                    <li key={index} className="flex">
                      <Check className="h-6 w-6 text-tech-green mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-navy p-6 rounded-lg card-glow border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(PROFILE_INFO.expertise).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-tech-green font-medium mb-2">{category}</h4>
                      <ul className="space-y-1 text-gray-300">
                        {skills.map((skill, index) => (
                          <li key={index}>• {skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
