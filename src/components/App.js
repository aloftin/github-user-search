import React, { Component } from 'react';
import Search from './Search';
import Followers from './Followers';
import Api from '../lib/api';
import AlertMessage from './AlertMessage';
import Button from './Button';
import '../styles/App.css';

const initialState = {
  userId: '',
  followers: [],
  userFound: true,
  hasMoreFollowers: false,
  currentPageNumber: 1,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.searchForUser = this.searchForUser.bind(this);
    this.getFollowersForUser = this.getFollowersForUser.bind(this);
    this.resetState = this.resetState.bind(this);
    this.getNextPageOfFollowers = this.getNextPageOfFollowers.bind(this);
  }

  resetState() {
    this.setState(initialState);
  }

  searchForUser(username) {
    Api.getUser(username)
      .then(response => {
        this.setState({ userId: response.data.id });

        this.getFollowersForUser();
      })
      .catch(error => {
        // TODO: pass error message to renderAlert - i.e. rate limit hit

        this.setState({ userFound: false });
      });
  }

  getFollowersForUser() {
    Api.getPageOfFollowers(this.state.userId, this.state.currentPageNumber).then(response => {
      console.log(response);
      this.setState({ followers: response.data });

      if (response.headers.link) {
        this.setState({ hasMoreFollowers: true });
      } // else this.setState({ hasMoreFollowers: false });
    });
  }

  getNextPageOfFollowers() {
    const currentPageNumber = this.state.currentPageNumber + 1;

    Api.getPageOfFollowers(this.state.userId, currentPageNumber).then(response => {
      const followers = this.state.followers;
      followers.push(...response.data);

      this.setState({ followers, currentPageNumber });
    });
  }

  renderAlert() {
    return !this.state.userFound ? (
      <AlertMessage status="error" message="User not found. Try a different username." />
    ) : (
      <div />
    );
  }

  renderLoadMoreButton() {
    return this.state.hasMoreFollowers ? (
      <Button content="Load more" onClick={this.getNextPageOfFollowers} />
    ) : (
      <div />
    );
  }

  render() {
    return (
      <div className="app">
        <h1>Github User Search</h1>
        <Search searchForUser={this.searchForUser} resetState={this.resetState} />
        {this.renderAlert()}
        <Followers followers={this.state.followers} />
        {this.renderLoadMoreButton()}
      </div>
    );
  }
}

export default App;
