import React, { useState } from "react";

const NewBoardForm = () => {
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

  return (
    <form>
      <label htmlFor="boardTitle">Title:</label>
      <input
        name="boardTitle"
        value={formFields.title}
        onChange={onTitleChange}
      />
      <label htmlFor="boardOwner">Owner:</label>
      <input
        name="boardOwner"
        value={formFields.owner}
        onChange={onOwnerChange}
      />
      <button type="button"></button>
    </form>
  );
};

export default NewBoardForm;
