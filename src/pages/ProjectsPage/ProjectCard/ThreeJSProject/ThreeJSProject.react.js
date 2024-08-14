import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import './ThreeJSProject.css';

import { useGLTF, Center, Effects, MeshTransmissionMaterial } from '@react-three/drei'


function ThreeJSProject() {
  const [backgroundColor, setBackgroundColor] = useState('red');

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Canvas for 3D Scene */}
      <Canvas style={{ backgroundColor }}>
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, -2]} />
        <Box position={[1.2, 0, -2]} />
        <Center top rotation={[0, -Math.PI / 1.5, 0]} position={[0, 0, 3]}>
          <Model scale={0.8} />
        </Center>
        <Rig />
      </Canvas>

      {/* UI Controls */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000, // Ensures the UI is above the canvas
      }}>
        <ColorToggleButton color={backgroundColor} setColor={setBackgroundColor} />
      </div>
    </div>
  );
}
  
  function Box(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

  function Model(props) {
    const meshRef = useRef()
    const { nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf')
    useFrame((state, delta) => {
      if (active) {
        meshRef.current.rotation.x += delta;
      } else {
        meshRef.current.rotation.x -= delta;
      }

    })
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
      <mesh 
      ref={meshRef} 
      castShadow 
      receiveShadow 
      geometry={nodes.bunny.geometry} 
      {...props}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      >
        <MeshTransmissionMaterial color={hovered ? 'hotpink' : 'floralwhite'} backside thickness={0.2} anisotropicBlur={0.1} chromaticAberration={0.1} clearcoat={1} />
      </mesh>
    )
  }

  
  function Rig({ vec = new THREE.Vector3() }) {
    
    useFrame((state) => {
      state.camera.position.lerp(vec.set(10 * state.pointer.x, 10 * state.pointer.y, 5), 0.01)
      state.camera.lookAt(0, 0, 0)
    })
  }

  function ColorToggleButton({ setColor, color }) {
    const toggleColor = () => {
      setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
    };
  
    return (
      <button
        onClick={toggleColor}
        style={{
          backgroundColor: color,
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '10px', // Adds spacing between buttons if more are added
        }}
      >
        Toggle to {color === 'red' ? 'blue' : 'red'}
      </button>
    );
  }

export default ThreeJSProject;