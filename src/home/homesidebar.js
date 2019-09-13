import React from 'react';

class HomeSideBar extends React.Component {
	render() {
		return (
			<div className = "sidebar">
				<div className="sidebar-content">
					<h1 className="sidebar-header">This is my Sidebar</h1>
					<br />
					<p>Visit my other website! <a href="https://loganstone.me">loganstone.me</a> </p>
				</div>
			</div>
		);
	}
}

export default HomeSideBar;