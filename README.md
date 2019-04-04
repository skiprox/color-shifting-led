# Color Changing Draw

> Change the color of an Anode LED over time

This is a program to change the color of an anode LED over time. You can supply an array of color values and it will infinitely shift between those colors in order.

### Installation

Clone this repository, then you'll need to `npm install` to get the `johnny-five` package. After that, plug in your arduino with an anode LED attached to pins 6 (red), 5 (green), and 3 (blue).

To run, do `node index.js`.

To turn off, type `off()` on the console.