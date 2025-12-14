const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random() * 2 + 1;
  this.dx = (Math.random() - 0.5) * 2;
  this.dy = (Math.random() - 0.5) * 2;
  this.color = `rgba(255,140,0,${Math.random()})`;
}
Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
};
Particle.prototype.update = function() {
  this.x += this.dx;
  this.y += this.dy;
  if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
  if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  this.draw();
};

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.strokeStyle = 'rgba(255,140,0,0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  connectParticles();
  requestAnimationFrame(animateParticles);
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
  }
}
initParticles();
animateParticles();

canvas.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;

  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    p.x = mouse.x;
    p.y = mouse.y;
    particles.push(p);
  }
});
canvas.addEventListener('click', e => {
  // Add more particles on click
  for (let i = 0; i < 20; i++) {
    let p = new Particle();
    p.x = e.x;
    p.y = e.y;
    particles.push(p);
  }
});
