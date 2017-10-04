import React from 'react';
import styled from 'styled-components';
import searchIcon from '../images/search.svg';

const Input = styled.input`
  height: 15px;
  width: 33%;
  min-width: 15rem;
  border: solid 1px #d8e3ea;
  color: #7a7a86;
  font-size: 16px;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 20px;
  padding-left: 35px;
  background: url(${searchIcon}) no-repeat scroll 7px 7px;
  background-size: 22px;

  ::placeholder {
    color: #d8e3ea;
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    this.props.resetFollowers();
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.searchForUser(this.state.searchText);
    }
  };

  render() {
    return (
      <Input
        autoFocus
        name="searchText"
        type="text"
        placeholder="Search for users..."
        value={this.state.searchText}
        onChange={this.handleInputChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default Search;
