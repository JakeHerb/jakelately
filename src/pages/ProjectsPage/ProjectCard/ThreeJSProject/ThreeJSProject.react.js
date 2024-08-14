import React, {useState, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'
import './ThreeJSProject.css';

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
        {selectedModel === 'cube' && <Cube />}
        {selectedModel === 'sphere' && <Sphere />}
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
  
function ModelToggleButtons({ setSelectedModel }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '10px',
    }}>
      <button
        onClick={() => setSelectedModel('cube')}
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#ffaf00',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
      />
      <button
        onClick={() => setSelectedModel('sphere')}
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#3c7f72',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}

function Cube() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'#ffaf00'} />
    </mesh>
  );
}

function Sphere() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color={'#3c7f72'} />
    </mesh>
  );
}


  function ColorToggleButtons({ setColor }) {
    const isMobile = useIsMobile(600);
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
        onTouchStart={handleMouseEnter} // Handle touch events for mobile
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
          transition: 'transform 0.2s ease-in-out', // Smooth transition
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