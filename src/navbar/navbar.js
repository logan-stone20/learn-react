import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	render() {
		return (
			<div className = "navbar">
				<nav>
					<Link to='/'>Home</Link>
					<Link to="/sorting">Sorting</Link>
				</nav>
			</div>
		);
	}
}

export default NavBar;