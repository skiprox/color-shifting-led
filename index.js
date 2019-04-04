'use strict';

const Utils = require('./modules/utils.js');
const five = require('johnny-five');
const board = new five.Board();
const controls = require('./modules/controls');
const colors = controls.colors;
let intervalIncrementer = controls.intervalIncrementer;
const intensity = controls.intensity;

let led;
let anode;
let colorInc = 0;
let currentColor = '';
let nextColor = '';
let interval;
let intervalTimer = 0;

/**
 * Change colors over time, looping through an array of them
 * and interpolating one to the next
 */
class Main {
	constructor() {
		this.incrementColors();
		console.log(intervalIncrementer);
		board.on("ready", () => {
			anode = new five.Led.RGB({
				pins: {
					red: 6,
					green: 5,
					blue: 3
				},
				isAnode: true
			});
			anode.intensity(intensity);
			anode.color(currentColor);
			this.loop();
			board.repl.inject({
				// Allow limited "off" control access to the
				// Led instance from the REPL.
				off: function() {
					clearInterval(interval);
					anode.intensity(0);
					setTimeout(() => {
						process.exit();
					}, 100);
				}
			});
		});
	}
	loop() {
		intervalTimer = 0;
		interval = setInterval(() => {
			anode.color(Utils.lerpColor(currentColor, nextColor, intervalTimer));
			intervalTimer += intervalIncrementer;
			if (intervalTimer >= 1) {
				clearInterval(interval);
				this.incrementColors();
				this.loop();
			}
		}, 100);
	}
	incrementColors() {
		currentColor = colors[colorInc];
		colorInc = (colorInc + 1) % colors.length;
		nextColor = colors[colorInc];
	}
}

new Main();