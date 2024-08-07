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
  const start = new THREE.Spherical(radius + 0, (Math.PI / 180) * 0, 0);
  const start1 = new THREE.Spherical(radius + 2, (Math.PI / 180) * 45, 0);
  const center = new THREE.Spherical(radius + 3, (Math.PI / 180) * 90, 0);
  const center1 = new THREE.Spherical(radius + 2, (Math.PI / 180) * 135, 0);
  const end = new THREE.Spherical(radius + 0, (Math.PI / 180) * 180, 0);

  const curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3().setFromSpherical(start),
      new THREE.Vector3().setFromSpherical(start1),
      new THREE.Vector3().setFromSpherical(center),
      new THREE.Vector3().setFromSpherical(center1),
      new THREE.Vector3().setFromSpherical(end),
    ],
    false,
    'catmullrom',
    0.5
  );
  const curvePoints = curve.getPoints(100);
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
      <Line points={curvePoints} color={new THREE.Color(0xff0000)} />
      <mesh>
        <Line points={arcPoints} color={new THREE.Color(0x00ff00)}></Line>
        <mesh position={[...position, 0]}>
          <sphereGeometry args={[1]} />
          <meshBasicMaterial
            color={new THREE.Color(0x0000ff)}
            opacity={0.5}
            transparent={true}
          />
        </mesh>
      </mesh>
    </group>
  );
}

const Map = () => {
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
export default Map;
