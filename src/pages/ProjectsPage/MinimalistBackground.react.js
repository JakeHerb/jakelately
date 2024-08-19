import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShapes() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const tetrahedronRef = useRef();
  const torusRef = useRef();
  const lightRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Update positions based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Randomized colors
  const colors = ['#ffaf00', '#3c7f72', '#ff9100', '#D34A24', '#ff44ff', '#00c9ff'];

  // Particle setup
  const particlePositions = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 500; i++) {
      const x = THREE.MathUtils.randFloatSpread(20);
      const y = THREE.MathUtils.randFloatSpread(20);
      const z = THREE.MathUtils.randFloatSpread(20);
      particles.push(x, y, z);
    }
    return new Float32Array(particles);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate and move the shapes
    cubeRef.current.rotation.x = t * 0.3;
    cubeRef.current.rotation.y = t * 0.3;
    cubeRef.current.position.y = Math.sin(t) * 0.5;

    sphereRef.current.rotation.x = -t * 0.2;
    sphereRef.current.rotation.z = t * 0.2;
    sphereRef.current.position.y = Math.cos(t) * 0.5;

    tetrahedronRef.current.rotation.x = t * 0.4;
    tetrahedronRef.current.rotation.y = t * 0.5;

    torusRef.current.rotation.x = -t * 0.3;
    torusRef.current.rotation.y = t * 0.6;

    // Pulsing random colors
    const colorIndex = Math.floor((t * 0.5) % colors.length);
    cubeRef.current.material.color.set(colors[colorIndex]);
    sphereRef.current.material.color.set(colors[(colorIndex + 1) % colors.length]);

    // Random light flashes
    lightRef.current.intensity = 0.5 + Math.sin(t * 5) * 0.5;
  });

  return (
    <>
      {/* Floating Cube */}
      <mesh ref={cubeRef} position={isMobile ? [1, 2, -1] : [-2, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <MeshWobbleMaterial speed={1} factor={0.3} />
      </mesh>

      {/* Floating Sphere */}
      <mesh ref={sphereRef} position={isMobile ? [-1.5, -1.5, 0] : [2.5, 0, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial speed={0.8} factor={0.3} />
      </mesh>

      {/* Floating Tetrahedron */}
      <mesh ref={tetrahedronRef} position={isMobile ? [1.5, -2, 0] : [-1.5, -2, 0]} castShadow>
        <tetrahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#D34A24" />
      </mesh>

      {/* Floating Torus Knot */}
      <mesh ref={torusRef} position={isMobile ?  [-1, -1.7, 1] : [1.5, -2, 0]} castShadow>
        <torusKnotGeometry args={[0.7, 0.3, 100, 16]} />
        <meshStandardMaterial color="#ff44ff" />
      </mesh>

      {/* Particles */}
      <Points positions={particlePositions}>
        <pointsMaterial size={0.05} color="#3c7f72" />
      </Points>

      {/* Plane for shadow */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.2} />
      </mesh>

      {/* Light */}
      <directionalLight ref={lightRef} position={[5, 10, 5]} castShadow intensity={1} />
    </>
  );
}

function MinimalistBackground() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      shadows
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    >
      <ambientLight intensity={0.4} />
      <FloatingShapes />
    </Canvas>
  );
}

export default MinimalistBackground;
