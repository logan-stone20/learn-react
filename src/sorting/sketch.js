import 'react-p5-wrapper';

let width = 5;
let canvasWidth = 850;
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
	if (!sorted) {
		p.fill(0);
		let minIndex = current;
		sorted = true;
		for (let i = current + 1; i < ar.length; i++) {
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

/* function setup() {
	var sortCanvas = createCanvas(canvasWidth, canvasHeight);
	sortCanvas.parent("sort-canvas")
	ar = makeArray();
	arLength = ar.length;
} */

function sketch (p) {

	p.setup = () => {
		let sortCanvas = p.createCanvas(canvasWidth, canvasHeight);
		sortCanvas.parent("sort-window");
		ar = makeArray(document.getElementById("number-of-items").value);
		p.frameRate(60);
	}

	p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
				numberOfItems = props.numberOfItems;
				current = 0;
				sortType = document.getElementById('sort-dropdown');
        ar = makeArray(parseInt(document.getElementById("number-of-items").value));
    }

	p.draw = () => {
		p.background('#285c4d');
		for (let i = 0; i < ar.length; i++) {
			if (i === current) {
				p.fill('#ff0339');
			} else {
				p.fill(255);
			}
			p.rect(i*4, canvasHeight - ar[i] * rectHeight, width, ar[i] * rectHeight );
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
				p.rect(i*4, canvasHeight - ar[i] * rectHeight, width, ar[i] * rectHeight );
			}
			redStreak(p);
			current = 0;
		}

	}
}

export default sketch;