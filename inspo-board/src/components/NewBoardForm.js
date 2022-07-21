import React, { useState } from "react";
import "./NewBoardForm.css";
import PropTypes from "prop-types";

const NewBoardForm = ({ onAddBoardCallback }) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (event) => {
    setFormFields({ ...formFields, title: event.target.value });
  };

  const onOwnerChange = (event) => {
    setFormFields({ ...formFields, owner: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onAddBoardCallback(formFields.title, formFields.owner);

    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <form className="form-box" onSubmit={onFormSubmit}>
      <label htmlFor="boardTitle">Title:</label>
      <input
        name="boardTitle"
        value={formFields.title}
        onChange={onTitleChange}
        required
      />
      <label htmlFor="boardOwner">Owner:</label>
      <input
        name="boardOwner"
        value={formFields.owner}
        onChange={onOwnerChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

NewBoardForm.propTypes = {
  onAddBoardCallback: PropTypes.func.isRequired,
};
export default NewBoardForm;
