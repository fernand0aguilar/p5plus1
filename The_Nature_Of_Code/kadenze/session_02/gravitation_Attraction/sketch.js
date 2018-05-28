//TODO draw it's trail

var particles = [];
var attractor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	attractor = new Attractor(width/2, height/2);
	for(var i = 0; i <= 2; i++){
		particles[i] = new Particle(100*(i+1), 100, i);
	}
}

function draw() {
	background(51);

	for(var i = 0; i <= 2; i++){
		var force = attractor.calculateAttraction(particles[i]);
		particles[i].applyForce(force);

		if(mouseIsPressed)
			// particles[i].applyForce(wind);

		particles[i].update();
		particles[i].show();

		attractor.show();
	}
}
