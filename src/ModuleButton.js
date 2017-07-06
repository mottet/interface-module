import React, { Component } from 'react'

export default class ModuleButton extends Component {
	constructor(props) {
	    super(props);
    this.handleClickModule = this.handleClickModule.bind(this);
  	}

	handleClickModule() {
		this.props.handleClickModule(this.props.indexModule)
	}

	render() {
		return (
			<button 
			className="ModuleButton"
			onClick={this.handleClickModule}>
				{this.props.nameModule}
			</button>
		);
	}
}