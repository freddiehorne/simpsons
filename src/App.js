import React, { Component } from "react";
import Characters from "./components/Characters";
import Search from "./components/Search";
import Total from "./components/Total";

import axios from "axios";

class App extends Component {
	state = { count: 0, votes: {} };

	componentDidMount = () => {
		this.getSimpsonsData();
	};

	getSimpsonsData = async () => {
		const result = await axios.get(
			"https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
		);
		this.setState({ simpsonsData: result.data });
	};

	onInput = (e) => {
		this.setState({ userInput: e.target.value });
	};

	search = () => {
		let characters = this.state.simpsonsData;
		return characters.filter((char) =>
			char.character.toLowerCase().includes(this.state.userInput)
		);
	};

	deleteCharacter = (index) => {
		const copy = this.state.simpsonsData;
		copy.splice(index, 1);
		this.setState({ simpsonsData: copy });
	};

	changeCount = (character) => {
		const currentVote = this.state.votes[character];

		this.setState({
			votes: {
				...this.state.votes,
				[character]:
					currentVote === undefined || currentVote === false ? true : false,
			},
		});
	};

	render() {
		if (!this.state.simpsonsData) {
			return <h1>Loading Simpsons data...</h1>;
		}
		const filtered = this.search();
		const values = Object.values(this.state.votes);
		const results = values.filter((item) => item === true);
		return (
			<div className="main">
				<div className="top">
					<Search onInput={this.onInput} />
					<Total total={results.length} />
				</div>
				<Characters
					simpsonsData={
						filtered.length > 0 ? filtered : this.state.simpsonsData
					}
					delete={this.deleteCharacter}
					changeCount={this.changeCount}
					votes={this.state.votes}
				/>
			</div>
		);
	}
}

export default App;
