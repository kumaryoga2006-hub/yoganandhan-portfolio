import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const AnimatedSphere: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
      sphereRef.current.rotation.x += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere
        ref={sphereRef}
        args={[1.5, 64, 64]}
        scale={hovered ? 1.1 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? '#00d4ff' : '#6c63ff'}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const TechIcon: React.FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
  const iconRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.01;
      iconRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={iconRef} position={position}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

export const HeroSphere: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) return null;

  return (
    <div className="w-1/2 h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        
        <AnimatedSphere />
        
        <TechIcon position={[2.5, 0.5, 0]} color="#61DAFB" />
        <TechIcon position={[-2.5, 0.5, 0]} color="#3776AB" />
        <TechIcon position={[0, 2.5, 0]} color="#F7DF1E" />
        <TechIcon position={[0, -2.5, 0]} color="#092E20" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
