import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { count } = this.props;
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit tracker</span>
        <span className="navbar-count">{count}</span>
      </nav>
    );
  }
}

export default Navbar;