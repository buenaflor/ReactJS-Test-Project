import React, { Component } from 'react';

class Projectitem  extends Component {
  render() {
    return (
      // Only one div at the very top level
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
      </li>
    );
  }
}

export default Projectitem;
