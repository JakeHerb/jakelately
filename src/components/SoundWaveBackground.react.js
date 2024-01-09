import React, { useEffect } from 'react';
import p5 from 'p5';

const SoundWaveBackground = () => {
    const Sketch = p => {
        let waves = [];

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            // Initialize waves - example with 5 waves
            for (let i = 0; i < 5; i++) {
                waves.push(new Wave(p, i * 20, p.color(255, 20, 147))); // Pink color
            }
        };

        p.draw = () => {
            p.background(25, 25, 112); // Deep blue color
            waves.forEach(wave => {
                wave.display();
                wave.update();
            });
        };

        class Wave {
            constructor(p, yOffset, color) {
                this.p = p;
                this.yOffset = yOffset;
                this.color = color;
            }

            display() {
                this.p.stroke(this.color);
                this.p.noFill();
                this.p.beginShape();
                for (let x = 0; x <= this.p.width; x += 10) {
                    let angle = (x + this.p.frameCount * 2) * 0.04;
                    let y = this.p.sin(angle) * 20;
                    this.p.vertex(x, y + this.p.height / 2 + this.yOffset);
                }
                this.p.endShape();
            }

            update() {
                // Update properties for animation, e.g., wave speed, amplitude
            }
        }
    };

    useEffect(() => {
        new p5(Sketch);
        // Optional: Handle window resizing
        // window.addEventListener('resize', handleResize);
    }, []);

    return <div id="sound-wave-background" className="sound-wave-background"></div>;
};

export default SoundWaveBackground;