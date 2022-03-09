import React, { Component } from "react";
import Like from "./Like";

class Quote extends Component {
	state = {};
	render() {
		return (
			<div>
				<p>{this.props.quote}</p>
				<Like
					votes={this.props.votes}
					character={this.props.character}
					changeCount={this.props.changeCount}
				/>
			</div>
		);
	}
}

export default Quote;
