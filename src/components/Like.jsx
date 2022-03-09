import React, { Component } from "react";

class Like extends Component {
	state = {};
	render() {
		// console.log(this.props.votes);
		const buttonText = this.props.votes[this.props.character]
			? "Unlike"
			: "Like";

		const clicked = () => {
			this.props.changeCount(this.props.character);
		};

		return (
			<>
				<button onClick={() => clicked()}>{buttonText}</button>
				{this.props.votes[this.props.character] && (
					<p>{this.props.character} &#10003;</p>
				)}
			</>
		);
	}
}

export default Like;
