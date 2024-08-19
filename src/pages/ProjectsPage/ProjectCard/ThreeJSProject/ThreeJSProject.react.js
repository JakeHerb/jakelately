import React, { useState, useEffect, useRef, useMemo } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './ThreeJSProject.css';

// Viewport/cursor state logic 
// https://tornis.robbowen.digital/

const IS_MOBILE_THRESHOLD = 600;

function ThreeJSProject() {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [selectedModel, setSelectedModel] = useState('cube');
  const [backgroundType, setBackgroundType] = useState('space'); // State for background type
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State for menu visibility

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle function

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas style={{ backgroundColor }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />

        {/* Conditional rendering of background type */}
        {backgroundType === 'space' && <StarryBackground />}

        {/* Conditional rendering of selected 3D model */}
        {selectedModel === 'cube' && <Cube rotating={false} velX={.1} />}
        {selectedModel === 'sphere' && <HollowSphere rotating={false} />}
      </Canvas>

      {/* Menu Wrapper */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: isMenuOpen ? '5%' : '-220px', // Instantly switch position when toggling
        display: isMenuOpen ? 'flex' : 'none', // No animation, just appear/disappear
        flexDirection: 'column',
        gap: '20px',
        zIndex: 1000,
        backgroundColor: isMenuOpen ? 'rgba(0, 0, 0, 0.7)' : 'transparent', // Semi-transparent when open
        padding: isMenuOpen ? '20px' : '0', // Padding only when open
        borderRadius: '10px', // Rounded corners
        width: '200px', // Fixed width
      }}>
        <div>
          <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Background Colors</h4>
          <ColorToggleButtons setColor={setBackgroundColor} />
        </div>

        <div>
          <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Models</h4>
          <ModelToggleButtons setSelectedModel={setSelectedModel} />
        </div>

        <div>
          <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Background Type</h4>
          <BackgroundToggle setBackgroundType={setBackgroundType} />
        </div>
      </div>

      {/* Collapse Button */}
      <button
        onClick={toggleMenu}
        style={{
          position: 'fixed',
          top: '10%',
          right: '5%',
          padding: '10px',
          backgroundColor: '#3c7f72',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          zIndex: 1001, // Ensures button stays above everything
        }}
      >
        {isMenuOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
}

/* Starry Background Component */
function StarryBackground() {
  const starMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color('#ff0000') },
      color2: { value: new THREE.Color('#0000ff') },
    },
    vertexShader: `
      varying vec3 vColor;
      uniform float time;
      void main() {
        vColor = mix(color1, color2, (sin(time + position.x + position.y) + 1.0) / 2.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float intensity = abs(sin(gl_FragCoord.y * 0.1 + time * 10.0)) * 0.8 + 0.2;
        gl_FragColor = vec4(vColor * intensity, 1.0);
      }
    `,
  }), []);

  useFrame((state, delta) => {
    starMaterial.uniforms.time.value += delta;
  });

  return (
    <Stars 
      radius={100} 
      depth={150} 
      count={5000} 
      factor={15} 
      saturation={1} 
      fade 
      speed={1.5} 
      material={starMaterial}  
    />
  );
}

/* Background Type Toggle Section */
function BackgroundToggle({ setBackgroundType }) {
  return (
    <div style={{ display: 'flex', gap: '10px', paddingLeft: '10px' }}>
      <button onClick={() => setBackgroundType('space')} style={buttonStyle}>
        Space
      </button>
      <button onClick={() => setBackgroundType('no space')} style={buttonStyle}>
        No Space
      </button>
    </div>
  );
}

/* Button Style (Customizable) */
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3c7f72',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

/* Cube Component */
function Cube({ rotating, velX, velY }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (rotating) {
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.x += delta;
    }
    if (velX) {
      meshRef.current.positionX += delta * 10;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'#ffaf00'} />
      </mesh>
    </group>
  );
}

/* Hollow Sphere Component */
function HollowSphere({ rotating }) {
  const meshRef = useRef();

  useFrame(() => {
    if (rotating) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color={'#3c7f72'} />
    </mesh>
  );
}

/* MiniCanvas Component for Model Buttons */
function MiniCanvas({ children, onClick }) {
  return (
    <Canvas
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
      camera={{ position: [3, 3, 3], fov: 45 }} // Adjusted camera position and fov
      onClick={onClick}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      {children}
    </Canvas>
  );
}

/* Model Toggle Buttons Section */
function ModelToggleButtons({ setSelectedModel }) {
  const isMobile = useIsMobile(IS_MOBILE_THRESHOLD);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      paddingLeft: '20px',
      width: '100%',
    }}>
      <MiniCanvas onClick={() => setSelectedModel('cube')}>
        <Cube rotating />
      </MiniCanvas>
      <MiniCanvas onClick={() => setSelectedModel('sphere')}>
        <HollowSphere rotating />
      </MiniCanvas>
    </div>
  );
}

/* Color Toggle Buttons Section */
function ColorToggleButtons({ setColor }) {
  const isMobile = useIsMobile(IS_MOBILE_THRESHOLD);
  const colors = ['#ffaf00', '#D34A24', '#ff9100', '#3c7f72', '#011329', '#f5efe6'];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',  // Fixed 2-column layout
      justifyContent: "center",
      gap: '10px',
      paddingLeft: '20px',
      maxWidth: '100%',  // Prevent spreading out when other controls expand
    }}>
      {colors.map((color) => (
        <ColorButton
          key={color}
          color={color}
          isMobile={isMobile}
          setColor={setColor}
        />
      ))}
    </div>
  );
}

/* Color Button Component */
function ColorButton({ color, isMobile, setColor }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const size = isMobile ? '30px' : '40px';
  const scale = hovered ? 1.2 : 1;

  return (
    <button
      onClick={() => setColor(color)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transform: `scale(${scale})`,
        transition: 'transform 0.2s ease-in-out',
      }}
    />
  );
}

/* Hook to detect mobile screens */
function useIsMobile(breakpoint = 480) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}

export default ThreeJSProject;
