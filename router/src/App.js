import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

class App extends React.Component {
	render() {
		return (
			<Router>
				<header>
					<Link to="/">
						<button>Home</button>
					</Link>
					<Link to="/about">
						<button>About</button>
					</Link>
					<Link to="/users">
						<button>Users</button>
					</Link>
				</header>
				<hr/>
				<main>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/users" component={Users}/>
						<Route component={NotFound}/>
					</Switch>
				</main>
			</Router>
		);
	}
}

export default App;
