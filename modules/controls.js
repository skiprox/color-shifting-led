module.exports = {
	// This is the array of color values.
	// You can put any colors you want here and the program will loop through them in order.
	// You must give this at least ONE color, but you do not have to give it more than one
	// if you don't want to.
	"colors": ["#FF0055", "#55FF00", "#22FF55", "#0055FF", "#FF5500"],
	// This value is how much the linear interpolation increments each 100 milliseconds
	// so making this smaller will increase the time it takes to change from one color to the next.
	// This value must be between 0 and 1.
	"intervalIncrementer": 0.01,
	// This value is how intense the light is.
	// 100 is brightest, and 0 is completely off.
	// It takes whole values, e.g. 34, 57, and so on.
	"intensity": 100
}