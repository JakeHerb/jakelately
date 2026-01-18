/**
 * Polytopes - 4D Shape Definitions
 *
 * Contains vertex and edge data for various 4D polytopes (4-dimensional shapes).
 * Each polytope is defined by its vertices in 4D space and edges connecting them.
 */

/**
 * Tesseract (8-cell / Hypercube)
 * The 4D analog of a cube
 * 16 vertices, 32 edges, 24 faces, 8 cells
 */
export const tesseract = {
  name: 'Tesseract',
  description: 'The 4D hypercube - two cubes connected through the 4th dimension',
  vertices: [
    // Inner cube (w = -1)
    [-1, -1, -1, -1],
    [1, -1, -1, -1],
    [-1, 1, -1, -1],
    [1, 1, -1, -1],
    [-1, -1, 1, -1],
    [1, -1, 1, -1],
    [-1, 1, 1, -1],
    [1, 1, 1, -1],
    // Outer cube (w = 1)
    [-1, -1, -1, 1],
    [1, -1, -1, 1],
    [-1, 1, -1, 1],
    [1, 1, -1, 1],
    [-1, -1, 1, 1],
    [1, -1, 1, 1],
    [-1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  edges: [
    // Inner cube edges
    [0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7],
    [4, 5], [4, 6], [5, 7], [6, 7],
    // Outer cube edges
    [8, 9], [8, 10], [8, 12], [9, 11], [9, 13], [10, 11], [10, 14], [11, 15],
    [12, 13], [12, 14], [13, 15], [14, 15],
    // Connecting edges (through 4th dimension)
    [0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 15]
  ],
  innerEdges: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Indices of inner cube edges
  outerEdges: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], // Outer cube edges
  connectingEdges: [24, 25, 26, 27, 28, 29, 30, 31] // 4D connecting edges
};

/**
 * 16-cell (Hexadecachoron)
 * The 4D analog of an octahedron
 * 8 vertices, 24 edges
 */
export const cell16 = {
  name: '16-cell',
  description: 'The 4D octahedron - crystalline and pointy',
  vertices: [
    [1, 0, 0, 0],
    [-1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, -1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, -1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, -1],
  ],
  edges: [
    // Every vertex connects to every other vertex except its opposite
    [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7],
    [2, 4], [2, 5], [2, 6], [2, 7],
    [3, 4], [3, 5], [3, 6], [3, 7],
    [4, 6], [4, 7],
    [5, 6], [5, 7],
  ]
};

/**
 * 24-cell (Icositetrachoron)
 * Unique to 4D - no 3D analog!
 * 24 vertices, 96 edges
 * Self-dual and incredibly beautiful
 */
export const cell24 = {
  name: '24-cell',
  description: 'Unique to 4D! No 3D analog exists - self-dual and mesmerizing',
  vertices: (() => {
    const verts = [];
    // 8 vertices from 16-cell
    const signs = [1, -1];
    for (const s of signs) {
      verts.push([s, 0, 0, 0]);
      verts.push([0, s, 0, 0]);
      verts.push([0, 0, s, 0]);
      verts.push([0, 0, 0, s]);
    }
    // 16 vertices from tesseract (scaled)
    const half = 0.5;
    for (const sx of signs) {
      for (const sy of signs) {
        for (const sz of signs) {
          for (const sw of signs) {
            verts.push([sx * half, sy * half, sz * half, sw * half]);
          }
        }
      }
    }
    return verts;
  })(),
  edges: (() => {
    const edges = [];
    const verts = [];
    const signs = [1, -1];

    // Recreate vertices for edge calculation
    for (const s of signs) {
      verts.push([s, 0, 0, 0]);
      verts.push([0, s, 0, 0]);
      verts.push([0, 0, s, 0]);
      verts.push([0, 0, 0, s]);
    }
    const half = 0.5;
    for (const sx of signs) {
      for (const sy of signs) {
        for (const sz of signs) {
          for (const sw of signs) {
            verts.push([sx * half, sy * half, sz * half, sw * half]);
          }
        }
      }
    }

    // Calculate edges (vertices at distance 1 are connected)
    for (let i = 0; i < verts.length; i++) {
      for (let j = i + 1; j < verts.length; j++) {
        const dx = verts[j][0] - verts[i][0];
        const dy = verts[j][1] - verts[i][1];
        const dz = verts[j][2] - verts[i][2];
        const dw = verts[j][3] - verts[i][3];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
        if (Math.abs(dist - 1) < 0.01) {
          edges.push([i, j]);
        }
      }
    }
    return edges;
  })()
};

/**
 * 5-cell (Pentachoron / 4-Simplex)
 * The 4D analog of a tetrahedron
 * 5 vertices, 10 edges
 * The simplest 4D polytope
 */
export const cell5 = {
  name: '5-cell',
  description: 'The 4D tetrahedron - the simplest 4D shape',
  vertices: (() => {
    // Vertices of a regular 5-cell (scaled for display)
    return [
      [1, 1, 1, -1 / Math.sqrt(5)].map(x => x * 0.8),
      [1, -1, -1, -1 / Math.sqrt(5)].map(x => x * 0.8),
      [-1, 1, -1, -1 / Math.sqrt(5)].map(x => x * 0.8),
      [-1, -1, 1, -1 / Math.sqrt(5)].map(x => x * 0.8),
      [0, 0, 0, Math.sqrt(5) - 1 / Math.sqrt(5)].map(x => x * 0.8),
    ];
  })(),
  edges: [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 2], [1, 3], [1, 4],
    [2, 3], [2, 4],
    [3, 4]
  ]
};

