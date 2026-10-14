function drawWire(xpos1, ypos1, xpos2, ypos2) {
	var canvas = document.getElementById("mapCanvas")
	var context = canvas.getContext("2d");
	context.moveTo(xpos1, ypos1);
	let xdistance = Math.sqrt((xpos1+xpos2)**2+(ypos1+ypos2)**2)/3;
	
	for (let i = 0; i < canvas.width; i++) {
		context.fillRect(i, xdistance*(Math.e**(i/xdistance)+Math.e**((i/xdistance) * -1), 1, 1));
	}
	context.stroke();
}
