import { CERTIFICATIONS, BACKGROUND_IMAGES, SECTION_IDS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

export function Certifications() {
  return (
    <section
      id={SECTION_IDS.CERTIFICATIONS}
      className="section-bg py-20"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGES.CERTIFICATIONS}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-medium">CREDENTIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2">Professional Certifications</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {CERTIFICATIONS.map((cert, idx) => {
            const IconComponent = (LucideIcons as any)[cert.icon] || LucideIcons.Award;
            
            return (
              <Card 
                key={idx} 
                className="bg-primary-navy p-6 rounded-lg shadow-lg flex flex-col items-center cert-badge w-full md:w-80 border-0"
              >
                <CardContent className="flex flex-col items-center p-0">
                  <div className="bg-accent-blue bg-opacity-10 p-4 rounded-full mb-6">
                    <IconComponent className="h-16 w-16 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 mb-4">{cert.subtitle}</p>
                  <div className="text-accent-blue font-medium">{cert.issueDate}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
