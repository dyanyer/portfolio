import { Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const nodePositions: Array<[number, number, number]> = [
  [-1.75, 0.86, -0.08],
  [1.65, 0.74, -0.2],
  [-1.34, -0.94, 0.04],
  [1.5, -0.86, -0.14],
];

function useReducedMotionPreference() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
}

function WorkflowPanel({
  position,
  width = 0.78,
}: {
  position: [number, number, number];
  width?: number;
}) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[width, 0.38, 0.08]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#07111f"
          emissiveIntensity={0.25}
          metalness={0.12}
          roughness={0.62}
        />
      </mesh>
      <mesh position={[-width / 2 + 0.15, 0.04, 0.052]}>
        <boxGeometry args={[0.12, 0.04, 0.012]} />
        <meshBasicMaterial color="#a7f3d0" transparent opacity={0.88} />
      </mesh>
      <mesh position={[0.08, 0.04, 0.052]}>
        <boxGeometry args={[width - 0.36, 0.035, 0.012]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.42} />
      </mesh>
      <mesh position={[-0.04, -0.09, 0.052]}>
        <boxGeometry args={[width - 0.2, 0.03, 0.012]} />
        <meshBasicMaterial color="#64748b" transparent opacity={0.38} />
      </mesh>
    </group>
  );
}

function WorkflowObject({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;

    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      -0.18 + state.pointer.x * 0.1 + Math.sin(time * 0.28) * 0.035,
      0.04,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      0.08 + state.pointer.y * -0.055,
      0.04,
    );
  });

  return (
    <group ref={groupRef} rotation={[0.08, -0.18, 0]} scale={0.98}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.18, 6]} />
        <meshStandardMaterial
          color="#1f2937"
          emissive="#0f2a22"
          emissiveIntensity={0.28}
          metalness={0.18}
          roughness={0.45}
        />
      </mesh>
      <mesh position={[0, 0, 0.012]}>
        <cylinderGeometry args={[0.53, 0.53, 0.2, 6]} />
        <meshBasicMaterial color="#a7f3d0" wireframe transparent opacity={0.34} />
      </mesh>

      {nodePositions.map((position, index) => (
        <Line
          color="#94a3b8"
          key={`workflow-line-${index}`}
          lineWidth={1}
          opacity={0.5}
          points={[[0, 0, 0], position]}
          transparent
        />
      ))}

      <WorkflowPanel position={nodePositions[0]} />
      <WorkflowPanel position={nodePositions[1]} width={0.86} />
      <WorkflowPanel position={nodePositions[2]} width={0.74} />
      <WorkflowPanel position={nodePositions[3]} width={0.8} />

      <mesh position={[0, 0.02, 0.35]}>
        <boxGeometry args={[1.2, 0.06, 0.04]} />
        <meshBasicMaterial color="#a7f3d0" transparent opacity={0.52} />
      </mesh>
      <mesh position={[0, -0.13, 0.35]}>
        <boxGeometry args={[0.78, 0.045, 0.04]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.42} />
      </mesh>
    </group>
  );
}

export function SystemVisual() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <Canvas
      camera={{ fov: 40, position: [0, 0.04, 5.2] }}
      dpr={[1, 1.45]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight intensity={1.3} position={[3.4, 4.2, 4]} />
      <pointLight color="#a7f3d0" intensity={7.5} position={[-2.2, 1.6, 2.6]} />
      <WorkflowObject reducedMotion={reducedMotion} />
    </Canvas>
  );
}
