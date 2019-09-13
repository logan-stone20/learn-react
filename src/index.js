import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar/navbar';
import Home from "./home/home";
import Sorting from "./sorting/sorting";
import Battleship from "./battleship";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './nav.css';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path='/sorting' component={Sorting} />
			<Route path='/battleship' component={Battleship} />
		</div>
	</Router>
);

ReactDOM.render(
	routing,
	document.getElementById('root')
);