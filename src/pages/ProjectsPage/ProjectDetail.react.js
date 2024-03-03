import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  let { projectId } = useParams();

  // Here you would fetch the project data based on the projectId
  // For now, let's just display the projectId
  return (
    <div>
      <h2>Project Details</h2>
      <p>Displaying details for project ID: {projectId}</p>
      {/* Project details go here */}
    </div>
  );
}

export default ProjectDetail;