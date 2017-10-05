import React from 'react';
import styled from 'styled-components';
import searchIcon from '../images/search.svg';

const Input = styled.input`
  height: 15px;
  width: 60%;
  border: solid 1px #d8e3ea;
  color: #7a7a86;
  font-size: 16px;
  padding: 10px;
  border-radius: 25px;
  margin: 0px 5px 20px 0px;
  padding-left: 35px;
  background: url(${searchIcon}) no-repeat scroll 7px 7px;
  background-size: 22px;
  display: inline-block;

  ::placeholder {
    color: #d8e3ea;
  }
`;

const SearchInput = ({ value, onChange, onKeyPress }) => {
  return (
    <Input
      autoFocus
      name="searchText"
      type="text"
      placeholder="Search for users..."
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default SearchInput;
