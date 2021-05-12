import React from 'react';
import { withRouter } from 'react-router-dom';

class LogoutButton extends React.Component {
	render() {
		let {logout, history} = this.props;
		const handleClick = () => {
			logout();
			history.push('/');
		}
		return <button onClick={handleClick}>Logout</button>;
	}
}

export default withRouter(LogoutButton);