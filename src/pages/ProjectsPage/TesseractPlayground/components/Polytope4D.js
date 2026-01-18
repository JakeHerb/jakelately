import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { rotate4D, project4Dto3D, getDepthIntensity } from '../utils/hypermath';
import { getPolytope } from '../utils/polytopes';

/**
 * Polytope4D - Renders any 4D polytope projected into 3D space
 *
 * Takes rotation angles and projects the 4D shape into 3D with beautiful glowing edges.
 */
function Polytope4D({
  polytopeName = 'tesseract',
  rotationAngles = { xw: 0, yw: 0, zw: 0 },
  scale = 1.5,
  color = '#ffaf00',
  secondaryColor = '#3c7f72',
  lineWidth = 3,
  glowIntensity = 1,
  showVertices = true,
  autoRotate = false,
  autoRotateSpeed = 0.3
}) {
  const groupRef = useRef();
  const timeRef = useRef(0);

  // Get the polytope data
  const polytope = useMemo(() => getPolytope(polytopeName), [polytopeName]);

  // Calculate projected vertices and edges
  const { projectedEdges, projectedVertices } = useMemo(() => {
    const angles = { ...rotationAngles };

    // Rotate all vertices
    const rotatedVertices = polytope.vertices.map(v =>
      rotate4D(v, angles)
    );

    // Project to 3D
    const projected = rotatedVertices.map(v => project4Dto3D(v, 2.5));

    // Get depth values for coloring
    const depths = rotatedVertices.map(v => v[3]); // w coordinate

    // Create edge data with depth info
    const edges = polytope.edges.map(([i, j]) => {
      const start = projected[i];
      const end = projected[j];
      const avgDepth = (depths[i] + depths[j]) / 2;
      return {
        points: [
          new THREE.Vector3(start[0] * scale, start[1] * scale, start[2] * scale),
          new THREE.Vector3(end[0] * scale, end[1] * scale, end[2] * scale)
        ],
        depth: avgDepth,
        intensity: getDepthIntensity(avgDepth)
      };
    });

    // Vertex positions for particles
    const vertices = projected.map((v, i) => ({
      position: new THREE.Vector3(v[0] * scale, v[1] * scale, v[2] * scale),
      depth: depths[i],
      intensity: getDepthIntensity(depths[i])
    }));

    return {
      projectedEdges: edges,
      projectedVertices: vertices
    };
  }, [polytope, rotationAngles, scale]);

  // Auto-rotation animation
  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      timeRef.current += delta * autoRotateSpeed;
      // The parent component should update rotationAngles for smooth 4D rotation
    }
  });

  // Color interpolation based on depth
  const getEdgeColor = (depth) => {
    // Interpolate between secondary (far) and primary (near) colors
    const t = (depth + 1.5) / 3; // Normalize depth to 0-1
    const primaryColor = new THREE.Color(color);
    const secondary = new THREE.Color(secondaryColor);
    return primaryColor.lerp(secondary, 1 - t);
  };

  return (
    <group ref={groupRef}>
      {/* Render edges with depth-based coloring */}
      {projectedEdges.map((edge, index) => (
        <Line
          key={`edge-${index}`}
          points={edge.points}
          color={getEdgeColor(edge.depth)}
          lineWidth={lineWidth * edge.intensity}
          transparent
          opacity={0.6 + edge.intensity * 0.4}
        />
      ))}

      {/* Render glowing edge overlay for bloom effect */}
      {projectedEdges.map((edge, index) => (
        <Line
          key={`glow-${index}`}
          points={edge.points}
          color={color}
          lineWidth={lineWidth * 0.5 * edge.intensity * glowIntensity}
          transparent
          opacity={0.3 * edge.intensity}
        />
      ))}

      {/* Render vertex particles */}
      {showVertices && projectedVertices.map((vertex, index) => (
        <mesh key={`vertex-${index}`} position={vertex.position}>
          <sphereGeometry args={[0.04 * vertex.intensity + 0.02, 8, 8]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.5 + vertex.intensity * 0.5}
          />
        </mesh>
      ))}

      {/* Center glow sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

export default Polytope4D;
