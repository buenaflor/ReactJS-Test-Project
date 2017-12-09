import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

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
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(projects){
    console.log(projects);
  }

  render() {
    return(
      // Only one div at the very top level
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
