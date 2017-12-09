import React, { Component } from 'react';
import Projectitem from './Projectitem';

class Projects extends Component {
  render() {
    let projectItems;
    // Mapping through Array
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          // Outputing Projectitem component
          <Projectitem key={project.title} project={project} />
        )
      });
    }
    return (
      // Only one div at the very top level
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
