import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModuleButton from './ModuleButton';
import {selectMode, addModule, deleteModule} from './actions';

class ModuleList extends Component {
	render() {
		return (
			<div>
			<div className="HeadList">
          	User's modules
        	</div>
			<div className="List">
				{this.props.moduleList.map(module =>
					<ModuleButton 
					key={module.id}
					nameModule={module.moduleName}
					clickSelect={() => this.props.selectMode(module.id)}
					clickDelete={() => this.props.deleteModule(module.id)}
					/>
				)}
			</div>
			<div className="ListItem">
				<button 
				className="ReturnButton"
				onClick={this.props.addModule}
				>
					Add
				</button>
			</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { 
    moduleList: state.moduleList,
    selectModule: state.selectModule }
}

function mapDispatchToProps(dispatch) {
	return {
		selectMode: (id) => dispatch(selectMode("LESSON_LIST", id)),
		deleteModule: (id) => dispatch(deleteModule(id)),
		addModule: () => dispatch(addModule("New Module"))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleList)