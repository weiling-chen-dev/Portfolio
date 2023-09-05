import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiEqualizer } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
const SingleProject = ({
  leftIcon,
  rightIcon,
  title,
  subtitle,
  githubLink,
  liveSiteLink,
  classNameForColor,
}) => {
  return (
    <article className={classNameForColor}>
      <div className="project__info">
        <h3>{subtitle}</h3>
        <div className="icon-container">
          {leftIcon || null}
          {rightIcon || null}
        </div>
      </div>
      <h1>{title}</h1>
      <div className="project__buttons-container">
        <a href={githubLink} target="__blank" className="project__button">
          <AiFillGithub className="icon" />

          <h3>GitHub</h3>
        </a>
        <a href={liveSiteLink} target="__blank" className="project__button">
          <BiEqualizer className="icon" />
          <h3>Live Site</h3>
        </a>
      </div>
    </article>
  );
};

export default SingleProject;
