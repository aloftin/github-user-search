import React from 'react';

class SearchInput extends React.Component {
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
      <input
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

export default SearchInput;
