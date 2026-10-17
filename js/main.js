var gridStatus = false;

function drawWire(xpos1, ypos1, xpos2, ypos2) {
	var canvas = document.getElementById("mapCanvas");
	var context = canvas.getContext("2d");
	context.moveTo(xpos1, ypos1);
	let xdistance = Math.sqrt((xpos1+xpos2)**2+(ypos1+ypos2)**2)/3;
	
	for (let i = 0; i < canvas.width; i++) { // Why does this not work??!?!?!?
		context.fillRect(i, xdistance*(Math.e**(i/xdistance)+Math.e**((i/xdistance) * -1)), 1, 1);
	}
	context.stroke();
}

function toggleBuild() {
	if (gridStatus === false) {
		grid(true)
	} else {
		grid(false)
	}
}

function grid(status) {
	if (status === true) {
		var canvas = document.getElementById("mapCanvas");
		var context = canvas.getContext("2d");
		context.rect(0, 0, canvas.width, canvas.height);
		let x2 = canvas.width
		let distance = canvas.height / 50
		// Loop canvas height / 50 times to create vertical lines
		for (let i = 0; i < distance; i++) {
			context.fillRect(0, distance * i, x2, (distance * i) + 10);
		}
	}
}
