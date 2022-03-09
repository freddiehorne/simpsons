import React, { Component } from "react";
import Like from "./Like";

class Quote extends Component {
	state = {};
	render() {
		return (
			<div>
				<p>{this.props.quote}</p>
				<Like character={this.props.character} />
			</div>
		);
	}
}

export default Quote;
