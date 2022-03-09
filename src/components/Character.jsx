import React, { Component } from "react";

class Character extends Component {
	state = {};
	render() {
		return (
			<div>
				<h2>{this.props.character}</h2>
			</div>
		);
	}
}

export default Character;
