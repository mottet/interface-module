import React, { Component } from 'react'
import Lesson from './Lesson';

export default class LessonList extends Component {
	constructor(props) {
	    super(props);
    	this.handleReturn = this.handleReturn.bind(this);
  	}

	handleReturn(index) {
		this.props.handleReturn()
	}

	render() {
		return (
			<div>
			<div className="HeadList">
				{this.props.lessons.moduleName}
			</div>
			<table className="List">
			<tbody>
				{this.props.lessons.lessonsList.map(lesson =>
					<tr>
					<Lesson nameLesson={lesson}/>
					</tr>
				)}
			</tbody>
			</table>
			<div>
			<button 
			className="ModuleButton"
			onClick={this.handleReturn}>
				Return
			</button>
			</div>
			</div>
		);
	}
}