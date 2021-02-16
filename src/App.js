import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import { Btn } from "./components/btn/btn.components";

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

  // async componentDidMount() {
  // const users = await fetch("https://reqres.in/api/users");
  // const data = await users.json();
  // this.setState({
  // api: data.data,
  // });
  // console.log(this.state.api);
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleClick = (e) => console.log(e);

  render() {
    const { api, searchField } = this.state;
    const filteredUsers = api.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // const filteredUsers = api;
    // console.log(filteredUsers);

    return (
      <div className="App">
        <Btn type="button" handleClick={this.handleClick} />
        <SearchBox
          type="search"
          placeholder="Search Users"
          handleChange={this.handleChange}
        />
        <CardList api={filteredUsers} />
      </div>
    );
  }
}
export default App;
