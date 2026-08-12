"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, Lightformer, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Knot() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.1;
    ref.current.rotation.y = t * 0.16;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.7}>
      <mesh ref={ref} position={[1.9, 0.15, 0]} scale={1.02}>
        <torusKnotGeometry args={[1, 0.32, 280, 56]} />
        <meshPhysicalMaterial
          color="#d7d7dc"
          metalness={1}
          roughness={0.16}
          envMapIntensity={1.25}
          clearcoat={0.5}
          clearcoatRoughness={0.25}
        />
      </mesh>
    </Float>
  );
}

function PointerRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const x = (state.pointer.x * viewport.width) / 26;
    const y = (state.pointer.y * viewport.height) / 26;
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
      camera={{ position: [0, 0, 7], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />

      <PointerRig>
        <Knot />
      </PointerRig>

      <Sparkles
        count={70}
        scale={[10, 6, 4]}
        size={1.5}
        speed={0.2}
        opacity={0.4}
        color="#c6ff3a"
      />

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={5}
            position={[0, 5, -9]}
            scale={2.2}
            color="#ffffff"
          />
          <Lightformer
            form="rect"
            intensity={3}
            position={[-5, 1, -1]}
            scale={[6, 2, 1]}
            color="#c6ff3a"
          />
          <Lightformer
            form="rect"
            intensity={3}
            position={[5, -1, -1]}
            scale={[6, 2, 1]}
            color="#22d3ee"
          />
          <Lightformer
            form="rect"
            intensity={2.2}
            position={[0, -5, 0]}
            scale={[9, 3, 1]}
            color="#8b5cf6"
          />
        </group>
      </Environment>
    </Canvas>
  );
}