/**
 * 120-cell (Hecatonicosachoron)
 * The 4D analog of a dodecahedron
 * 600 vertices, 1200 edges
 * Incredibly complex and beautiful
 *
 * Note: We use a simplified version with key vertices for performance
 */
export const cell120 = {
  name: '120-cell',
  description: 'The 4D dodecahedron - 600 vertices of mathematical beauty',
  vertices: (() => {
    // Simplified 120-cell with representative vertices
    // Full 120-cell has 600 vertices - we show a subset for performance
    const verts = [];

    // Even permutations of (0, 0, 2, 2)
    const coords2 = [[0, 0, 2, 2], [0, 2, 0, 2], [0, 2, 2, 0], [2, 0, 0, 2], [2, 0, 2, 0], [2, 2, 0, 0]];
    for (const c of coords2) {
      for (const s1 of [1, -1]) {
        for (const s2 of [1, -1]) {
          verts.push([c[0] * s1 * 0.5, c[1] * s1 * 0.5, c[2] * s2 * 0.5, c[3] * s2 * 0.5]);
        }
      }
    }

    // Even permutations of (1, 1, 1, √5)
    const sqrt5 = Math.sqrt(5);
    const coords5 = [
      [1, 1, 1, sqrt5], [1, 1, sqrt5, 1], [1, sqrt5, 1, 1], [sqrt5, 1, 1, 1]
    ];
    for (const c of coords5) {
      for (const s1 of [1, -1]) {
        for (const s2 of [1, -1]) {
          for (const s3 of [1, -1]) {
            for (const s4 of [1, -1]) {
              verts.push([c[0] * s1 * 0.4, c[1] * s2 * 0.4, c[2] * s3 * 0.4, c[3] * s4 * 0.4]);
            }
          }
        }
      }
    }

    // Limit to first 120 vertices for performance
    return verts.slice(0, 120);
  })(),
  edges: (() => {
    // Generate edges by connecting close vertices
    const verts = [];
    const sqrt5 = Math.sqrt(5);

    const coords2 = [[0, 0, 2, 2], [0, 2, 0, 2], [0, 2, 2, 0], [2, 0, 0, 2], [2, 0, 2, 0], [2, 2, 0, 0]];
    for (const c of coords2) {
      for (const s1 of [1, -1]) {
        for (const s2 of [1, -1]) {
          verts.push([c[0] * s1 * 0.5, c[1] * s1 * 0.5, c[2] * s2 * 0.5, c[3] * s2 * 0.5]);
        }
      }
    }

    const coords5 = [[1, 1, 1, sqrt5], [1, 1, sqrt5, 1], [1, sqrt5, 1, 1], [sqrt5, 1, 1, 1]];
    for (const c of coords5) {
      for (const s1 of [1, -1]) {
        for (const s2 of [1, -1]) {
          for (const s3 of [1, -1]) {
            for (const s4 of [1, -1]) {
              verts.push([c[0] * s1 * 0.4, c[1] * s2 * 0.4, c[2] * s3 * 0.4, c[3] * s4 * 0.4]);
            }
          }
        }
      }
    }

    const limitedVerts = verts.slice(0, 120);
    const edges = [];

    // Connect vertices that are close together
    for (let i = 0; i < limitedVerts.length; i++) {
      for (let j = i + 1; j < limitedVerts.length; j++) {
        const dx = limitedVerts[j][0] - limitedVerts[i][0];
        const dy = limitedVerts[j][1] - limitedVerts[i][1];
        const dz = limitedVerts[j][2] - limitedVerts[i][2];
        const dw = limitedVerts[j][3] - limitedVerts[i][3];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
        if (dist < 0.8) {
          edges.push([i, j]);
        }
      }
    }
    return edges;
  })()
};

/**
 * Get all available polytopes
 */
export const polytopes = {
  tesseract,
  cell16,
  cell24,
  cell5,
  cell120
};

/**
 * Get polytope by name
 */
export function getPolytope(name) {
  return polytopes[name] || tesseract;
}

/**
 * Get list of polytope names for UI
 */
export function getPolytopeNames() {
  return Object.keys(polytopes);
}

/**
 * Get polytope info for display
 */
export function getPolytopeInfo() {
  return Object.entries(polytopes).map(([key, poly]) => ({
    id: key,
    name: poly.name,
    description: poly.description,
    vertexCount: poly.vertices.length,
    edgeCount: poly.edges.length
  }));
}

export default polytopes;
