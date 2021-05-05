import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
// import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
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
					<Route component={NotFound}/>
				</Switch>
			</main>
		</Router>
	)
}

export default App;