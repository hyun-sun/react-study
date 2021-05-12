import React, { useState } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { signIn } from './js/auth';
import AuthRoute from './component/AuthRoute';

import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';
import NotFound from './component/NotFound';
import LoginForm from './component/LoginForm';
import LogoutButton from './component/LogoutButton';

function App() {
	const [user, setUser] = useState(null);
	const authenticated = user != null;

	const login = ({ email, password }) => setUser(signIn({ email, password }));
	const logout = () => setUser(null);

	return (
		<Router>
			<header>
				<Link to="/">
					<button>Home</button>
				</Link>
				<Link to="/about">
					<button>About</button>
				</Link>
				<Link to="/profile">
					<button>Profile</button>
				</Link>
				{authenticated ? (
					<LogoutButton logout={logout} />
				) : (
					<Link to="/login">
						<button>Login</button>
					</Link>
				)}
			</header>
			<hr />
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route
						path="/login"
						render={props => (
							<LoginForm authenticated={authenticated} login={login} {...props} />
						)}
					/>
					<AuthRoute
						authenticated={authenticated}
						path="/profile"
						render={props => <Profile user={user} {...props} />}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
