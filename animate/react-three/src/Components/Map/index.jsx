import {
  GizmoHelper,
  GizmoViewport,
  Line,
  OrbitControls,
  Sphere,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
function Com() {
  const radius = 10;
  const arc = new THREE.ArcCurve(0, 0, radius + 10, 0, Math.PI * 2, false);
  const arcPoints = arc.getPoints(50);
  const [position, setPosition] = useState(new THREE.Vector2());
  const earth = useLoader(THREE.TextureLoader, '/earth.jpg');
  const start = new THREE.Spherical(radius, (Math.PI / 180) * 45, 0);
  const center = new THREE.Spherical(radius + 3, (Math.PI / 180) * 60, 0);
  const end = new THREE.Spherical(radius, (Math.PI / 180) * 75, 0);

  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3().setFromSpherical(start),
    new THREE.Vector3().setFromSpherical(center),
    new THREE.Vector3().setFromSpherical(end)
  );
  const curvePoints = curve.getPoints(100);
  const [air, setAir] = useState(new THREE.Vector3());
  useFrame((state) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime();
    const t = (elapsed / 15) % 1;
    const point = arc.getPointAt(t);
    setPosition(point);
    setAir(curve.getPointAt((elapsed / 3) % 1));
  });
  const { scene } = useThree();
  const sceneTexture = useLoader(THREE.TextureLoader, '/city-pano.jpg');
  useEffect(() => {
    scene.environment = sceneTexture;
    scene.background = sceneTexture;
  }, []);

  return (
    <group>
      <mesh>
        <sphereGeometry args={[radius]} />
        <meshStandardMaterial map={earth} />
      </mesh>

      <Line points={curvePoints} color={new THREE.Color(0xff0000)} />
      <Sphere
        position={air}
        args={[1]}
        color={new THREE.Color(0x00ff00)}
        scale={0.2}
      />
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
      dpr={[2, 2]}
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      {/* <Environment files={'/city-pano.jpg'} background /> */}
      <OrbitControls />
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
