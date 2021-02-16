import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => {
  return <input placeholder={placeholder} onChange={handleChange} />;
};
