import React, { Component } from "react";

class Like extends Component {
	state = { clicked: false };
	render() {
		const buttonText = this.state.clicked ? "Liked" : "Like";
		return (
			<>
				<button onClick={() => this.setState({ clicked: !this.state.clicked })}>
					{buttonText}
				</button>
				{this.state.clicked && <p>{this.props.character} &#10003;</p>}
			</>
		);
	}
}

export default Like;
