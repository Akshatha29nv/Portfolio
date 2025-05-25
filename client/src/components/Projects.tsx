import { useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES, SECTION_IDS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section id={SECTION_IDS.PROJECTS} className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-medium">CASE STUDIES</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2">Recent Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.value}
              className={cn(
                "px-4 py-2 rounded-lg transition duration-300",
                activeFilter === category.value
                  ? "bg-accent-blue text-white"
                  : "bg-primary-navy hover:bg-accent-blue text-white"
              )}
              onClick={() => handleFilterClick(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROJECTS.map((project, idx) => (
            <Card
              key={idx}
              className={cn(
                "project-card bg-primary-navy rounded-lg overflow-hidden card-glow border-0 transition-all duration-400",
                (activeFilter !== "all" && project.category !== activeFilter) ? "hidden-card" : ""
              )}
              data-category={project.category}
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <CategoryBadge category={project.category} />
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs bg-primary-dark px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const getStyles = () => {
    switch (category) {
      case "security":
        return "bg-accent-blue bg-opacity-20 text-accent-blue";
      case "networking":
        return "bg-tech-green bg-opacity-20 text-tech-green";
      case "wireless":
        return "bg-accent-light-blue bg-opacity-20 text-accent-light-blue";
      case "development":
        return "bg-status-warning bg-opacity-20 text-status-warning";
      default:
        return "bg-accent-blue bg-opacity-20 text-accent-blue";
    }
  };

  const getCategoryLabel = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <span className={`${getStyles()} text-xs px-2 py-1 rounded`}>
      {getCategoryLabel()}
    </span>
  );
}
