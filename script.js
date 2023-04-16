let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particleCanvas');
    frameRate(60);
}

function draw() {
    background(255);

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].display();
        particles[i].move();
        if (particles[i].isOutOfCanvas()) {
            particles.splice(i, 1);
        }
    }
}

function mouseClicked() {
    spawnParticles(mouseX, mouseY, 10);
}

function touchStarted() {
    spawnParticles(touches[0].x, touches[0].y, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function spawnParticles(x, y, num) {
    for (let i = 0; i < num; i++) {
        particles.push(new Particle(x, y));
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 15);
        this.vx = random(-3, 3);
        this.vy = random(-3, 3);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    isOutOfCanvas() {
        return (this.x < 0 || this.x > width || this.y < 0 || this.y > height);
    }
}
