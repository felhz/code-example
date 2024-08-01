import { Line, OrbitControls, Sphere, useMotion } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Loop() {
  const motion = useMotion();
  useFrame((state, delta) => {
    // Set the current position along the curve, you can increment indiscriminately for a loop
    motion.current += delta;
    // Look ahead on the curve
    motion.object.current.lookAt(motion.next);
    // console.log(motion.current);
  });
}

function Com() {
  const pathPoints = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(10, 20, 0),
    new THREE.Vector3(20, 20, 0),
    new THREE.Vector3(40, 0, 0),
  ];
  const poi = useRef();
  const curve = new THREE.CatmullRomCurve3(
    pathPoints,
    false,
    'catmullrom',
    0.5
  );
  // const curve = new THREE.CubicBezierCurve3(...pathPoints);
  useFrame((state) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime();
    // console.log(elapsed, 'elapsed');
    const t = Math.min(elapsed / 10, 1); // 归一化时间

    const point = curve.getPointAt(t);
    console.log(point);
    poi.current.position.copy(point);
  });
  return (
    <group>
      {/* <MotionPathControls
        offset={0}
        focus={poi}
        damping={0.2}
        curves={[
          new THREE.CubicBezierCurve3(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(10, 0, 0)
          ),
        ]}
      ></MotionPathControls> */}
      <Sphere ref={poi}>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
      <Line points={curve.getPoints(50)} />
    </group>
  );
}

const MotionPath = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 100], fov: 45 }}
    >
      <OrbitControls />
      <axesHelper args={[10]} />
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  );
};
export default MotionPath;
