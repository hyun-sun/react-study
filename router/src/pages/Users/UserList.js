import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import { users } from "./data.json"

class UserList extends Component {
	render() {
		let {match} = this.props;
		return (
			<Fragment>
				<h2>User List</h2>
				<ul>
					{users.map(({id, name}) => (
						<li key={id}>
							<Link to={`${match.url}/${id}`}>{name}</Link>
						</li>
					))}
				</ul>
			</Fragment>
		);
	}
}

export default UserList;