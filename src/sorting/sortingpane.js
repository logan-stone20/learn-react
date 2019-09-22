import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'

class SortingPane extends React.Component {

	getSortContent() {
		if (this.props.sortType !== "") {
			return (
				<div className = "sorting-pane">
					<h1> {this.props.sortType + " sort"} </h1>
					<div id="sort-window">
						<P5Wrapper sketch={sketch} stopSort = {this.props.stopSort} numberOfItems = {this.props.numberOfItems} stopLoop = {this.props.stopLoop} />
					</div>
				</div>
			);
		} else {
			return (
				<div className = "sorting-pane">
				</div>
			);
		}
	}


	render() {
		return (
			this.getSortContent()
		);
	}
}

export default SortingPane;