// DOM Elements
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Resize canvas to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables for mouse position
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Settings
const settings = {
    particleCount: 100,
    particleSize: 3,
    particleSpeed: 5,
    particleLifespan: 100,
    particleColor: '#FFFFFF', // Default to white for better visibility on red
    useMouseFollow: true
};

// Particles array
let particles = [];

/**
 * Initialize particles
 */
function initParticles() {
    particles = [];
    for (let i = 0; i < settings.particleCount; i++) {
        particles.push(new Particle());
    }
}

/**
 * Animation loop
 */
function animate() {
    // Clear canvas with transparent background to see the red background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    for (const particle of particles) {
        particle.update();
        particle.draw();
    }
    
    // Continue animation
    requestAnimationFrame(animate);
}

// Event listeners
canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Touch support
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
});

// Window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// UI controls
document.getElementById('particleCount').addEventListener('input', (e) => {
    settings.particleCount = parseInt(e.target.value);
    document.getElementById('particleCountValue').textContent = settings.particleCount;
    initParticles();
});

document.getElementById('particleSize').addEventListener('input', (e) => {
    settings.particleSize = parseInt(e.target.value);
    document.getElementById('particleSizeValue').textContent = settings.particleSize;
});

document.getElementById('particleSpeed').addEventListener('input', (e) => {
    settings.particleSpeed = parseInt(e.target.value);
    document.getElementById('particleSpeedValue').textContent = settings.particleSpeed;
});

document.getElementById('particleLifespan').addEventListener('input', (e) => {
    settings.particleLifespan = parseInt(e.target.value);
    document.getElementById('particleLifespanValue').textContent = settings.particleLifespan;
});

document.getElementById('particleColor').addEventListener('input', (e) => {
    settings.particleColor = e.target.value;
});

document.getElementById('useMouseFollow').addEventListener('change', (e) => {
    settings.useMouseFollow = e.target.checked;
});

// Initialize and start animation
initParticles();
animate();