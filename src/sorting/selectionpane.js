import React from 'react';

class SelectionPane extends React.Component {

	constructor(props) {
		super(props);
		this.state = {sort: ""};
		this.afterSubmit = this.afterSubmit.bind(this);
	}

	handleSortChange(e) {
		this.setState({sort: e.target.value});
	}

	afterSubmit = (e) => {
		e.preventDefault();
		this.props.updateSort(this.state.sort);
	}


	render() {
		return (
			<div className="sort-select">
				<h1>Choose a sorting algorithm from the dropdown menu and press start</h1>
				<div className="form">
					<form onSubmit= {e => this.afterSubmit(e)}>
						<select onChange={e => this.handleSortChange(e)}>
							<option value="">Select Algorithm</option>
							<option value="selection">Selection Sort</option>
							<option value="bubble">Bubble Sort</option>
						</select>
						<input type="submit" value="Start Sorting!"/>
					</form>
					<button id="stop" onClick={this.props.stopLoop}> Stop Algorithm </button>
				</div>
			</div>
		);
	}
}

export default SelectionPane;