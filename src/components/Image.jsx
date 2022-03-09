import React, { Component } from "react";

class Image extends Component {
	state = {};
	render() {
		return (
			<div>
				<img src={this.props.image} alt={this.props.character}></img>
			</div>
		);
	}
}

export default Image;
