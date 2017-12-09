import React, { Component } from 'react';
import Projectitem from './Projectitem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    // Mapping through Array
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          // Outputing Projectitem component
          <Projectitem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        )
      });
    }
    return (
      // Only one div at the very top level
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
