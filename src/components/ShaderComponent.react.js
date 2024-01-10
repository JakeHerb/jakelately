import React, { useRef, useEffect } from 'react';
import './css/ShaderComponent.css';

const ShaderComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('WebGL not supported in this browser.');
      return;
    }

    // Vertex Shader (For a fullscreen quad)
    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

    // Fragment Shader (Adapted from ShaderToy)
    const fsSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;

        // Time varying pixel color
        vec3 col = 0.5 + 0.5*cos(u_time+uv.xyx+vec3(0,2,4));                                                                                                                                                                                                                                                                                                                                                                                                                                                         // https://www.shadertoy.com/view/ddlSRn
        
        // Output to screen 
        gl_FragColor = vec4(col,1.0);  
      }
    `;

    // Compile shaders
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // Check if shaders compiled successfully
    if (!vertexShader || !fragmentShader) {
        return;
    }

    // Link shaders into a program
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return;
    }

    // Create a buffer for the fullscreen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Positions for a fullscreen quad (Two triangles)
    const positions = [
      -1.0,  1.0,
      -1.0, -1.0,
       1.0,  1.0,
       1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Get uniform locations
    const timeLoc = gl.getUniformLocation(shaderProgram, 'u_time');
    const resolutionLoc = gl.getUniformLocation(shaderProgram, 'u_resolution');

    let startTime = Date.now();

    const render = () => {
        gl.useProgram(shaderProgram); // Move useProgram to the beginning of the render function
      
        // Update uniforms
        gl.uniform1f(timeLoc, (Date.now() - startTime) / 1000.0);
        gl.uniform2f(resolutionLoc, gl.canvas.width, gl.canvas.height);
      
        gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
        gl.clear(gl.COLOR_BUFFER_BIT);
      
        // Set the positions attribute
        const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
        gl.enableVertexAttribArray(vertexPosition);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);
      
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
        requestAnimationFrame(render);
      };

    render();
  }, []);

  const loadShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
  
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('An error occurred compiling the shader: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
  
    return shader;
  };

  return <canvas ref={canvasRef} className="shader-canvas"></canvas>;
};

export default ShaderComponent;