import React, { Component } from 'react';

class Wedget extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Wedget;