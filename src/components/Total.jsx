import React, { Component } from "react";

class Total extends Component {
	state = {};
	render() {
		return (
			<>
				<h2>Total Likes: {this.props.total}</h2>
			</>
		);
	}
}

export default Total;
