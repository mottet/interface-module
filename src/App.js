import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModuleList from './ModuleList';
import LessonList from './LessonList';
import EditModule from './EditModule';
import './App.css';

class App extends Component {
  selectMode() {
    switch (this.props.mode) {
      case 'MODULE_LIST':
        return <ModuleList />
      case 'LESSON_LIST':
        return <LessonList />
      case 'EDIT_MODE':
        return <EditModule />
      default:
        return <ModuleList />
    }
  }

  render() {
    console.log(this.props.mode);
    let list = this.selectMode();
    return (
      <div>
        <div className="App">
          {list}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    mode: state.selectMode.mode }
}

export default connect(mapStateToProps)(App)
