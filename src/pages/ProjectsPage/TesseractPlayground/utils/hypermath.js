/**
 * Hypermath - 4D Mathematics Utilities
 *
 * Functions for rotating points in 4D space and projecting them to 3D.
 * Used for rendering tesseracts, 24-cells, and other 4D polytopes.
 */

/**
 * Rotate a 4D point in the XW plane (x-axis vs 4th dimension)
 */
export function rotateXW(point, angle) {
  const [x, y, z, w] = point;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    x * cos - w * sin,
    y,
    z,
    x * sin + w * cos
  ];
}

/**
 * Rotate a 4D point in the YW plane (y-axis vs 4th dimension)
 */
export function rotateYW(point, angle) {
  const [x, y, z, w] = point;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    x,
    y * cos - w * sin,
    z,
    y * sin + w * cos
  ];
}

/**
 * Rotate a 4D point in the ZW plane (z-axis vs 4th dimension)
 */
export function rotateZW(point, angle) {
  const [x, y, z, w] = point;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    x,
    y,
    z * cos - w * sin,
    z * sin + w * cos
  ];
}

/**
 * Rotate a 4D point in the XY plane (standard 3D rotation around z)
 */
export function rotateXY(point, angle) {
  const [x, y, z, w] = point;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    x * cos - y * sin,
    x * sin + y * cos,
    z,
    w
  ];
}

/**
 * Rotate a 4D point in the XZ plane (standard 3D rotation around y)
 */
export function rotateXZ(point, angle) {
  const [x, y, z, w] = point;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    x * cos - z * sin,
    y,
    x * sin + z * cos,
    w
  ];
}

/**
 * Rotate a 4D point in the YZ plane (standard 3D rotation around x)
 */
export function rotateYZ(point, angle) {
  const [x, y, z, w] = point;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    x,
    y * cos - z * sin,
    y * sin + z * cos,
    w
  ];
}

/**
 * Apply multiple 4D rotations to a point
 * @param {number[]} point - [x, y, z, w] coordinates
 * @param {Object} angles - { xw, yw, zw, xy, xz, yz } rotation angles in radians
 */
export function rotate4D(point, angles = {}) {
  let result = [...point];

  if (angles.xy) result = rotateXY(result, angles.xy);
  if (angles.xz) result = rotateXZ(result, angles.xz);
  if (angles.yz) result = rotateYZ(result, angles.yz);
  if (angles.xw) result = rotateXW(result, angles.xw);
  if (angles.yw) result = rotateYW(result, angles.yw);
  if (angles.zw) result = rotateZW(result, angles.zw);

  return result;
}

/**
 * Stereographic projection from 4D to 3D
 * Projects a 4D point onto 3D space using perspective
 *
 * @param {number[]} point4D - [x, y, z, w] coordinates
 * @param {number} viewDistance - Distance of the 4D "camera" from the origin
 * @returns {number[]} [x, y, z] projected coordinates
 */
export function project4Dto3D(point4D, viewDistance = 2.5) {
  const [x, y, z, w] = point4D;
  const scale = viewDistance / (viewDistance - w);
  return [x * scale, y * scale, z * scale];
}

/**
 * Orthographic projection from 4D to 3D (simpler, no perspective)
 * Simply drops the w coordinate
 */
export function project4Dto3DOrthographic(point4D) {
  const [x, y, z] = point4D;
  return [x, y, z];
}

/**
 * Interpolate between two 4D points
 */
export function lerp4D(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
    a[3] + (b[3] - a[3]) * t
  ];
}

/**
 * Calculate the 4D distance between two points
 */
export function distance4D(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dz = b[2] - a[2];
  const dw = b[3] - a[3];
  return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
}

/**
 * Normalize a 4D vector
 */
export function normalize4D(v) {
  const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2] + v[3] * v[3]);
  if (length === 0) return [0, 0, 0, 0];
  return [v[0] / length, v[1] / length, v[2] / length, v[3] / length];
}

/**
 * Generate smooth Lissajous-curve rotation angles for auto-rotation
 * Creates beautiful, non-repeating patterns through 4D space
 */
export function getLissajousAngles(time, speed = 1) {
  return {
    xw: Math.sin(time * speed * 0.7) * Math.PI,
    yw: Math.sin(time * speed * 0.5) * Math.PI,
    zw: Math.sin(time * speed * 0.3) * Math.PI,
    xy: Math.sin(time * speed * 0.2) * 0.3,
    xz: Math.sin(time * speed * 0.15) * 0.3,
    yz: Math.sin(time * speed * 0.1) * 0.3
  };
}

/**
 * Calculate depth-based color intensity
 * Points closer to the viewer (higher w after projection) are brighter
 */
export function getDepthIntensity(w, viewDistance = 2.5) {
  const normalizedDepth = (w + 1.5) / 3; // Normalize w from roughly [-1.5, 1.5] to [0, 1]
  return Math.max(0.3, Math.min(1, normalizedDepth));
}

const hypermath = {
  rotateXW,
  rotateYW,
  rotateZW,
  rotateXY,
  rotateXZ,
  rotateYZ,
  rotate4D,
  project4Dto3D,
  project4Dto3DOrthographic,
  lerp4D,
  distance4D,
  normalize4D,
  getLissajousAngles,
  getDepthIntensity
};

export default hypermath;
