import React, { useState, useEffect, useRef, useMemo } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './ThreeJSProject.css';

const IS_MOBILE_THRESHOLD = 600;

function ThreeJSProject() {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [selectedModel, setSelectedModel] = useState('cube');
  const [backgroundType, setBackgroundType] = useState('space'); // New state for background type

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas style={{ backgroundColor }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />

        {backgroundType === 'space' && <StarryBackground />}

        {selectedModel === 'cube' && <HollowCube rotating={false} />}
        {selectedModel === 'sphere' && <HollowSphere rotating={false} />}
      </Canvas>

      {/* UI Controls */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 1000,
      }}>
        <ColorToggleButtons setColor={setBackgroundColor} />
        <ModelToggleButtons setSelectedModel={setSelectedModel} />
        <BackgroundToggle setBackgroundType={setBackgroundType} />
      </div>
    </div>
  );
}

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
      depth={50} 
      count={5000} 
      factor={15} 
      saturation={1} 
      fade 
      speed={1} 
      material={starMaterial}  
    />
  );
}

function NebulaClouds() {
  const particlesRef = useRef();
  const particleCount = 5000;

  // Generate random positions for the particles
  const positions = useMemo(() => {
    const posArray = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      posArray.push(x, y, z);
    }
    return new Float32Array(posArray);
  }, [particleCount]);

  useFrame((state, delta) => {
    // Animate the particles
    particlesRef.current.rotation.y += delta * 0.05;
  });

  return (
    <>
      <points ref={particlesRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={0.1}
          sizeAttenuation
          color={new THREE.Color('#ff44ff')}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <ambientLight intensity={0.2} color="#ff44ff" />
      <pointLight intensity={1} position={[5, 5, 5]} color="#ffffff" />
    </>
  );
}

function BackgroundToggle({ setBackgroundType }) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={() => setBackgroundType('space')} style={buttonStyle}>
        Space
      </button>
      <button onClick={() => setBackgroundType('no space')} style={buttonStyle}>
        No Space
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3c7f72',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

function HollowCube({ rotating }) {
  const meshRef = useRef();

  useFrame(() => {
    if (rotating) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <mesh scale={[1.02, 1.02, 1.02]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'#ffaf00'} wireframe />
      </mesh>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'#ffaf00'} wireframe />
      </mesh>
    </group>
  );
}

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
      <meshStandardMaterial color={'#3c7f72'} wireframe />
    </mesh>
  );
}

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

function ModelToggleButtons({ setSelectedModel }) {
  const isMobile = useIsMobile(IS_MOBILE_THRESHOLD);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '10px',
    }}>
      <MiniCanvas onClick={() => setSelectedModel('cube')}>
        <HollowCube rotating />
      </MiniCanvas>
      <MiniCanvas onClick={() => setSelectedModel('sphere')}>
        <HollowSphere rotating />
      </MiniCanvas>
    </div>
  );
}

function ColorToggleButtons({ setColor }) {
  const isMobile = useIsMobile(IS_MOBILE_THRESHOLD);
  const colors = ['#ffaf00', '#D34A24', '#ff9100', '#3c7f72', '#011329', '#f5efe6'];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',  // Fixed 2-column layout
      gap: '10px',
      maxWidth: '120px',  // Prevent spreading out when other controls expand
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
