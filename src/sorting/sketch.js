import 'react-p5-wrapper';

let width = 5;
let canvasWidth = 680;
let canvasHeight = 600;
let rectHeight = 2;
let ar;
let current = 0;
let arLength;
let sorted = false;
let counter = 0;
let offset = canvasWidth/8;
let stopLoop = false;

function bubbleSort(p, ar) {
	p.fill(0);
	sorted = true;
	for (let i = 1; i < ar.length; i++) {
		if (ar[i] < ar[i - 1]) {
			let temp = ar[i];
			ar[i] = ar[i-1];
			ar[i-1] = temp;
			current = i;
			sorted = false;
		} 
	}
}

function makeArray() {
	let ar = new Array(canvasWidth/4);
	for (let i = 0; i < ar.length; i++) {
		ar[i] = Math.floor(Math.random() * 200);
	}
	return ar;
}

function redStreak() {
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
		var sortCanvas = p.createCanvas(canvasWidth, canvasHeight);
		sortCanvas.parent("sort-window");
		ar = makeArray();
		p.frameRate(30);
	}

	p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (props.stopLoop) {
            stopLoop = props.stopLoop;
        }
    }

	p.draw = () => {

		if (stopLoop) {
			p.noLoop();
		}
		p.background('#285c4d');
		for (let i = 0; i < ar.length; i++) {
			if (i === current) {
				p.fill('#ff0339');
			} else {
				p.fill(255);
			}
			p.rect(offset + i*3, canvasHeight - ar[i] * rectHeight, width, ar[i] * rectHeight );
		}
		bubbleSort(p, ar);
		if (sorted) {
			for (let i = 0; i < ar.length; i++) {
				if (i === counter) {
					p.fill('#ff0339');
				} else {
					p.fill(255);
				}	
				p.rect(offset + i*3, canvasHeight - ar[i] * rectHeight, width, ar[i] * rectHeight );
			}
		redStreak();
		}

	}
}

export default sketch;