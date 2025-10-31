import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Recipe Pixie",
      description: "AI-powered recipe discovery and meal planning app. Transform the way you cook with intelligent recipe suggestions and personalized meal plans.",
      link: "https://recipepixie.app",
      tags: ["AI", "Web App", "React"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Roblox Games Portfolio",
      description: "Collection of immersive Roblox games featuring creative gameplay mechanics and engaging multiplayer experiences.",
      link: "https://www.roblox.com",
      tags: ["Gaming", "Roblox", "Lua"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest creations across web development and gaming
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
