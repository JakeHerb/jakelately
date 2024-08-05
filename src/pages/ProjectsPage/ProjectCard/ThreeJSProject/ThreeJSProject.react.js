import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import './ThreeJSProject.css';

import { useGLTF, Center, Effects, MeshTransmissionMaterial } from '@react-three/drei'


function ThreeJSProject() {
    return (
      <div style={{width: '100%', height: 500, alignContent:"center"}}>
      <Canvas >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Center top rotation={[0, -Math.PI / 1.5, 0]} position={[0, 0, 3]}>
          <Model scale={0.8} />
        </Center>
        <Rig />
    </Canvas>
    </div>
      )
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
      const { nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf')
      return (
        <mesh castShadow receiveShadow geometry={nodes.bunny.geometry} {...props}>
          <MeshTransmissionMaterial backside thickness={0.2} anisotropicBlur={0.1} chromaticAberration={0.1} clearcoat={1} />
        </mesh>
      )
    }

    
    function Rig({ vec = new THREE.Vector3() }) {
      useFrame((state) => {
        state.camera.position.lerp(vec.set(10 * state.pointer.x, 0.5, 3), 0.01)
        state.camera.lookAt(0, 0, 0)
      })
    }

export default ThreeJSProject;