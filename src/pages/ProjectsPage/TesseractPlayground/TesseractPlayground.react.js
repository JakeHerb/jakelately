import React, { useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Link } from 'react-router-dom';
import Polytope4D from './components/Polytope4D';
import DimensionTransition from './components/DimensionTransition';
import MathematicalEnvironment from './components/MathematicalEnvironment';
import Controls4D from './components/Controls4D';
import { getLissajousAngles } from './utils/hypermath';
import './TesseractPlayground.css';

// Theme color definitions
const themes = {
  golden: {
    primary: '#ffaf00',
    secondary: '#3c7f72',
    tertiary: '#D34A24'
  },
  teal: {
    primary: '#3c7f72',
    secondary: '#5aa897',
    tertiary: '#ffaf00'
  },
  cosmic: {
    primary: '#a855f7',
    secondary: '#6b5b95',
    tertiary: '#ec4899'
  },
  fire: {
    primary: '#D34A24',
    secondary: '#ff6b35',
    tertiary: '#ffaf00'
  }
};

/**
 * AnimatedScene - The 3D canvas content with animation loop
 */
function AnimatedScene({
  selectedShape,
  rotationAngles,
  setRotationAngles,
  dimension,
  autoRotate,
  theme,
  showDimensionMode
}) {
  const colors = themes[theme];

  // Auto-rotation animation
  useFrame(({ clock }) => {
    if (autoRotate) {
      const t = clock.getElapsedTime();
      const angles = getLissajousAngles(t, 0.3);
      setRotationAngles(angles);
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Mathematical background environment */}
      <MathematicalEnvironment
        primaryColor={colors.primary}
        secondaryColor={colors.secondary}
        tertiaryColor={colors.tertiary}
      />

      {/* Stars background */}
      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Main content - either 4D polytope or dimension transition */}
      {showDimensionMode ? (
        <DimensionTransition
          dimension={dimension}
          color={colors.primary}
          secondaryColor={colors.secondary}
          scale={1.5}
          lineWidth={3}
        />
      ) : (
        <Polytope4D
          polytopeName={selectedShape}
          rotationAngles={rotationAngles}
          scale={1.8}
          color={colors.primary}
          secondaryColor={colors.secondary}
          lineWidth={2.5}
          glowIntensity={1.2}
          showVertices={true}
        />
      )}

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={15}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={0.8}
        />
        <Vignette eskil={false} offset={0.1} darkness={0.8} />
      </EffectComposer>
    </>
  );
}

/**
 * TesseractPlayground - Main page component
 */
function TesseractPlayground() {
  // State
  const [selectedShape, setSelectedShape] = useState('tesseract');
  const [rotationAngles, setRotationAngles] = useState({ xw: 0, yw: 0, zw: 0 });
  const [dimension, setDimension] = useState(4);
  const [autoRotate, setAutoRotate] = useState(true);
  const [theme, setTheme] = useState('golden');
  const [showDimensionMode, setShowDimensionMode] = useState(false);

  // Handlers
  const handleRotationChange = useCallback((angles) => {
    setRotationAngles(angles);
    setAutoRotate(false); // Stop auto-rotate when manually adjusting
  }, []);

  const handleDimensionChange = useCallback((dim) => {
    setDimension(dim);
  }, []);

  const handleAutoRotateToggle = useCallback(() => {
    setAutoRotate(prev => !prev);
  }, []);

  const handleModeToggle = useCallback((showDim) => {
    setShowDimensionMode(showDim);
    // Reset to appropriate defaults when switching modes
    if (showDim) {
      setDimension(4);
    }
  }, []);

  return (
    <div className="tesseract-playground">
      {/* Back button */}
      <Link to="/projects" className="tesseract-playground__back">
        <span className="tesseract-playground__back-icon">{'<'}</span>
        Back to Projects
      </Link>

      {/* Title overlay */}
      <div className="tesseract-playground__title-overlay">
        <h1 className="tesseract-playground__title">Dimensional Gateway</h1>
        <p className="tesseract-playground__subtitle">
          {showDimensionMode
            ? 'Journey through dimensions: 0D → 4D'
            : 'Explore 4D polytopes projected into 3D space'}
        </p>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        className="tesseract-playground__canvas"
        gl={{ antialias: true, alpha: true }}
      >
        <AnimatedScene
          selectedShape={selectedShape}
          rotationAngles={rotationAngles}
          setRotationAngles={setRotationAngles}
          dimension={dimension}
          autoRotate={autoRotate}
          theme={theme}
          showDimensionMode={showDimensionMode}
        />
      </Canvas>

      {/* Controls panel */}
      <Controls4D
        selectedShape={selectedShape}
        onShapeChange={setSelectedShape}
        rotationAngles={rotationAngles}
        onRotationChange={handleRotationChange}
        dimension={dimension}
        onDimensionChange={handleDimensionChange}
        autoRotate={autoRotate}
        onAutoRotateToggle={handleAutoRotateToggle}
        theme={theme}
        onThemeChange={setTheme}
        showDimensionMode={showDimensionMode}
        onModeToggle={handleModeToggle}
      />
    </div>
  );
}

export default TesseractPlayground;
