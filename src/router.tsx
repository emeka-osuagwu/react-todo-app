import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen"

const Routes: React.FC = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={HomeScreen} />
		</Switch>
	</Router>
);

export default Routes;
