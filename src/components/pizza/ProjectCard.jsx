import React from "react";

const FormatDescription = (description) => {
  return description.substring(0, 50) + "...";
};
const ProjectCard = (props) => {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card">
      <img src={project.image} alt={project.name} />
      <section className="section light ">
        <h3 className="strong">
          <strong>{project.name}</strong>
        </h3>
        <p>{FormatDescription(project.description)}</p>
        <p>Ingredients : {project.ingredients}</p>
        <p>Price : {project.price}</p>
        <button className="bordered" onClick={() => handleEditClick(project)}>
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
};

export default ProjectCard;
