import React from 'react';
import NavBar from '../navbar/navbar';
import SelectionPane from './selectionpane';
import SortingPane from './sortingpane';
import './sorting.css'


class Sorting extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortInProgress: false,
			stopLoop: false,
			sortType: '',
		};

		this.startSort = this.startSort.bind(this);
		this.updateSort = this.updateSort.bind(this);
		this.stopSort = this.stopSort.bind(this);
		this.stopLoop = this.stopLoop.bind(this);
	}

	updateSort(sortType) {;
		if (!this.state.sortInProgress) {
			this.setState({sortType: sortType})
			this.startSort();
		}
	}

	stopLoop() {
		this.setState({stopLoop: !this.state.stopLoop})
		console.log(this.state)
		document.getElementById("stop").innerHTML = this.state.stopLoop ? "Stop Loop" : "Start Loop"
	}

	startSort() {
		this.setState({sortInProgress: true});
	}

	stopSort() {
		this.setState({sortInProgress: false });
	}

	render() {
		return (
			<div className = "page">
				<NavBar />
				<div className = "content">
					<SelectionPane startSort = { this.startSort } stopLoop = {this.stopLoop} updateSort={this.updateSort}/> 
					<SortingPane sortType={ this.state.sortType } stopLoop = {this.state.stopLoop} stopSort={this.stopSort}/>
				</div>
			</div>
		);
	}
}

export default Sorting;