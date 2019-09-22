import React from 'react';
import NavBar from '../navbar/navbar';
import SelectionPane from './selectionpane';
import SortingPane from './sortingpane';
import './sorting.css'


class Sorting extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stopLoop: false,
			sortType: '',
			numberOfItems: 200,
		};

		this.updateSort = this.updateSort.bind(this);

		this.stopLoop = this.stopLoop.bind(this);
	}

	updateSort(sortType, num) {;
		this.setState({
			sortType: sortType,
			numberOfItems: num,
		});
	}

	stopLoop() {
		this.setState({stopLoop: !this.state.stopLoop})
		document.getElementById("stop").innerHTML = this.state.stopLoop ? "Stop Sort" : "Start Sort"
	}


	render() {
		return (
			<div className = "page">
				<NavBar />
				<div className = "content">
					<SelectionPane startSort = { this.startSort } stopLoop = {this.stopLoop} updateSort={this.updateSort}/> 
					<SortingPane sortType={ this.state.sortType } numberOfItems = {this.state.numberOfItems} startSort = { this.startSort } stopLoop = {this.state.stopLoop} stopSort={this.stopSort}/>
				</div>
			</div>
		);
	}
}

export default Sorting;