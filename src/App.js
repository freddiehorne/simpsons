import React, { Component } from "react";
import Logo from "./components/Logo";
import Characters from "./components/Characters";
import Search from "./components/Search";
import Total from "./components/Total";

import axios from "axios";

class App extends Component {
	state = { votes: {}, userInput: "" };

	componentDidMount = () => {
		this.getSimpsonsData();
	};

	getSimpsonsData = async () => {
		try {
			const result = await axios.get(
				"https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
			);
			this.setState({ simpsonsData: result.data });
		} catch (error) {
			alert("API is down");
		}
	};

	onInput = (e) => {
		this.setState({ userInput: e.target.value });
	};

	search = () => {
		let characters = this.state.simpsonsData;
		return characters.filter((char) =>
			char.character.toLowerCase().includes(this.state.userInput.toLowerCase())
		);
	};

	deleteCharacter = (index) => {
		this.removeDeletedLike(this.state.simpsonsData[index].quote);
		const copy = [...this.state.simpsonsData];
		copy.splice(index, 1);
		this.setState({ simpsonsData: copy });
	};

	changeCount = (quote) => {
		const currentVote = this.state.votes[quote];

		this.setState({
			votes: {
				...this.state.votes,
				[quote]:
					currentVote === undefined || currentVote === false ? true : false,
			},
		});
	};

	removeDeletedLike = (character) => {
		const copy = { ...this.state.votes };
		copy[character] = undefined;
		this.setState({ votes: copy });
	};

	resetLikes = () => this.setState({ votes: 0 });

	render() {
		if (!this.state.simpsonsData) {
			return <h1>Loading Simpsons data...</h1>;
		}
		const filtered = this.search();
		const values = Object.values(this.state.votes);
		const results = values.filter((item) => item === true);
		const reset = () => {
			this.getSimpsonsData();
			this.resetLikes();
		};
		return (
			<div className="main">
				<Logo />
				<div className="top">
					<Search onInput={this.onInput} />
					<button onClick={reset}>Get new Simpsons data</button>
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
