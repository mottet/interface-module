import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectMode,
		editModule, 
		addLesson,
		deleteLesson} from './actions';

class EditModule extends Component {

	constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  	}

	submit() {
		let _moduleName = "";
		let _lessonsList = [];

		for (let i = 0; i < this.form.length ;i++) {
			if(this.form.elements[i].id === "")
				continue;
    		if(this.form.elements[i].id === this.props.id)
        		_moduleName = this.form.elements[i].value ? this.form.elements[i].value : this.form.elements[i].placeholder;
     		else
        		_lessonsList.push({
        			"id": this.form.elements[i].id,
        			"lesson": this.form.elements[i].value ? this.form.elements[i].value : this.form.elements[i].placeholder
        		});
    	}
		this.props.validateEdit(_moduleName, _lessonsList, this.props.id)
		this.props.goBackList(this.props.id)
	}

	render() {
		return (
			<form 
				id="editForm"
				ref={form => this.form = form}
			>
			<div className="HeadList">
				<div>
				<input 
					id={this.props.id}
					type="text"
					className="EditLesson" 
					placeholder={this.props.moduleName}
					form="editForm"
				/>
				</div>
			</div>
			<div>
				{this.props.lessonsList.map(lesson =>
					<div key={lesson.id} className="ListItem">
					<input 
						id={lesson.id}
						key={lesson.id}
						type="text"
						className="EditLesson"
						placeholder={lesson.lesson}
						form="editForm"
					/>
					<button 
						className="EditButton"
						onClick={(e) => {
						e.preventDefault();
						return this.props.deleteLessonClick(lesson.id, this.props.id);
					}}
					>
						X
					</button>
					</div>
				)}
				<div className="ListItem">
					<button 
					className="ReturnButton"
					onClick={(e) => {
						e.preventDefault();
						return this.props.addLessonClick(this.props.id);
					}}
					>
						Add lesson
					</button>
				</div>
				<div className="ListItem">
					<button 
					className="EditButton"
					onClick={() => this.props.goBackList(this.props.id)}
					>
						Cancel
					</button>
					<button 
					className="ValidateButton"
					onClick={this.submit}>
						Validate
					</button>
				</div>
			</div>
			</form>
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
		goBackList: (id) => dispatch(selectMode('LESSON_LIST', id)),
		validateEdit: (moduleName, lessonsList, id) => dispatch(editModule(moduleName, lessonsList, id)),
		addLessonClick: (idModule) => dispatch(addLesson('New lesson', idModule)),
		deleteLessonClick: (idLesson, idModule) => dispatch(deleteLesson(idLesson, idModule))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModule)