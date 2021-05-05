import React, {Component, Fragment} from "react";
import { characters } from "../data/data.json"
import CharCards from "./CharCards";

class CharacterList extends Component {
	render() {
		const {match} = this.props;
		const charList = characters.map(
			({id, name, profile}) => (
				<CharCards id={id} name={name} profile={profile} />
			)
		);

		return (
			<Fragment>
				{charList}
			</Fragment>
		);
	}
}

export default CharacterList;