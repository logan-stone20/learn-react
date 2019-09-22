import 'react-p5-wrapper';

let width = 5;
let canvasWidth = 700;
let canvasHeight = 600;
let rectHeight = 2.3;
let ar;
let current = 0;
let temp;
let sorted = false;
let counter = 0;
let offset = canvasWidth/8;
let sortType = document.getElementById('sort-dropdown');
let stopLoop = false;
let numberOfItems = 200;
let sortCanvas;
let sortSpeed;

function bubbleSort(p, ar) {
	p.fill(0);
	sorted = true;
	for (let i = 1; i < ar.length; i++) {
		if (ar[i] < ar[i - 1]) {
			temp = ar[i];
			ar[i] = ar[i-1];
			ar[i-1] = temp;
			current = i;
			sorted = false;
		} 
	}
}

function selectionSort(p, ar) {
		p.fill(0);
		sorted = true;
		let minIndex = current;
		for (let i = minIndex + 1; i < ar.length; i++) {
			if (ar[i] < ar[minIndex]) {
				minIndex = i;
				sorted = false;
			}
		}
		temp = ar[current];
		ar[current] = ar[minIndex];
		ar[minIndex] = temp;
		current++
}


function makeArray(num) {
	let ar = new Array(num);
	for (let i = 0; i < ar.length; i++) {
		ar[i] = Math.floor(Math.random() * 200);
	}
	return ar;
}

function redStreak(p) {
	counter++;
}


function sketch (p) {

	p.setup = () => {
		sortCanvas = p.createCanvas(canvasWidth, canvasHeight);
		sortCanvas.parent("sort-window");
		numberOfItems = parseInt(document.getElementById("number-of-items").value);
		ar = makeArray(document.getElementById("number-of-items").value);
		sortSpeed = parseInt(document.getElementById("sort-speed").value);
		p.frameRate(sortSpeed);
	}

	p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
				numberOfItems = props.numberOfItems;
				current = 0;
				sortType = document.getElementById('sort-dropdown');
				p.frameRate(parseInt(document.getElementById("sort-speed").value));
        ar = makeArray(numberOfItems);
	}

	p.draw = () => {
		p.frameRate(parseInt(document.getElementById("sort-speed").value));
		p.background('#285c4d');
		for (let i = 0; i < ar.length; i++) {
			if (i === current) {
				p.fill('#ff0339');
			} else {
				p.fill(255);
			}
			p.rect(i*canvasWidth/numberOfItems, canvasHeight - ar[i] * rectHeight, canvasHeight/numberOfItems, ar[i] * rectHeight );
		}
		if (sortType != null) {
			if (sortType.value === "bubble") {
				bubbleSort(p, ar);
			} else if (sortType.value === "selection") {
				selectionSort(p, ar);
			}
		}
		if (sorted) {
			for (let i = 0; i < ar.length; i++) {
				if (i === counter) {
					p.fill('#ff0339');
				} else {
					p.fill(255);
				}	
				p.rect(i*canvasWidth/numberOfItems, canvasHeight - ar[i] * rectHeight, canvasHeight/numberOfItems, ar[i] * rectHeight );
			}
			redStreak(p);
		}

	}
}

export default sketch;