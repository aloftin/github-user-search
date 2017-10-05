import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    this.props.resetState();
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.searchForUser(this.state.searchText);
    }
  };

  handleButtonClick = e => {
    e.preventDefault();

    this.props.searchForUser(this.state.searchText);
  };

  render() {
    return (
      <div>
        <SearchInput
          value={this.state.searchText}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <Button round content="Go!" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default Search;
