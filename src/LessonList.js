import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lesson from './Lesson';
import {selectMode} from './actions';

class LessonList extends Component {
	render() {
		return (
			<div>
			<div className="HeadList">
				{this.props.moduleName}
			</div>
			<div className="List">
				{this.props.lessonsList.map(lesson =>
					<Lesson key={lesson.id} nameLesson={lesson.lesson}/>
				)}
				<div className="ListItem">
				<button 
				className="EditButton"
				onClick={() => this.props.edit(this.props.id)}>
					Edit
				</button>
				<button 
				className="ReturnButton"
				onClick={this.props.return}>
					Return
				</button>
				</div>
			</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	let indexModule = state.moduleList.findIndex(
		(val) => val.id === state.selectMode.selectModule)
  return {
  	id: state.selectMode.selectModule,
    moduleName: state.moduleList[indexModule].moduleName,
    lessonsList: state.moduleList[indexModule].lessonsList }
}

function mapDispatchToProps(dispatch) {
	return {
		edit: (id) => dispatch(selectMode('EDIT_MODE', id)),
		return: () => dispatch(selectMode('MODULE_LIST'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonList)