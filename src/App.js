import React, { Component } from "react";
import Characters from "./components/Characters";

import axios from "axios";
import Search from "./components/Search";

class App extends Component {
	state = {};

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

	render() {
		if (!this.state.simpsonsData) {
			return <h1>Loading Simpsons data...</h1>;
		}
		const filtered = this.search();
		return (
			<div className="main">
				<Search onInput={this.onInput} />
				<Characters
					simpsonsData={
						filtered.length > 0 ? filtered : this.state.simpsonsData
					}
					delete={this.deleteCharacter}
				/>
			</div>
		);
	}
}

export default App;
