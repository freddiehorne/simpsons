import React, { Component } from "react";
import Character from "./Character";
import Delete from "./Delete";
import Image from "./Image";
import Quote from "./Quote";

class Characters extends Component {
	render() {
		const person = this.props.simpsonsData;
		const { changeCount, votes } = this.props;

		return person.map((char, index) => {
			return (
				<div id={index} key={index}>
					{char.characterDirection === "Left" ? (
						<div className="character">
							<Character character={char.character} />
							<Image image={char.image} character={char.character} />
							<Quote
								quote={char.quote}
								character={char.character}
								changeCount={changeCount}
								votes={votes}
							/>
							<Delete delete={this.props.delete} index={index} />
						</div>
					) : (
						<div className="character">
							<Character character={char.character} />
							<Quote
								quote={char.quote}
								character={char.character}
								changeCount={changeCount}
								votes={votes}
							/>
							<Image image={char.image} character={char.character} />
							<Delete delete={this.props.delete} index={index} />
						</div>
					)}
				</div>
			);
		});
	}
}

export default Characters;
