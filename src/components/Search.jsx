import React, { Component } from "react";

class Search extends Component {
	state = {};

	render() {
		return (
			<div>
				<label htmlFor="search">Search</label>
				<input
					id="search"
					type="search"
					placeholder="Type character here..."
					onInput={this.props.onInput}
				/>
			</div>
		);
	}
}

export default Search;
