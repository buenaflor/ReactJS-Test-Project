import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {
  // Declaring states called projects in our main app component
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  // Lifecycle method, it fires off everytime the component is rerendered
  componentWillMount(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects =this.state.projects;
    let index = projects.findIndex(x => x.id == id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return(
      // Only one div at the very top level
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
