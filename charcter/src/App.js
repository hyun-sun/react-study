import React, {Component} from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Characters from "./component/Characters";
import CharDetail from "./component/CharDetail";

class App extends Component {
	render() {
		return (
			<Router>
				<main>
					<Route path="/" component={Characters} />
					<Route path={`/:id`} component={CharDetail}/>
				</main>
			</Router>
		);
	}
}

export default App;
