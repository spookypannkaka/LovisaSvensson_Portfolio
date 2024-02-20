// components/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import slugify from '../utils/slugify'; // Import the slugify function

function ProjectDetails() {
  let { projectNameSlug } = useParams();
  const project = projects.find(project => slugify(project.name) === projectNameSlug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      {/* Detailed information about the project */}
      <h1>{project.name}</h1>
      {/* More details here */}
    </div>
  );
}

export default ProjectDetails;
