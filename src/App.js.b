import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ api: users }))
    );
  }

  render() {
    const { api, searchField } = this.state;
    const filteredUsers = api.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          type="search"
          placeholder="Search user"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <CardList api={filteredUsers} />
      </div>
    );
  }
}
export default App;
