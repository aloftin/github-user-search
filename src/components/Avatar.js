import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

const Avatar = ({ url }) => {
  return <Image className="avatar" src={url} alt="avatar" />;
};

export default Avatar;
