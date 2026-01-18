import React, { useMemo } from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

/**
 * DimensionTransition - Animates from 0D (point) to 4D (tesseract)
 *
 * Shows the beautiful emergence of dimensions:
 * 0D: A single point
 * 1D: Point stretches into a line
 * 2D: Line extrudes into a square
 * 3D: Square extrudes into a cube
 * 4D: Cube extrudes into a tesseract
 *
 * @param {number} dimension - Value from 0 to 4 (can be fractional for smooth animation)
 * @param {string} color - Primary color
 * @param {number} scale - Size multiplier
 */
function DimensionTransition({
  dimension = 4,
  color = '#ffaf00',
  secondaryColor = '#3c7f72',
  scale = 1.5,
  lineWidth = 3
}) {
  // Clamp dimension to valid range
  const dim = Math.max(0, Math.min(4, dimension));

  // Calculate geometry based on dimension
  const { vertices, edges } = useMemo(() => {
    const verts = [];
    const edgeList = [];

    // Fractional parts for smooth transitions
    const d0 = Math.min(1, dim); // 0->1: point to line
    const d1 = Math.max(0, Math.min(1, dim - 1)); // 1->2: line to square
    const d2 = Math.max(0, Math.min(1, dim - 2)); // 2->3: square to cube
    const d3 = Math.max(0, Math.min(1, dim - 3)); // 3->4: cube to tesseract

    // Helper to add a vertex
    const addVertex = (x, y, z, w) => {
      verts.push([x * scale, y * scale, z * scale, w * scale]);
      return verts.length - 1;
    };

    // 0D: Single point at origin
    if (dim <= 0) {
      addVertex(0, 0, 0, 0);
      return { vertices: verts, edges: edgeList };
    }

    // 1D: Line (extends along x-axis)
    const x0 = addVertex(-d0, 0, 0, 0);
    const x1 = addVertex(d0, 0, 0, 0);
    if (dim >= 0.1) edgeList.push([x0, x1]);

    if (dim <= 1) {
      return { vertices: verts, edges: edgeList };
    }

    // 2D: Square (extends along y-axis)
    const y0 = addVertex(-1, -d1, 0, 0);
    const y1 = addVertex(1, -d1, 0, 0);
    const y2 = addVertex(-1, d1, 0, 0);
    const y3 = addVertex(1, d1, 0, 0);

    if (dim >= 1.1) {
      // Connect to form square
      edgeList.length = 0; // Clear previous edges
      edgeList.push([y0, y1]); // bottom
      edgeList.push([y2, y3]); // top
      edgeList.push([y0, y2]); // left
      edgeList.push([y1, y3]); // right
    }

    if (dim <= 2) {
      return { vertices: verts, edges: edgeList };
    }

    // 3D: Cube (extends along z-axis)
    const z0 = addVertex(-1, -1, -d2, 0);
    const z1 = addVertex(1, -1, -d2, 0);
    const z2 = addVertex(-1, 1, -d2, 0);
    const z3 = addVertex(1, 1, -d2, 0);
    const z4 = addVertex(-1, -1, d2, 0);
    const z5 = addVertex(1, -1, d2, 0);
    const z6 = addVertex(-1, 1, d2, 0);
    const z7 = addVertex(1, 1, d2, 0);

    if (dim >= 2.1) {
      edgeList.length = 0;
      // Front face
      edgeList.push([z0, z1], [z1, z3], [z3, z2], [z2, z0]);
      // Back face
      edgeList.push([z4, z5], [z5, z7], [z7, z6], [z6, z4]);
      // Connecting edges
      edgeList.push([z0, z4], [z1, z5], [z2, z6], [z3, z7]);
    }

    if (dim <= 3) {
      return { vertices: verts, edges: edgeList };
    }

    // 4D: Tesseract (extends along w-axis)
    // Inner cube (w = -d3)
    const w0 = addVertex(-1, -1, -1, -d3);
    const w1 = addVertex(1, -1, -1, -d3);
    const w2 = addVertex(-1, 1, -1, -d3);
    const w3 = addVertex(1, 1, -1, -d3);
    const w4 = addVertex(-1, -1, 1, -d3);
    const w5 = addVertex(1, -1, 1, -d3);
    const w6 = addVertex(-1, 1, 1, -d3);
    const w7 = addVertex(1, 1, 1, -d3);
    // Outer cube (w = +d3)
    const w8 = addVertex(-1, -1, -1, d3);
    const w9 = addVertex(1, -1, -1, d3);
    const w10 = addVertex(-1, 1, -1, d3);
    const w11 = addVertex(1, 1, -1, d3);
    const w12 = addVertex(-1, -1, 1, d3);
    const w13 = addVertex(1, -1, 1, d3);
    const w14 = addVertex(-1, 1, 1, d3);
    const w15 = addVertex(1, 1, 1, d3);

    if (dim >= 3.1) {
      edgeList.length = 0;
      // Inner cube
      edgeList.push([w0, w1], [w0, w2], [w0, w4], [w1, w3], [w1, w5], [w2, w3], [w2, w6], [w3, w7]);
      edgeList.push([w4, w5], [w4, w6], [w5, w7], [w6, w7]);
      // Outer cube
      edgeList.push([w8, w9], [w8, w10], [w8, w12], [w9, w11], [w9, w13], [w10, w11], [w10, w14], [w11, w15]);
      edgeList.push([w12, w13], [w12, w14], [w13, w15], [w14, w15]);
      // Connecting edges through 4th dimension
      edgeList.push([w0, w8], [w1, w9], [w2, w10], [w3, w11], [w4, w12], [w5, w13], [w6, w14], [w7, w15]);
    }

    return { vertices: verts, edges: edgeList };
  }, [dim, scale]);

  // Project 4D vertices to 3D (simple perspective projection)
  const projectedVertices = useMemo(() => {
    return vertices.map(v => {
      const [x, y, z, w] = v;
      const perspective = 2.5 / (2.5 - w * 0.5);
      return new THREE.Vector3(x * perspective, y * perspective, z * perspective);
    });
  }, [vertices]);

  // Create edge lines
  const edgeLines = useMemo(() => {
    return edges.map(([i, j]) => [projectedVertices[i], projectedVertices[j]]);
  }, [edges, projectedVertices]);

  return (
    <group>
      {/* Main edges */}
      {edgeLines.map((points, index) => (
        <Line
          key={`edge-${index}`}
          points={points}
          color={color}
          lineWidth={lineWidth}
          transparent
          opacity={0.9}
        />
      ))}

      {/* Glow effect */}
      {edgeLines.map((points, index) => (
        <Line
          key={`glow-${index}`}
          points={points}
          color={color}
          lineWidth={lineWidth * 2}
          transparent
          opacity={0.2}
        />
      ))}

      {/* Vertex spheres */}
      {projectedVertices.map((pos, index) => (
        <mesh key={`vertex-${index}`} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Dimension label in center */}
      <mesh position={[0, -2.2, 0]}>
        <sphereGeometry args={[0.02, 4, 4]} />
        <meshBasicMaterial color={secondaryColor} transparent opacity={0} />
      </mesh>
    </group>
  );
}

export default DimensionTransition;
