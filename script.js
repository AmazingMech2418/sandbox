var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var mouse = false;
var x = 0;
var y = 0;
var sand = [];
var sandExists = {

}
var gravity = 5;

window.onload = function() {
	setInterval(function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		c.clearRect(0, 0, canvas.width, canvas.height);

		if (mouse) {
			sand.push("sand_" + Math.round(x / 5) * 5 + "_" + Math.round(y / 5) * 5);
			eval('sandExists.' + "sand_" + (Math.round(x / 5) * 5) + "_" + (Math.round(y / 5) * 5) + ' = true');
		}

		for (var i = 0; i < sand.length; i++) {
			var foo = sand[i].split("_");
			var blockX = Number(foo[1]);
			var blockY = Number(foo[2]);

			if (Number(foo[2]) < (canvas.height - 20)) {
				var noSand = true;
				console.log('sandExists.' + "sand_" + blockX + "_" + Number(blockY) + 5);
				if (eval('sandExists.' + "sand_" + blockX + "_" + Number(blockY) + 50)) {
					noSand = false;
				}

				if (noSand) {
					sand[i] = "sand_" + blockX + "_" + (Number(blockY) + gravity);
				}
			}

			c.fillStyle = "yellow";
			c.fillRect(blockX, blockY, 5, 5);
			c.fillStyle = "black";
		}
	}, 1);
}

function getMouse(event) {
	x = event.clientX;
	y = event.clientY;
}