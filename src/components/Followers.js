import React from 'react';

class Followers extends React.Component {
  renderFollowerPanel(key) {
    const follower = this.props.followers[key];

    return <div key={key}>{follower.login}</div>;
  }

  render() {
    return <div>{Object.keys(this.props.followers).map(key => this.renderFollowerPanel(key))}</div>;
  }
}

export default Followers;
