import React from "react";

import { FaNodeJs, FaReact } from "react-icons/fa";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <SingleProject
        leftIcon={<FaNodeJs className="icon" />}
        rightIcon={<FaReact className="icon" />}
        subtitle="full stack project"
        title="Job Tracking App"
        githubLink="https://github.com/weiling-chen-dev/jobster"
        liveSiteLink="https://jobster-job-tracking.onrender.com"
        classNameForColor="jobster"
      />
      <SingleProject
        rightIcon={<FaReact className="icon" />}
        subtitle="front-end project"
        title="Cocktail Searching and information"
        githubLink="https://github.com/weiling-chen-dev/cocktailDB"
        liveSiteLink="https://weiling-cocktaildb-practice.netlify.app/"
        classNameForColor="cocktailDB"
      />
    </section>
  );
};

export default Projects;
