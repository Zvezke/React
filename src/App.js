import React from "react";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      family: [
        {
          name: "Finnur",
          id: "far",
        },
        {
          name: "Rosa",
          id: "mor",
        },
        {
          name: "Asta",
          id: "største",
        },
        {
          name: "Nord",
          id: "midterste",
        },
        {
          name: "Saga",
          id: "mindste",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.family.map((member) => (
          <h1 key={member.id}>Nej, {member.name}!</h1>
        ))}
      </div>
    );
  }
}
export default App;
