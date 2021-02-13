import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { api: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ api: users }))
    );
  }

  render() {
    return (
      <div className="App">
        <CardList api={this.state.api} />
      </div>
    );
  }
}
export default App;
