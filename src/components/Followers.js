import React from 'react';
import FollowerPanel from './FollowerPanel';

class Followers extends React.Component {
  renderFollowerPanel(key) {
    const follower = this.props.followers[key];
    return (
      <FollowerPanel
        key={key}
        avatarUrl={follower.avatar_url}
        username={follower.login}
        profileUrl={follower.html_url}
      />
    );
  }

  render() {
    if (this.props.followers.length !== 0) {
      return (
        <div>
          <div>Followers:</div>
          <div>{Object.keys(this.props.followers).map(key => this.renderFollowerPanel(key))}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Followers;
