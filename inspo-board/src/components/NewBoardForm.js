import React, { useState } from "react";
import "./NewBoardForm.css";

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
    <form onSubmit={onFormSubmit}>
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

export default NewBoardForm;