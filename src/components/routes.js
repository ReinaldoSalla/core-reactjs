import React from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import Products from "./products";

import Cart from "./Cart";
import Women from "./Women/women";

export default function Routes() {
	return (
		<Switch>
			<Route path="/" component={Products} exact />
      <Route path="/women" component={Women} />
		</Switch>
	);
}