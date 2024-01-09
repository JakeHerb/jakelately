import React, { useEffect } from 'react';
import p5 from 'p5';
import './css/Background.css';

const Background = () => {
    const Sketch = p => {
        let particles = [];

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            // Initialize particles
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(p));
            }
        };

        p.draw = () => {
            p.background(p.color(255, 20, 147)); 
            particles.forEach(particle => {
                particle.update();
                particle.display();
            });
        };

        class Particle {
            constructor(p) {
                this.p = p;
                this.position = p.createVector(p.random(p.width), p.random(p.height));
                this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
                this.size = 5;
            }

            update() {
                this.position.add(this.velocity);
                this.edges();
            }

            display() {
                this.p.noStroke();
                this.p.fill(p.color(255, 20, 147)); 
                this.p.circle(this.position.x, this.position.y, this.size * 2);
            }

            edges() {
                if (this.position.x < 0 || this.position.x > this.p.width) {
                    this.velocity.x *= -1;
                }
                if (this.position.y < 0 || this.position.y > this.p.height) {
                    this.velocity.y *= -1;
                }
            }
        }
    };

    useEffect(() => {
        new p5(Sketch);
    }, []);

    return <div id="particle-background" className="particle-background"></div>;
};

export default Background;