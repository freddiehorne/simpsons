import React, { Component } from "react";

class Like extends Component {
	state = {};
	render() {
		const { character, votes, quote, changeCount } = this.props;
		const buttonText = votes[quote] ? "Unlike" : "Like";

		const clicked = () => {
			changeCount(quote);
		};

		return (
			<>
				<button onClick={() => clicked()}>{buttonText}</button>
				{votes[quote] && <p>{character} &#10003;</p>}
			</>
		);
	}
}

export default Like;
