import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const SKILL_WORDS = [
  'React', 'Django', 'Python', 'JavaScript', 'TypeScript',
  'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
  'Git', 'Linux', 'REST API', 'GraphQL', 'Cybersecurity',
  'UI/UX', 'Tailwind', 'GSAP', 'Three.js', 'Framer Motion'
];

const SkillText: React.FC<{ 
  position: [number, number, number]; 
  text: string;
  index: number;
}> = ({ position, text, index }) => {
  const textRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (textRef.current) {
      const time = state.clock.getElapsedTime();
      textRef.current.rotation.y = Math.sin(time + index) * 0.2;
      textRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <Text
        ref={textRef}
        position={position}
        fontSize={hovered ? 0.3 : 0.25}
        color={hovered ? '#00d4ff' : '#6c63ff'}
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {text}
      </Text>
    </Float>
  );
};

export const SkillCloud: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) return null;

  const positions = SKILL_WORDS.map((_, i) => {
    const theta = (i / SKILL_WORDS.length) * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 2.5;
    return [
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
    ] as [number, number, number];
  });

  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6584" />
        
        {SKILL_WORDS.map((skill, index) => (
          <SkillText
            key={skill}
            text={skill}
            position={positions[index]}
            index={index}
          />
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
