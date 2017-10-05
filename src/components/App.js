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
  currentPageNumber: 0,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.searchForUser = this.searchForUser.bind(this);
    this.resetState = this.resetState.bind(this);
    this.getNextPageOfFollowers = this.getNextPageOfFollowers.bind(this);
  }

  searchForUser(username) {
    Api.getUser(username)
      .then(response => {
        this.setState({ userId: response.data.id });

        Api.getPageOfFollowers(this.state.userId, this.state.currentPageNumber).then(response => {
          this.setState({ followers: response.data });

          if (response.headers.link) {
            const currentPageNumber = this.state.currentPageNumber + 1;
            this.setState({ hasMoreFollowers: true, currentPageNumber });
          }
        });
      })
      .catch(error => {
        this.setState({ userFound: false });
      });
  }

  resetState() {
    this.setState(initialState);
  }

  getNextPageOfFollowers() {
    Api.getPageOfFollowers(this.state.userId, this.state.currentPageNumber).then(response => {
      const currentPageNumber = this.state.currentPageNumber + 1;

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
