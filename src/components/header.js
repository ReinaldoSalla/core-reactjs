import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
	return (
		<div className="header">
			<h1 className="header-title">Shop Now</h1>
			<div className="links-header">
				<p><NavLink activeClassName="selected" className="nav-link-header" to="/women">Women</NavLink></p>
				<p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Men</NavLink></p>
				<p><NavLink activeClassName="selected" className="nav-link-header" to="/clothes">Clothes</NavLink></p>
				<p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</NavLink> </p>
			</div>
		</div>
	);
}