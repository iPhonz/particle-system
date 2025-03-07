/**
 * Particle class
 * Represents a single particle in the particle system
 */
class Particle {
    constructor() {
        this.reset();
    }
    
    /**
     * Reset particle to initial state
     */
    reset() {
        // Initial position is slightly offset from mouse position
        this.x = mouseX + (Math.random() * 20 - 10);
        this.y = mouseY + (Math.random() * 20 - 10);
        
        // Random velocity
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        
        // Size
        this.size = Math.random() * settings.particleSize + 1;
        
        // Lifespan
        this.life = Math.random() * settings.particleLifespan;
        this.maxLife = settings.particleLifespan;
        
        // Parse the color
        const hex = settings.particleColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        this.color = {r, g, b};
    }
    
    /**
     * Update particle position and properties
     */
    update() {
        // Follow mouse if enabled
        if (settings.useMouseFollow) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 5) {
                this.vx += (dx / distance) * (settings.particleSpeed * 0.1);
                this.vy += (dy / distance) * (settings.particleSpeed * 0.1);
            }
        }
        
        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Apply drag
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        // Decrease lifespan
        this.life--;
        
        // Reset if dead or out of bounds
        if (this.life <= 0 || 
            this.x < 0 || this.x > canvas.width || 
            this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }
    
    /**
     * Draw particle on canvas
     */
    draw() {
        const alpha = this.life / this.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}