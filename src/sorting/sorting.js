import React from 'react';
import NavBar from '../navbar/navbar';
import SelectionPane from './selectionpane';
import SortingPane from './sortingpane';
import './sorting.css'


class Sorting extends React.Component {
	render() {
		return (
			<div className = "page">
				<NavBar />
				<div className = "content">
					<SelectionPane />
					<SortingPane />
				</div>
			</div>
		);
	}
}

export default Sorting;