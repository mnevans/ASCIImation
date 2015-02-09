// Morgan Evans, CSE 154 AL, Homework 7
// This page is the JavaScript file that links to ascii.html and controls the animations 
// and options listed on the ASCIImation page.

"use strict";

(function() {
		var index = 0;
		var image = null;
		var interval = 250;
		var timer;

	// calls the load function when the window opens 
	window.addEventListener("load", load);

	// controls all elements of the HTML control ids by their respective functions
	function load() {
		document.getElementById("start").onclick = startAnimation;
		document.getElementById("stop").onclick = stopAnimation;
		document.getElementById("animation").onchange = changeAnimation;
		document.getElementById("size").onchange = size;
		document.getElementById("turbo").onchange = speed;
		document.getElementById("normal").onchange = speed;
		document.getElementById("slomo").onchange = speed;
	}

	// begins the user's selected animation from the beginning
	function startAnimation() {
		this.disabled = true;
		document.getElementById("stop").disabled = false;
		document.getElementById("animation").disabled = true;
		index = 0;
		timer = setInterval(animate, interval);
		image = textbox.value.split("=====\n");
	}

	// stops the user's selected ASCIImation in it's current place in the animation
	function stopAnimation() {
		document.getElementById("start").disabled = false;
		document.getElementById("animation").disabled = false;
		this.disabled = true;
		clearInterval(timer);
		document.getElementById("textbox").value = image.join("=====\n");
	}

	// changes the given ASCIImation's frame to produce the animation
	function animate() {
		document.getElementById("textbox").value = image[index];
		index += 1;
		if (index > image.length - 1) {
			index = 0;
		}
	}

	// changes the ASCIImation's size that the user selects
	function size() {
		document.getElementById("textbox").style.fontSize = parseInt(this.value) + "pt";
	}

	// changes the ASCIImation's speed that the user selects
	function speed() {
		clearInterval(timer);
		interval = parseInt(this.value);
		timer = setInterval(animate, interval);
	}

	// displays the user's selected ASCIImation in the HTML's textbox
	function changeAnimation() {
		var textbox = document.getElementById("textbox");
		textbox.value = ANIMATIONS[this.value];
	}

})();
