import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';

const Panel = styled.div`
  display: inline-block;
  width: 104px;
  background-color: #ffffff;
  color: #082746;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -3px rgba(8, 39, 70, 0.14);
  margin: 3px;
  padding: 7px 5px 5px 5px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  backface-visibility: hidden;
  transform: translateZ(0);

  :hover,
  :focus,
  :active {
    transform: scale(1.1);
    text-decoration: none;
  }

  .username {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const FollowerPanel = ({ avatarUrl, username, profileUrl }) => {
  return (
    <a href={profileUrl} title={username}>
      <Panel>
        <Avatar url={avatarUrl} />
        <div className="username">{username}</div>
      </Panel>
    </a>
  );
};

export default FollowerPanel;
