import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Captain's Log",
      description: t('projects.captainsLog.description'),
      link: "#",
      detailPage: "/projects/captains-log",
      tags: ["Maritime", "GPS", "PWA", "Offline"],
      image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Recipe Pixie",
      description: t('projects.recipePixie.description'),
      link: "https://my-recipe-pixie.lovable.app/?utm_source=lovable-editor",
      detailPage: "/projects/recipe-pixie",
      tags: ["AI", "Web App", "React"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "ContentChef",
      description: t('projects.contentChef.description'),
      link: "#",
      detailPage: "/projects/content-chef",
      tags: ["AI", "Social Media", "Food Content", "SaaS"],
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "SnapQR Share",
      description: t('projects.snapqr.description'),
      link: "#",
      tags: ["Event Tech", "QR Code", "Photo Sharing"],
      image: "/images/snapqr-event.jpg"
    },
    {
      title: "Roblox Games Portfolio",
      description: t('projects.roblox.description'),
      link: "https://www.roblox.com",
      tags: ["Gaming", "Roblox", "Lua"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('projects.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
