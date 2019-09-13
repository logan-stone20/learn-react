import React from 'react';

class SelectionPane extends React.Component {

	constructor(props) {
		super(props);
		this.state = {sort: ""};
		this.startSorting = this.startSorting.bind(this);
	}

	sortChangeHandler = (event) => {
		this.setState({sort: event.target.value});
	}

	startSorting(event) {
	}


	render() {
		return (
			<div className="sort-select">
				<h1>Choose a sorting algorithm from the dropdown menu and press start</h1>
				<div className="form">
					<form>
						<select onSubmit= {this.startSorting}>
							<option value="selection">Selection Sort</option>
							<option value="bubble">Bubble Sort</option>
						</select>
						<input type="submit" value="Start Sorting!"/>
					</form>
				</div>
			</div>
		);
	}
}

export default SelectionPane;