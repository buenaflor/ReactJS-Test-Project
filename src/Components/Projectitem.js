import React, { Component } from 'react';

class Projectitem  extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      // Only one div at the very top level
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</a>
      </li>
    );
  }
}

export default Projectitem;
