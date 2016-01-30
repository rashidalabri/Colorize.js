// Define some variables
var r = 0;
var g = 0;
var b = 0;
var state = 0;

// A function to convert RBG values to Hexadecimal values
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// A function to control the luminosity of a hex color
function ColorLuminance(hex, lum) {
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	lum = lum || 0;
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}
	return rgb;
}

// The main function
function colorize(id, luminosity) {
	switch(state) {
		case 0:
			if(r < 100) { r++; }
			if(r >= 100 && g < 100) { g++; }
			if(r >= 100 && g >= 100 && b < 100) { b++; }
			if(r == 100 && g == 100 && b == 100) { state = 1; return; }
			break;
		case 1:
			if(r > 0) { r--; }
			if(r <= 0 && g > 0) { g--; }
			if(r <= 0 && g <= 0 && b > 0) { b--; }
			if(r == 0 && g == 0 && b == 0) { state = 0;	return; }
			break;
	}
	document.getElementById(id).style.backgroundColor = ColorLuminance(rgbToHex(r, g, b), luminosity);
}

setInterval(colorize, 50, 'body', -0.5);
