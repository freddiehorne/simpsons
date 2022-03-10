import React, { Component } from "react";
import Like from "./Like";

class Quote extends Component {
	state = {};
	render() {
		const { character, quote, votes, changeCount } = this.props;
		return (
			<div>
				<p>{this.props.quote}</p>
				<Like
					character={character}
					votes={votes}
					quote={quote}
					changeCount={changeCount}
				/>
			</div>
		);
	}
}

export default Quote;
