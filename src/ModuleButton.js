import React, { Component } from 'react'

export default class ModuleButton extends Component {
	render() {
		return (
			<div className="ListItem">
				<button 
				className="ModuleButton"
				onClick={this.props.clickSelect}>
					{this.props.nameModule}
				</button>
				<button 
				className="EditButton"
				onClick={this.props.clickDelete}>
					X
				</button>
			</div>
		);
	}
}