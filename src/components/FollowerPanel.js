import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  height: 40px;
  width: 33%;
  min-width: 15rem;
  background-color: #ffffff;
  box-shadow: 0px 5px 15px -3px rgba(8, 39, 70, 0.14);
  margin: 0px auto 5px auto;
  padding: 5px;
  text-align: left;
  display: flex;
  align-items: center;

  img {
    height: 32px;
    width: 32px;
    border-radius: 16px;
    margin: 0px 10px;
  }
`;

const FollowerPanel = ({ username, avatarUrl }) => {
  return (
    <Panel>
      <img src={avatarUrl} alt="avatar" />
      <span>{username}</span>
    </Panel>
  );
};

export default FollowerPanel;