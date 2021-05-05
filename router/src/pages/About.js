import React, {Fragment} from "react";

function About({ match, location, history }) {
	return (
		<Fragment>
			<h1>About</h1>
			<pre>{JSON.stringify(match, null, 2)}</pre>
			<pre>{JSON.stringify(location, null, 2)}</pre>
			<pre>{JSON.stringify(history, null, 2)}</pre>
		</Fragment>
	);
}

export default About;