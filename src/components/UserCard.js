import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';

const Profile = styled.div`
  background-color: #ffffff;
  margin: 0px auto 10px auto;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -3px rgba(8, 39, 70, 0.14);
  overflow: hidden;
  padding: 15px;
  text-align: left;

  .top {
    margin-bottom: 5px;
    text-align: center;
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
    white-space: nowrap;
  }

  .bio {
    color: #7a7a86;
    font-size: 13px;
  }

  span {
    color: #19bcc9;
  }

  @media (max-width: 430px) {
    .top {
      display: table;
      margin: auto;
    }

    .left-side {
      display: block;
      text-align: center;
      margin: 0px auto 10px auto;
    }

    .right-side {
      display: block;
      float: none;
      margin: auto;
    }
  }
`;

const UserCard = props => {
  return (
    <Profile>
      <div className="top">
        <Avatar url={props.avatarUrl} />
        <div>
          <a href={props.profileUrl}>{props.username}</a>
        </div>
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
