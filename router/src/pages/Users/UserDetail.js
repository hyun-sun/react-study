import React, {Fragment, Component} from "react";
import { users } from "./data.json";

class UserDetail extends Component {
	render() {
		let {match, history} = this.props;
		const user = users.find(user => user.id === match.params.id);
		return (
			<Fragment>
				<h2>User Detail</h2>
				<dt>id</dt>
				<dd>{user.id}</dd>
				<dt>name</dt>
				<dd>{user.name}</dd>
				<button onClick={() => history.goBack()}>Back</button>
			</Fragment>
		);
	}
}

export default UserDetail;