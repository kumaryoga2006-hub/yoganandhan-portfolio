import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Envelope: React.FC<{ onSuccess: boolean }> = ({ onSuccess }) => {
  const envelopeRef = useRef<THREE.Group>(null);
  const [isOpen, setIsOpen] = useState(false);

  useFrame((state) => {
    if (envelopeRef.current) {
      envelopeRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  React.useEffect(() => {
    if (onSuccess) {
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 2000);
    }
  }, [onSuccess]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={envelopeRef}>
        {/* Envelope body */}
        <Box args={[2, 1.5, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1a1a28" roughness={0.3} metalness={0.7} />
        </Box>
        
        {/* Envelope flap */}
        <Plane
          args={[2, 0.8]}
          position={[0, 0.5, 0.06]}
          rotation={[isOpen ? -Math.PI / 2 : 0, 0, 0]}
        >
          <meshStandardMaterial color="#6c63ff" roughness={0.3} metalness={0.7} />
        </Plane>
        
        {/* Accent line */}
        <Box args={[1.8, 0.02, 0.12]} position={[0, 0, 0.06]}>
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
        </Box>
      </group>
    </Float>
  );
};

export const ContactEnvelope: React.FC<{ onSuccess: boolean }> = ({ onSuccess }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) return null;

  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6584" />
        
        <Envelope onSuccess={onSuccess} />
      </Canvas>
    </div>
  );
};
