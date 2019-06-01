import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {/* @@ if we have projects, do below */}
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          ); // @@ pass individual project
        })}
    </div>
  );
};

export default ProjectList;
