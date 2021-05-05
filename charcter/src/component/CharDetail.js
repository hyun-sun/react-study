import React, {Component, Fragment} from "react";
import {characters} from "../data/data.json";

class CharDetail extends Component {
	render() {
		let {params} = this.props.match;
		const charr = characters.find(charr => charr.id == params.id);

		return (
			<Fragment>
				<div>{JSON.stringify(charr)}</div>
			</Fragment>
		);
	}
}

export default CharDetail;