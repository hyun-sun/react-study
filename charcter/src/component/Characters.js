import React, {Component, Fragment} from "react";
import {Route} from "react-router-dom";

import CharacterList from "./CharacterList";
import CharDetail from "./CharDetail";

class Characters extends Component {
	render() {
		const {match} = this.props;
		return (
			<Fragment>
				<h1>Characters</h1>
				<Route exact path={match.path} component={CharacterList} />
			</Fragment>
		);
	}
}

export default Characters;