import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Followers from './Followers';
import Api from '../lib/api';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: [],
      userFound: true,
      hasMoreFollowers: false,
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

          if (response.headers.link) {
            this.setState({ hasMoreFollowers: true });
          }
        });
      })
      .catch(error => {
        this.setState({ userFound: false });
      });
  }

  resetFollowers() {
    this.setState({ followers: [], hasMoreFollowers: false });
  }

  renderLoadMoreButton() {
    return this.state.hasMoreFollowers ? <button>Load more</button> : <div />;
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Search</h1>
        <SearchInput searchForUser={this.searchForUser} resetFollowers={this.resetFollowers} />
        <Followers followers={this.state.followers} />
        {this.renderLoadMoreButton()}
      </div>
    );
  }
}

export default App;
