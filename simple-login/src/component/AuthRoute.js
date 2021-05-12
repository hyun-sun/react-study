import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class AuthRoute extends React.Component {
	render() {
		let {authenticated, component: Component, render, ...rest} = this.props;
		return (
			<Route
				{...rest}
				render={props =>
					authenticated ? (
						render ? render(props) : <Component {...props} />
					) : (
						<Redirect
							to={{pathname: '/login', state: {from: props.location}}}
						/>
					)
				}
			/>
		);
	}
}

export default AuthRoute;
