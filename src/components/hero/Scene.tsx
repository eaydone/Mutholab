"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.08;
    meshRef.current.rotation.y = t * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={meshRef} position={[1.7, 0.1, 0]} scale={1.05}>
        <icosahedronGeometry args={[1, 10]} />
        <MeshDistortMaterial
          color="#c6ff3a"
          emissive="#1c2408"
          emissiveIntensity={0.2}
          roughness={0.42}
          metalness={0.25}
          distort={0.38}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function WireGrid() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.02;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2.4, 0, 0]} position={[0, -1.6, 0]}>
      <planeGeometry args={[14, 14, 24, 24]} />
      <meshBasicMaterial color="#1f1f24" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function PointerRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const x = (state.pointer.x * viewport.width) / 24;
    const y = (state.pointer.y * viewport.height) / 24;
    group.current.rotation.y += (x - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

export default function Scene() {
  const dpr = useMemo<[number, number]>(() => [1, 1.75], []);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 2]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-4, -2, -2]} intensity={0.5} color="#c6ff3a" />

      <PointerRig>
        <Blob />
      </PointerRig>

      <WireGrid />

      <Sparkles
        count={60}
        scale={[9, 5, 4]}
        size={1.6}
        speed={0.25}
        opacity={0.45}
        color="#c6ff3a"
      />
    </Canvas>
  );
}
