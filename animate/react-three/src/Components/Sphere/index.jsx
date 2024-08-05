import { Line, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function latLongToVector3(lat, lon, radius) {
  const phi = (lat * Math.PI) / 180; // 纬度转换为弧度
  const theta = ((lon - 180) * Math.PI) / 180; // 经度转换为弧度，经度范围从 -180 到 180 度

  const x = -radius * Math.cos(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

// 示例使用
const latitude = 40.7128; // 纬度，例如纽约市
const longitude = -74.006; // 经度，例如纽约市
const radius = 15; // 球体半径

const position = latLongToVector3(latitude, longitude, radius);
const curve = new THREE.CatmullRomCurve3(
  [
    position,
    latLongToVector3(latitude - 10, longitude, radius + 2),
    latLongToVector3(latitude - 20, longitude, radius),
  ],
  false,
  'catmullrom',
  0.5
);
function Com() {
  const poi = useRef();
  useFrame((state, delta) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime();
    // console.log(elapsed, 'elapsed');
    const t = Math.min(elapsed / 3, 1); // 归一化时间

    const point = curve.getPointAt(t);
    poi.current.position.copy(point);
  });
  console.log(position);
  return (
    <>
      <Sphere args={[radius]}>
        <meshStandardMaterial color="hotpink" wireframe />
      </Sphere>
      <Sphere position={position} scale={[0.2, 0.2, 0.2]} args={[1]} ref={poi}>
        <meshStandardMaterial color="green" />
      </Sphere>
      <Line points={curve.getPoints(50)} />
    </>
  );
}

const Sphereg = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      <OrbitControls />
      <axesHelper args={[10]} />
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  );
};
export default Sphereg;
