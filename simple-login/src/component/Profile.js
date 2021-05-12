import React, {Component, Fragment} from "react"

class Profile extends Component {
	render() {
		let {user} = this.props;
		const {email, password, name} = user || {}
		return (
			<Fragment>
				<h1>Profile</h1>
				<dt>Email</dt>
				<dd>{email}</dd>
				<dt>Password</dt>
				<dd>{password}</dd>
				<dt>Name</dt>
				<dd>{name}</dd>
			</Fragment>
		)
	}
}

export default Profile