import React from 'react';
import NavBar from "../navbar/navbar";
import MainSection from "./mainSection";
import SideBar from './homesidebar';
import "./home.css"

class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="content">
					<SideBar />
					<MainSection />
				</div>
			</div>
		);
	}
}

export default Home;