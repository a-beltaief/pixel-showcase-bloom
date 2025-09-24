import { useState, useEffect } from "react";
import { portfolioProjects, categories, PortfolioProject } from "../data/portfolio";

export const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filteredProjects, setFilteredProjects] = useState<PortfolioProject[]>(portfolioProjects);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedCategory === "Alle") {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Ausgewählte <span className="text-gradient">Projekte</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Eine Auswahl meiner neuesten Arbeiten. Jedes Projekt wurde mit Liebe zum Detail 
            und dem Fokus auf optimale Benutzererfahrung entwickelt.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transform transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium tracking-tight transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg scale-105'
                  : 'bg-card text-foreground-muted hover:bg-hover hover:text-foreground hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  return (
    <div 
      className={`portfolio-card group transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">
                {project.title.charAt(0)}
              </span>
            </div>
            <span className="text-foreground-muted font-medium">
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="btn-hero">
            Projekt ansehen
            <span className="ml-2">↗</span>
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-foreground-muted mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-accent-muted text-accent text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-hover text-foreground-muted text-sm font-medium rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Project Link */}
        {project.url && (
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent font-medium hover:text-accent-foreground transition-colors duration-300"
          >
            Live ansehen
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </a>
        )}
      </div>
    </div>
  );
};