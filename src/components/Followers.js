import React from 'react';
import FollowerPanel from './FollowerPanel';

class Followers extends React.Component {
  renderFollowerPanel(key) {
    const follower = this.props.followers[key];

    return <FollowerPanel key={key} username={follower.login} avatarUrl={follower.avatar_url} />;
  }

  render() {
    return <div>{Object.keys(this.props.followers).map(key => this.renderFollowerPanel(key))}</div>;
  }
}

export default Followers;
