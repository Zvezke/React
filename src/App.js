import React from "react";
// import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import { Dropdown } from "./dropdown/dropdown.component.jsx";
// import { Btn } from "./components/btn/btn.components.jsx.b";

class App extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
      searchField: "",
      number: 47,
      fruit: "Apple",
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

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return { number: prevState.number + 1 };
    });
  };

  handleChange = (e) => {
    this.setState({ fruit: e.target.value });
  };

  handleSubmit = (e) => {
    // console.log(e);
    this.setState({ fruit: e.target.value });
  };

  // this.setState({ number: this.state.number + 1 }, () =>
  // console.log(this.state.number)
  // );
  // console.log(this.state.number);

  render() {
    // const { api, searchField } = this.state;
    // const filteredUsers = api.filter((user) =>
    // user.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    // const filteredUsers = api;
    // console.log(filteredUsers);

    return (
      <div className="App">
        <button onClick={this.handleClick}>Update State</button>
        <SearchBox
          type="search"
          placeholder="Search Users"
          handleChange={this.handleChange}
        />
        <Dropdown value={this.state.fruit} handleChange={this.handleChange} />
        {/* <CardList api={filteredUsers} /> */}
        <h1>{this.state.fruit}</h1>
      </div>
    );
  }
}
export default App;
