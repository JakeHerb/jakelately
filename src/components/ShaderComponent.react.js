import React, { useRef, useEffect } from 'react';
import './css/ShaderComponent.css';

const ShaderComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    // Adjust the canvas size for high-resolution displays
    console.log("width: " + canvas.width);
    console.log("height: " + canvas.height);

    // Scale WebGL rendering to match the device pixel ratio
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

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

    // // Original Fragment Shader, Gradient
    // const fsSource = `
    //   precision mediump float;
    //   uniform float u_time;
    //   uniform vec2 u_resolution;

    //   void main() {
    //     vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    //     // Time varying pixel color
    //     vec3 col = 0.5 + 0.5*cos(u_time+uv.xyx+vec3(0,2,4));                                                                                                                                                                                                                                                                                                                                                                                                                                                         // https://www.shadertoy.com/view/ddlSRn
        
    //     // Output to screen 
    //     gl_FragColor = vec4(col,1.0);  
    //   }
    // `;

    // Neon Rain lines
    // const fsSource = `
    // precision mediump float;

    // uniform vec2 u_resolution; // Equivalent to iResolution
    // uniform float u_time; // Equivalent to iTime
    
    // #define FALLING_SPEED  0.01
    // #define STRIPES_FACTOR 1.0
    
    // // Get sphere function (adapted from ShaderToy)
    // float sphere(vec2 coord, vec2 pos, float r) {
    //     vec2 d = pos - coord; 
    //     return smoothstep(10.0, 0.0, dot(d, d) - r * r); // Adjusted for sharper edges
    // }
    
    // void main() {
    //     float waveLength = 1.0;
    //     float offset = 0.0;
    //     float fallingSpeed = FALLING_SPEED;
    //     vec2 fragCoord = gl_FragCoord.xy;
    //     // Normalize pixel coordinates
    //     vec2 uv = fragCoord / u_resolution;
    //     // Pixellize uv
    //     vec2 clamped_uv = (floor(fragCoord / STRIPES_FACTOR + 0.5) * STRIPES_FACTOR) / u_resolution;
    //     // Get pseudo-random value for stripe height
    //     float value = fract(sin(clamped_uv.x) * 43758.5453123);
    //     // Create stripes
    //     vec3 col = vec3(1.0 - mod(uv.y * 0.5 + (u_time * (fallingSpeed + value / 5.0)) + value, 0.5));
    //     // Add color
    //     col *= clamp(cos(u_time * 2.0 + uv.xyx + vec3(0, 2, 4)), 0.0, 1.0);
    //     // Add glowing ends
    //     col += vec3(sphere(fragCoord, vec2(clamped_uv.x, (1.0 - 2.0 * mod((u_time * (fallingSpeed + value / 5.0)) + value, 0.5))) * u_resolution, 0.9)) / 2.0; 
    //     // Add screen fade
    //     col *= vec3(exp(-pow(abs(uv.y - 0.5), 6.0) / pow(2.0 * 0.05, 2.0)));
    
    //     // Output to screen
    //     gl_FragColor = vec4(col, 1.0);
    // }
    // `;

    // Rainbow things
    const fsSource = `
        precision mediump float;
        uniform vec2 u_resolution; // Equivalent to iResolution
        uniform float u_time; // Equivalent to iTime
        
        #define EPS vec2(1e-4, 0.0)

        float time;

        vec3 rotateX(float a, vec3 v)
        {
            return vec3(v.x, cos(a) * v.y + sin(a) * v.z, cos(a) * v.z - sin(a) * v.y);
        }

        vec3 rotateY(float a, vec3 v)
        {
            return vec3(cos(a) * v.x + sin(a) * v.z, v.y, cos(a) * v.z - sin(a) * v.x);
        }

        float sphere(vec3 p, float r)
        {
            return length(p) - r;
        }

        float plane(vec3 p, vec4 n)
        {
            return dot(p, n.xyz) - n.w;
        }

        float sceneDist(vec3 p)
        {
            const int num_spheres = 32;

            float sd = 1e3;


            for(int i = 0; i < num_spheres; ++i)
            {
            float r = 0.22 * sqrt(float(i));
            vec3 p2 = rotateX(cos(time + float(i) * 0.2) * 0.15, p);
            float cd = -sphere(p2 + vec3(0.0, -0.9, 0.0), 1.3);
            sd = min(sd, max(abs(sphere(p2, r)), cd) - 1e-3);
            }

            return sd;
        }

        vec3 sceneNorm(vec3 p)
        {
            float d = sceneDist(p);
            return normalize(vec3(sceneDist(p + EPS.xyy) - d, sceneDist(p + EPS.yxy) - d,
                                    sceneDist(p + EPS.yyx) - d));
        }

        vec3 col(vec3 p)
        {
            float a = length(p) * 20.0;
            return vec3(0.5) + 0.5 * cos(vec3(a, a * 1.1, a * 1.2));
        }


        // ambient occlusion approximation (thanks to simesgreen)
        float ambientOcclusion(vec3 p, vec3 n)
        {
            const int steps = 4;
            const float delta = 0.5;

            float a = 0.0;
            float weight = 3.0;
            for(int i=1; i<=steps; i++) {
                float d = (float(i) / float(steps)) * delta; 
                a += weight*(d - sceneDist(p + n*d));
                weight *= 0.5;
            }
            return clamp(1.0 - a, 0.0, 1.0);
        }

        void main()
        {
            vec2 fragCoord = gl_FragCoord.xy;
            vec2 uv = fragCoord.xy / u_resolution.xy;
            vec2 t = uv * 2.0 - vec2(1.0);
            t.x *= u_resolution.x / u_resolution.y;
            
            time = u_time;
            
            vec3 ro = vec3(-0.4, sin(time * 2.0) * 0.05, 0.7), rd = rotateX(1.1, rotateY(0.5, normalize(vec3(t.xy, -0.8))));
            float f = 0.0;
            vec3 rp, n;
            
            for(int i = 0; i < 5; ++i)
            {
                rp = ro + rd * f;
                float d = sceneDist(rp);
                
                if(abs(d) < 1e-4)
                    break;
                
                f += d;
            }
            
            n = sceneNorm(rp);
            
            vec3 l = normalize(vec3(1.0, 1.0, -1.0));
            
            float ao = ambientOcclusion(rp, n);
            
            gl_FragColor.rgb = vec3(0.5 + 0.5 * clamp(dot(n, l), 0.0, 1.0)) * col(rp) * mix(0.1, 1.0, ao) * 1.6;
            gl_FragColor.a = 1.0;
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