import React, {Component} from "react";
import {Link} from "react-router-dom";

class CharCards extends Component {
	render() {
		const {id, name, profile} = this.props;

		return (
			<div className={`charCard-${id}`}>
				<div>{profile}</div>
				<div>
					<Link to={`/${id}`}>{name}</Link>
				</div>
			</div>
		);
	}
}
export default CharCards;