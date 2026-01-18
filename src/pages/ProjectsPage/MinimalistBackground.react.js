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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Updated colors to match site theme (more subtle)
  const colors = ['#ffaf00', '#3c7f72', '#D34A24', '#3c7f72', '#ffaf00', '#3c7f72'];

  // Particle setup - reduced count for subtlety
  const particlePositions = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 300; i++) {
      const x = THREE.MathUtils.randFloatSpread(25);
      const y = THREE.MathUtils.randFloatSpread(25);
      const z = THREE.MathUtils.randFloatSpread(25);
      particles.push(x, y, z);
    }
    return new Float32Array(particles);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Slower, more subtle rotations
    cubeRef.current.rotation.x = t * 0.15;
    cubeRef.current.rotation.y = t * 0.2;
    cubeRef.current.position.y = Math.sin(t * 0.5) * 0.3;

    sphereRef.current.rotation.x = -t * 0.1;
    sphereRef.current.rotation.z = t * 0.15;
    sphereRef.current.position.y = Math.cos(t * 0.5) * 0.3;

    tetrahedronRef.current.rotation.x = t * 0.2;
    tetrahedronRef.current.rotation.y = t * 0.25;

    torusRef.current.rotation.x = -t * 0.15;
    torusRef.current.rotation.y = t * 0.3;

    // Slower color cycling
    const colorIndex = Math.floor((t * 0.2) % colors.length);
    cubeRef.current.material.color.set(colors[colorIndex]);
    sphereRef.current.material.color.set(colors[(colorIndex + 1) % colors.length]);

    // Subtle light pulsing
    lightRef.current.intensity = 0.4 + Math.sin(t * 2) * 0.2;
  });

  return (
    <>
      {/* Floating Cube - golden */}
      <mesh ref={cubeRef} position={isMobile ? [2, 3, -2] : [-3, 1, -1]} castShadow>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <MeshWobbleMaterial speed={0.5} factor={0.2} color="#ffaf00" transparent opacity={0.6} />
      </mesh>

      {/* Floating Sphere - teal */}
      <mesh ref={sphereRef} position={isMobile ? [-2, -2, -1] : [3.5, 0.5, -1]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshWobbleMaterial speed={0.4} factor={0.2} color="#3c7f72" transparent opacity={0.6} />
      </mesh>

      {/* Floating Tetrahedron - coral */}
      <mesh ref={tetrahedronRef} position={isMobile ? [1.5, -3, -1] : [-2, -2.5, -1]} castShadow>
        <tetrahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#D34A24" transparent opacity={0.5} />
      </mesh>

      {/* Floating Torus Knot - teal */}
      <mesh ref={torusRef} position={isMobile ? [-1.5, 2, -1] : [2, -2, -1]} castShadow>
        <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
        <meshStandardMaterial color="#3c7f72" transparent opacity={0.5} />
      </mesh>

      {/* Particles - subtle teal */}
      <Points positions={particlePositions}>
        <pointsMaterial size={0.03} color="#3c7f72" transparent opacity={0.4} />
      </Points>

      {/* Plane for shadow */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.1} />
      </mesh>

      {/* Subtle lighting */}
      <directionalLight ref={lightRef} position={[5, 10, 5]} castShadow intensity={0.5} />
    </>
  );
}

function MinimalistBackground() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 45 }}
      shadows
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.3} />
      <FloatingShapes />
    </Canvas>
  );
}

export default MinimalistBackground;
