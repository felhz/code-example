import {
  GizmoHelper,
  GizmoViewport,
  Line,
  OrbitControls,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useState } from 'react';
import * as THREE from 'three';
function Com() {
  const radius = 10;
  const arc = new THREE.ArcCurve(0, 0, radius + 10, 0, Math.PI * 2, false);
  const arcPoints = arc.getPoints(50);
  const [position, setPosition] = useState(new THREE.Vector2());
  const earth = useLoader(THREE.TextureLoader, '/earth.jpg');
  useFrame((state) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime();
    const t = (elapsed / 15) % 1;
    const point = arc.getPointAt(t);
    setPosition(point);
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[radius]} />
        <meshStandardMaterial map={earth} />
      </mesh>
      <mesh rotation={[90, 0, 0]}>
        <Line points={arcPoints} color={new THREE.Color(0x00ff00)}></Line>
        <mesh position={[...position, 0]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial />
        </mesh>
      </mesh>
    </group>
  );
}

const Geo = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      <OrbitControls />
      {/* <axesHelper args={[10]} /> */}
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  );
};
export default Geo;
