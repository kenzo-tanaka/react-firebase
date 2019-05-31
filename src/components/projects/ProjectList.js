import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {/* @@ if we have projects, do below */}
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />; // @@ pass individual project
        })}
    </div>
  );
};

export default ProjectList;
