/*
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../base-layout/";
import Routes from "../routes/";

export default function Interface() {
	return (
		<BrowserRouter>
			<MainPage>
				<Routes />
			</MainPage>
		</BrowserRouter>
	);
}
*/

import React from "react";
import {
	BrowserRouter,
	Link,
	Route
} from "react-router-dom";
import { Icon } from "react-materialize";

export default function BaseLayout() {
	return (
		<BrowserRouter>
			<Link to="/">Home</Link> <br />
			<Link to="/products">Products</Link> <br />
			<Link to="/cart">Cart</Link>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
		</BrowserRouter>
	);
}

function Home() {
	return (
		<div>
			<h1>Content to be rendered in home page</h1>
		</div>
	);
}

function Products() {
	return (
		<div>
			<h1>products</h1>
		</div>
	);
}

function Product() {
	return (
		<div>
			<h1>Product</h1>
		</div>
	);
}

function Cart() {
	return (
		<div>
			<h1>Cart</h1>
		</div>
	);
}

