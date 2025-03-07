# Interactive Particle System

A visually engaging particle system that follows the mouse cursor with adjustable controls, built using HTML5 Canvas and JavaScript. The system features a bold red background inspired by the reference image.

## Live Demo

Visit the live demo at: [https://iphonz.github.io/particle-system/](https://iphonz.github.io/particle-system/)

## Features

- Interactive particles that follow the mouse cursor
- Vibrant red background with modern aesthetics
- Real-time controls for customizing the particle behavior
- Adjustable parameters:
  - Particle count
  - Particle size
  - Movement speed
  - Particle lifespan
  - Particle color
  - Toggle mouse following on/off
- Transparent particle effects that blend with the background
- Responsive design that works on desktop and mobile devices

## How to Use

1. Move your mouse (or touch the screen on mobile) to see particles follow your cursor
2. Use the control panel in the top-left corner to adjust particle parameters:
   - **Particle Count**: Increase or decrease the number of particles
   - **Size**: Change how large the particles appear
   - **Speed**: Adjust how quickly particles move toward the cursor
   - **Lifespan**: Control how long particles exist before respawning
   - **Particle Color**: Pick any color for the particles (default is white for visibility)
   - **Follow Mouse**: Toggle the mouse-following behavior on or off

## Technical Implementation

The system is built with:
- HTML5 Canvas API for rendering
- Object-oriented JavaScript for particle management
- CSS for styling the controls and background display

### Code Structure

- `index.html`: Main HTML file with canvas and controls
- `css/styles.css`: Styling for the interface and background
- `js/particle.js`: Particle class implementation
- `js/app.js`: Main application logic and event handling

## Local Development

To run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/iPhonz/particle-system.git
   ```

2. Open the folder and launch `index.html` in your browser.

No build process or dependencies are required as the project uses vanilla JavaScript.

## License

MIT License - Feel free to use and modify for your own projects.

## Credits

Created by iPhonz