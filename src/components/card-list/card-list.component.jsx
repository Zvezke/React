import React from "react";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.api.map((user) => (
        <h1 key={user.id}>Nej, {user.name}!</h1>
      ))}
    </div>
  );
};
