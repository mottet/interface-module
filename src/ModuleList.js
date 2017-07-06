import React, { Component } from 'react'
import ModuleButton from './ModuleButton';

export default class ModuleList extends Component {

	constructor(props) {
	    super(props);
    this.handleClickModule = this.handleClickModule.bind(this);
  	}

	handleClickModule(index) {
		this.props.handleClickModule(index)
	}

	render() {
		let indexModule = -1;
		return (
			<div>
			<div className="HeadList">
          	User's modules
        	</div>
			<table className="List">
			<tbody>
				{this.props.modules.map(module =>
					<tr>
					<ModuleButton 
					nameModule={module.moduleName}
					indexModule={++indexModule}
					handleClickModule={this.handleClickModule}
					/>
					</tr>
				)}
			</tbody>
			</table>
			</div>
		);
	}
}