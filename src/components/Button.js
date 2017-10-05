import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff;
  background-color: #19bcc9;
  font-size: 14px;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 5px;
  border: 1px solid transparent;
  margin: 10px 0px;
  height: 37px;
  display: inline-block;

  :hover {
    background-color: #1bc9d7;
  }
`;

const RoundButton = StyledButton.extend`
  border-radius: 500rem;
  overflow: hidden;
  padding: 0px 7px;
`;

const Button = ({ content, onClick, round }) => {
  return round === true ? (
    <RoundButton onClick={onClick}>{content}</RoundButton>
  ) : (
    <StyledButton onClick={onClick}>{content}</StyledButton>
  );
};

export default Button;
