import React, { Component } from 'react';

export default class Lesson extends Component {
	render() {
		return (
			<div className="ListItem">
			<div className="Lesson">
					{this.props.nameLesson}
			</div>
			</div>
		);
	}
}