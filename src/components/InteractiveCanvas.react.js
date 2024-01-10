import React, { useEffect } from 'react';
import './css/InteractiveCanvas.css';

const InteractiveCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: undefined,
      y: undefined
    }

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Circle {
      constructor(x, y, radius, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.vx = -this.vx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;

        // Interactivity with mouse
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50) {
          if (this.radius < 40) {
            this.radius += 1;
          }
        } else if (this.radius > 2) {
          this.radius -= 1;
        }

        this.draw();
      }
    }

    let circles = [];
    for (let i = 0; i < 500; i++) {
      let radius = Math.random() * 5 + 1;
      let x = Math.random() * (window.innerWidth - radius * 2) + radius;
      let y = Math.random() * (window.innerHeight - radius * 2) + radius;
      let vx = (Math.random() - 0.5) * 2;
      let vy = (Math.random() - 0.5) * 2;
      let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
      circles.push(new Circle(x, y, radius, vx, vy, color));
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let circle of circles) {
        circle.update();
      }
    }

    animate();
  }, []);

  return <canvas id="myCanvas"></canvas>;
};

export default InteractiveCanvas;