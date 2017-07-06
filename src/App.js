import React, { Component } from 'react';
import ModuleList from './ModuleList';
import LessonList from './LessonList';
import './App.css';

var data = [
  {
    "moduleName":"Module 1",
    "lessonsList":["Lesson 1.1", "Lesson 1.2", "Lesson 1.3"]
  },
  {
    "moduleName":"Module 2",
    "lessonsList":["Lesson 2.1", "Lesson 2.2"]
  },
  {
    "moduleName":"Module 3",
    "lessonsList":["Lesson 3.1", "Lesson 3.2", "Lesson 3.3", "Lesson 3.4"]
  },
  {
    "moduleName":"Module 4",
    "lessonsList":["Lesson 4.1", "Lesson 4.2", "Lesson 4.3"]
  },
  {
    "moduleName":"Module 5",
    "lessonsList":["Lesson 5.1", "Lesson 5.2", "Lesson 5.3", "Lesson 5.3"]
  }
];

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectModule: -1
    };

    this.handleClickModule = this.handleClickModule.bind(this);
    this.handleReturnListModule = this.handleReturnListModule.bind(this);
  }

  handleClickModule(moduleIndex) {
    this.setState({
      selectModule: moduleIndex
    });
  }

  handleReturnListModule() {
    this.setState({
      selectModule: -1
    });
  }

  render() {
    let list = null;

    if (this.state.selectModule < 0)
      list = <ModuleList 
              modules={data}
              handleClickModule={this.handleClickModule}
              />
    else
      list = <LessonList 
              lessons={data[this.state.selectModule]}
              handleReturn={this.handleReturnListModule}
              />
    
    return (
      <div>
        <div className="App">
          {list}
        </div>
      </div>
    );
  }
}

export default App;
