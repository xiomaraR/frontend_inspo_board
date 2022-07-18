import React, { useState } from "react";

const NewCardForm = ({ onAddCardCallback }) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const onMessageChange = (event) => {
    setFormFields({ message: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onAddCardCallback(formFields.message);

    setFormFields({ message: "" });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="cardMessage">Message:</label>
      <input
        name="cardMessage"
        value={formFields.message}
        onChange={onMessageChange}
        maxLength="40"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCardForm;
