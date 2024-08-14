import React, { useState, useEffect, useRef, useMemo } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './ThreeJSProject.css';

const IS_MOBILE_THRESHOLD = 600;

function ThreeJSProject() {
  const [backgroundColor, setBackgroundColor] = useState('#ff9100');
  const [selectedModel, setSelectedModel] = useState('cube'); // Default model is a cube

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Canvas for 3D Scene */}
      <Canvas style={{ backgroundColor }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
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
      </div>
    </div>
  );
}

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
      {/* Outer cube for thicker lines */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'#ffaf00'} wireframe />
      </mesh>
      {/* Inner cube for base wireframe */}
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
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '10px',
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
