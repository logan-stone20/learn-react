import React from 'react';

class SelectionPane extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sort: "",
			numberOfItems: 20,
		};
	}


	afterSubmit = (e) => {
		e.preventDefault();
		
		this.props.updateSort(document.getElementById("sort-dropdown").value, parseInt(document.getElementById("number-of-items").value));
	}


	render() {
		return (
			<div className="sort-select">
				<h1>Choose a sorting algorithm from the dropdown menu and press start</h1>
				<div className="form">
					<form onSubmit= {e => this.afterSubmit(e)}>
						<select id="sort-dropdown" required>
							<option value="">Select Algorithm</option>
							<option value="selection">Selection Sort</option>
							<option value="bubble">Bubble Sort</option>
						</select>
						<label>
							Number of items: 
							<input onChange={e => function (e) {e.preventDefault()} } id="number-of-items" type="number" min="20" max="200" required/>
						</label>
						<select id="sort-speed" required>
							<option value="">Select fps</option>
							<option value="1">1 fps</option>
							<option value="5">5 fps</option>
							<option value="10">10 fps</option>
							<option value="20">20 fps</option>
							<option value="40">40 fps</option>
							<option value="60">60 fps</option>
						</select>
						<input type="submit" value="Start Sorting!"/>
					</form>
				</div>
			</div>
		);
	}
}

export default SelectionPane;