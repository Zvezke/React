import React from "react";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { family: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ family: users }))
    );
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
