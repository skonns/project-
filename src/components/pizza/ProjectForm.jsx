import React, { useState } from "react";
import Project from "./Project";

const ProjectForm = ({ project: initialProject, onSave, onCancel }) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    ingredients:"",
    price:""

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value } = event.target;

    let updatedValue = value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  const validate = (project) => {
    let errors = { name: "", description: "", ingredients: "", price:"" };

    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name need to be more than 3 character";
    }
    if (project.description.length === 0) {
      errors.name = "Description is required";
    }
    if (project.ingredients.length === 0) {
      errors.name = "Ingredients is required";
    }
    if (project.price.length === 0) {
      errors.name = "Price must be more than 0";
    }

    return errors;
  };

  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.ingredients.length === 0 &&
      errors.price.length === 0 
    );
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name"> Project Name </label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={project.name}
        onChange={handleChange}
      />
      <label htmlFor="description"> Project Description </label>
      <textarea
        name="description"
        placeholder="Enter Description"
        cols="30"
        rows="10"
        value={project.description}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="ingredients"> Project Ingredients </label>
      <input
        type="text"
        name="ingredients"
        placeholder="Enter Ingredients"
        value={project.ingredients}
        onChange={handleChange}
      />
      <label htmlFor="price"> Project Price </label>
      <input
        type="number"
        name="price"
        placeholder="Enter Price"
        value={project.price}
        onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
