import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className="navbar">
			<div className="nav-container">
				<a className="nav-title">Crypto Site</a>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/stock">Stock</NavLink></li>
					<li><NavLink to="/crypto">Crypto</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;