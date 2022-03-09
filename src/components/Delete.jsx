import React, { Component } from "react";

class Delete extends Component {
	state = {};

	render() {
		return (
			<div>
				<button onClick={() => this.props.delete(this.props.index)}>
					Delete
				</button>
			</div>
		);
	}
}

export default Delete;
