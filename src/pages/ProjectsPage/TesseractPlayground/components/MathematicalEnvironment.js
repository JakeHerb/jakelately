import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, Line } from '@react-three/drei';
import * as THREE from 'three';

/**
 * MathematicalEnvironment - Sacred geometry and mathematical backgrounds
 *
 * Creates an immersive mathematical cosmos with:
 * - Sacred geometry patterns (Metatron's cube, flower of life)
 * - Distant floating polyhedra
 * - Geodesic framework
 * - Mathematical particle field
 */
function MathematicalEnvironment({
  primaryColor = '#ffaf00',
  secondaryColor = '#3c7f72',
  tertiaryColor = '#D34A24'
}) {
  const geodesicRef = useRef();
  const particlesRef = useRef();
  const polyhedraRef = useRef();

  // Generate geodesic dome vertices
  const geodesicVertices = useMemo(() => {
    const vertices = [];
    const radius = 15;

    // Icosahedron base vertices
    const t = (1 + Math.sqrt(5)) / 2;
    const icoVerts = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
    ];

    // Normalize and scale
    icoVerts.forEach(v => {
      const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
      vertices.push(
        (v[0] / len) * radius,
        (v[1] / len) * radius,
        (v[2] / len) * radius
      );
    });

    // Add more points by subdividing
    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      vertices.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }

    return new Float32Array(vertices);
  }, []);

  // Generate sacred geometry particles (flower of life pattern)
  const sacredParticles = useMemo(() => {
    const particles = [];

    // Flower of life circles
    for (let ring = 0; ring < 3; ring++) {
      const ringRadius = (ring + 1) * 2;
      const numPoints = 6 * (ring + 1);
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        // Create circle at each point
        for (let j = 0; j < 12; j++) {
          const circleAngle = (j / 12) * Math.PI * 2;
          const x = Math.cos(angle) * ringRadius + Math.cos(circleAngle) * 0.8;
          const y = Math.sin(angle) * ringRadius + Math.sin(circleAngle) * 0.8;
          const z = (Math.random() - 0.5) * 0.5 - 8; // Behind main view
          particles.push(x, y, z);
        }
      }
    }

    // Metatron's cube vertices
    const metatronRadius = 4;
    for (let i = 0; i < 13; i++) {
      const angle = (i / 6) * Math.PI;
      const r = i < 7 ? metatronRadius : metatronRadius * 0.5;
      particles.push(
        Math.cos(angle) * r,
        Math.sin(angle) * r + 5,
        -10
      );
    }

    // Random mathematical dust
    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 8 + Math.random() * 12;
      particles.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }

    return new Float32Array(particles);
  }, []);

  // Generate distant polyhedra positions
  const distantPolyhedra = useMemo(() => {
    const polyhedra = [];

    // Icosahedron positions
    for (let i = 0; i < 5; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 10 + Math.random() * 8;
      polyhedra.push({
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ],
        type: 'icosahedron',
        scale: 0.2 + Math.random() * 0.3,
        rotationSpeed: 0.1 + Math.random() * 0.2
      });
    }

    // Octahedron positions
    for (let i = 0; i < 4; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 8 + Math.random() * 10;
      polyhedra.push({
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ],
        type: 'octahedron',
        scale: 0.15 + Math.random() * 0.25,
        rotationSpeed: 0.15 + Math.random() * 0.2
      });
    }

    // Dodecahedron positions
    for (let i = 0; i < 3; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 12 + Math.random() * 6;
      polyhedra.push({
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ],
        type: 'dodecahedron',
        scale: 0.25 + Math.random() * 0.3,
        rotationSpeed: 0.08 + Math.random() * 0.15
      });
    }

    return polyhedra;
  }, []);

  // Metatron's cube lines
  const metatronLines = useMemo(() => {
    const lines = [];
    const radius = 3;
    const offset = [0, 4, -12];

    // Center point
    const center = offset;

    // 6 outer points
    const outerPoints = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      outerPoints.push([
        Math.cos(angle) * radius + offset[0],
        Math.sin(angle) * radius + offset[1],
        offset[2]
      ]);
    }

    // Connect all outer points to each other and to center
    for (let i = 0; i < 6; i++) {
      lines.push([center, outerPoints[i]]);
      for (let j = i + 1; j < 6; j++) {
        lines.push([outerPoints[i], outerPoints[j]]);
      }
    }

    return lines;
  }, []);

  // Animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate geodesic slowly
    if (geodesicRef.current) {
      geodesicRef.current.rotation.y = t * 0.02;
      geodesicRef.current.rotation.x = Math.sin(t * 0.01) * 0.1;
    }

    // Animate polyhedra
    if (polyhedraRef.current) {
      polyhedraRef.current.children.forEach((child, i) => {
        const poly = distantPolyhedra[i];
        if (poly) {
          child.rotation.x = t * poly.rotationSpeed;
          child.rotation.y = t * poly.rotationSpeed * 0.7;
        }
      });
    }
  });

  return (
    <group>
      {/* Geodesic dome framework */}
      <group ref={geodesicRef}>
        <Points positions={geodesicVertices}>
          <pointsMaterial
            size={0.08}
            color={secondaryColor}
            transparent
            opacity={0.4}
            sizeAttenuation
          />
        </Points>
      </group>

      {/* Sacred geometry particles */}
      <Points positions={sacredParticles} ref={particlesRef}>
        <pointsMaterial
          size={0.04}
          color={secondaryColor}
          transparent
          opacity={0.3}
          sizeAttenuation
        />
      </Points>

      {/* Metatron's cube */}
      {metatronLines.map((line, index) => (
        <Line
          key={`metatron-${index}`}
          points={line.map(p => new THREE.Vector3(...p))}
          color={primaryColor}
          lineWidth={1}
          transparent
          opacity={0.15}
        />
      ))}

      {/* Distant polyhedra */}
      <group ref={polyhedraRef}>
        {distantPolyhedra.map((poly, index) => (
          <mesh
            key={`poly-${index}`}
            position={poly.position}
            scale={poly.scale}
          >
            {poly.type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
            {poly.type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
            {poly.type === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
            <meshBasicMaterial
              color={index % 3 === 0 ? primaryColor : index % 3 === 1 ? secondaryColor : tertiaryColor}
              wireframe
              transparent
              opacity={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Ambient fog/glow at center */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial
          color={primaryColor}
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

export default MathematicalEnvironment;
