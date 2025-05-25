import { EXPERIENCES, BACKGROUND_IMAGES, SECTION_IDS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function Experience() {
  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="section-bg py-20"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGES.EXPERIENCE}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-medium">PROFESSIONAL JOURNEY</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="timeline">
            {EXPERIENCES.map((experience, idx) => (
              <div key={idx} className="timeline-item relative pl-10 pb-12">
                <div className="timeline-dot absolute left-0 top-0 w-6 h-6 rounded-full bg-accent-blue flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <Card className="bg-primary-navy p-6 rounded-lg card-glow border-0">
                  <CardContent className="p-0">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-accent-blue">{experience.company}</p>
                      </div>
                      <div className="bg-primary-dark px-3 py-1 rounded text-sm mt-2 sm:mt-0">
                        {experience.period}
                      </div>
                    </div>

                    {experience.responsibilities && (
                      <ul className="space-y-2 text-gray-300">
                        {experience.responsibilities.map((responsibility, respIdx) => (
                          <li key={respIdx} className="flex">
                            <CheckCircle className="h-5 w-5 text-tech-green mr-2 flex-shrink-0 mt-0.5" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {experience.trainingObjectives && (
                      <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Training Objectives:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                          {experience.trainingObjectives.map((objective, objIdx) => (
                            <li key={objIdx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-tech-green mr-2 flex-shrink-0 mt-0.5" />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {experience.fortinetTraining && (
                      <div>
                        <h4 className="text-lg font-medium mb-2">Fortinet Training:</h4>
                        <ul className="space-y-1 text-gray-300">
                          {experience.fortinetTraining.map((training, trainIdx) => (
                            <li key={trainIdx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-tech-green mr-2 flex-shrink-0 mt-0.5" />
                              <span>{training}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
