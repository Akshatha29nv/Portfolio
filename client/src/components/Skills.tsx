import { useState, useEffect } from "react";
import { SKILL_CATEGORIES, ADDITIONAL_SKILLS, SECTION_IDS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

export function Skills() {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById(SECTION_IDS.SKILLS);
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setSkillsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id={SECTION_IDS.SKILLS} className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-medium">TECHNICAL EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2">Skills & Competencies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <Card key={catIdx} className="bg-primary-navy p-6 rounded-lg mb-8 card-glow border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">{category.name}</h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`skill-bar h-full ${category.color} rounded-full`}
                          style={{
                            width: skillsVisible ? `${skill.percentage}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <Card className="bg-primary-navy p-6 rounded-lg card-glow border-0">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-6">Additional Technical Skills</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {ADDITIONAL_SKILLS.map((skill, idx) => {
                  const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Server;
                  
                  return (
                    <div key={idx} className="bg-primary-dark p-3 rounded-lg text-center">
                      <div className="mb-2 text-accent-blue">
                        <IconComponent className="h-8 w-8 mx-auto" />
                      </div>
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
