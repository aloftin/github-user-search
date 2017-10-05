import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';

const Profile = styled.div`
  background-color: #ffffff;
  margin: 0px auto 10px auto;
  border-radius: 5px;
  overflow: hidden;
  padding: 10px;
  text-align: left;

  .avatar-name {
    display: flex;
    align-items: center;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    backface-visibility: hidden;
    transform: translateZ(0);
  }

  .left-side {
    display: inline-block;
    width: 58%;
    text-align: left;
  }

  .right-side {
    display: inline-block;
    width: 40%;
    text-align: left;
    float: right;
    whitespace: nowrap;
  }

  .bio {
    color: #7a7a86;
    font-size: 14px;
  }

  span {
    color: #19bcc9;
  }

  @media (max-width: 430px) {
    .left-side {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
    .right-side {
      display: block;
      width: 100%;
      float: none;
      margin: auto;
    }
  }
`;

const UserCard = props => {
  return (
    <Profile>
      <div className="avatar-name">
        <Avatar url={props.avatarUrl} />
        <a href={props.profileUrl}>{props.username}</a>
      </div>
      <div className="left-side">
        <div>{props.realName}</div>
        <div className="bio">{props.bio}</div>
        <div>{props.company}</div>
        <div>{props.located}</div>
      </div>
      <div className="right-side">
        <div>
          Followers: <span>{props.followersCount}</span>
        </div>
        <div>
          Following: <span>{props.followingCount}</span>
        </div>
        <div>
          Repositories: <span>{props.reposCount}</span>
        </div>
      </div>
    </Profile>
  );
};

export default UserCard;
