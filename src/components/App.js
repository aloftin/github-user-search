import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Followers from "./Followers";
import Api from "../lib/api";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: [],
      userFound: true
    };

    this.searchForUser = this.searchForUser.bind(this);
    this.resetFollowers = this.resetFollowers.bind(this);
  }

  searchForUser(username) {
    Api.getUser(username)
      .then(response => {
        Api.getFollowers(username).then(response => {
          debugger;
          this.setState({ followers: response.data });
        });
      })
      .catch(error => {
        this.setState({ userFound: false });
      });
  }

  resetFollowers() {
    this.setState({ followers: [] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <SearchInput
          searchForUser={this.searchForUser}
          resetFollowers={this.resetFollowers}
        />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
