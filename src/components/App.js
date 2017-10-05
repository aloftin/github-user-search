import React, { Component } from 'react';
import Search from './Search';
import Followers from './Followers';
import UserCard from './UserCard';
import AlertMessage from './AlertMessage';
import Button from './Button';
import Api from '../lib/api';
import '../styles/App.css';

const initialState = {
  user: {},
  followers: [],
  userFound: true,
  hasMoreFollowers: false,
  currentPageNumber: 1,
  errorMessage: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.searchForUser = this.searchForUser.bind(this);
    this.getFollowersForUser = this.getFollowersForUser.bind(this);
    this.resetState = this.resetState.bind(this);
    this.getNextPageOfFollowers = this.getNextPageOfFollowers.bind(this);
    this.checkForNextPageOfFollowers = this.checkForNextPageOfFollowers.bind(this);
  }

  resetState() {
    this.setState(initialState);
  }

  searchForUser(username) {
    Api.getUser(username)
      .then(response => {
        this.setState({ user: response.data });
        this.getFollowersForUser();
      })
      .catch(error => {
        debugger;
        if (error.response.status === 403) {
          this.setState({
            errorMessage: 'API rate limit exceed. Wait a bit then try again.',
          });
        } else {
          this.setState({ userFound: false });
        }
      });
  }

  getFollowersForUser() {
    Api.getPageOfFollowers(this.state.user.id, this.state.currentPageNumber).then(response => {
      this.setState({ followers: response.data });
      this.checkForNextPageOfFollowers(response);
    });
  }

  getNextPageOfFollowers() {
    const currentPageNumber = this.state.currentPageNumber + 1;

    Api.getPageOfFollowers(this.state.user.id, currentPageNumber).then(response => {
      const followers = this.state.followers;
      followers.push(...response.data);

      this.setState({ followers, currentPageNumber });
      this.checkForNextPageOfFollowers(response);
    });
  }

  checkForNextPageOfFollowers(response) {
    if (response.headers.link) {
      const hasNextPage = response.headers.link.search('next') !== -1;

      if (hasNextPage) {
        this.setState({ hasMoreFollowers: true });
      } else {
        this.setState({ hasMoreFollowers: false });
      }
    }
  }

  renderUserCard() {
    const user = this.state.user;
    return user.id ? (
      <UserCard
        username={user.login}
        avatarUrl={user.avatar_url}
        profileUrl={user.html_url}
        realName={user.name}
        bio={user.bio}
        company={user.company}
        located={user.location}
        followersCount={user.followers}
        followingCount={user.following}
        reposCount={user.public_repos}
      />
    ) : (
      <div />
    );
  }

  renderAlert() {
    if (this.state.errorMessage || !this.state.userFound) {
      return !this.state.userFound ? (
        <AlertMessage status="info" message="User not found. Try a different username." />
      ) : (
        <AlertMessage status="error" message={this.state.errorMessage} />
      );
    }
  }

  renderLoadMoreButton() {
    return this.state.hasMoreFollowers ? (
      <Button id="load-more" content="Load more" onClick={this.getNextPageOfFollowers} />
    ) : (
      <div />
    );
  }

  render() {
    return (
      <div className="app">
        <h1>Github User Search</h1>
        <Search searchForUser={this.searchForUser} resetState={this.resetState} />
        <div className="info">
          {this.renderUserCard()}
          {this.renderAlert()}
          <Followers followers={this.state.followers} />
          {this.renderLoadMoreButton()}
        </div>
      </div>
    );
  }
}

export default App;
