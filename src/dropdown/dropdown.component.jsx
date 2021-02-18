import React from "react";

export const Dropdown = ({ value, handleChange }) => {
  return (
    <form>
      <select value={value} onChange={handleChange}>
        <option value="Grapefruit">Grapefruit</option>
        <option defaultValue="">Apple</option>
        <option value="Coconut">coconut</option>
        <option value="mango">Mango</option>
      </select>
      <input type="submit" value="My choice!" />
    </form>
  );
};

//onSubmit={handleSubmit}
