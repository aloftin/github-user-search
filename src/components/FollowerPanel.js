import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';

const Panel = styled.div`
  height: 40px;
  min-width: 15rem;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -3px rgba(8, 39, 70, 0.14);
  margin: 0px auto 5px auto;
  padding: 5px;
  text-align: left;
  display: flex;
  align-items: center;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  backface-visibility: hidden;
  transform: translateZ(0);

  :hover,
  :focus,
  :active {
    transform: scale(1.1);
  }
`;

const FollowerPanel = ({ username, avatarUrl }) => {
  return (
    <Panel>
      <Avatar url={avatarUrl} />
      <span>{username}</span>
    </Panel>
  );
};

export default FollowerPanel;
