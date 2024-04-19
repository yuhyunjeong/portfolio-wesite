import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Weather app",
    description: "weather application",
    image: "/images/projects/weatherapp_1.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/weather-app",
    previewUrl: "https://yuhyunjeong.github.io/weather-app/",
  },
  {
    id: 2,
    title: "Todolist app",
    description: "Todo list application",
    image: "/images/projects/todolist_3.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/ToDo-list",
    previewUrl: "https://yuhyunjeong.github.io/ToDo-list/",
  },
  {
    id: 3,
    title: "Space shooting game",
    description: "mini space shooting game",
    image: "/images/projects/shooting_game.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/shooting-game",
    previewUrl: "https://stunning-fudge-a130bb.netlify.app",
  },
  {
    id: 4,
    title: "Calendar",
    description: "calendar",
    image: "/images/projects/calendar_2.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/calendar",
    previewUrl: "https://yuhyunjeong.github.io/calendar/",
  },
];

const ProjectsSection = ({ imgUrl, title, description }) => {
  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white m-8">
        My Projects
      </h2>
      <div>
        {PROJECT_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
