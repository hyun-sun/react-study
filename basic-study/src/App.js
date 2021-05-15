import './App.css';
import React, {Component, Fragment} from "react";
import Clock from "./component/Clock";
import Toggle from "./component/Toggle"


function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up.</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn) {
		return <UserGreeting/>;
	}
	return <GuestGreeting/>;
}

// 엘리먼트 변수
function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	)
}

class LoginControl extends Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		if(isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick}/>
		} else {
			button = <LoginButton onClick={this.handleLoginClick}/>
		}

		return (
			<div>
				{button}
				<Greeting isLoggedIn={isLoggedIn}/>
			</div>
		)
	}
}


function App(props) {
	return (
		<Fragment>
			<Clock />
			<Toggle />
			<LoginControl />
		</Fragment>
	)
}

export default App;

