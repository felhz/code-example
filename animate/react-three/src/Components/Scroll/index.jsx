import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Com() {
  const ref = useRef();

  const { scene } = useThree();

  useFrame(() => {
    // texture.offset.x += 0.01;
  });
  useEffect(() => {}, []);
  return (
    <ScrollControls pages={2} damping={0.1}>
      <Scroll>
        <Box a="1" />
      </Scroll>
      <Scroll>
        <Box color="red" y={-3} />
      </Scroll>
      {/* <Scroll html>
        <h1 style={{ top: '200vh' }}>third page</h1>
      </Scroll> */}
    </ScrollControls>
  );
}
const Box = (props) => {
  const data = useScroll();
  const [p, setP] = useState(0);
  console.log(data, props);
  props = { color: 'hotpink', y: 0, ...props };
  useFrame(() => {
    // setP(data.offset);
    const a = data.range(0, 1 / 2);
    console.log(a);
  });
  return (
    <mesh position={[0, props.y, 0]}>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial {...props} />
    </mesh>
  );
};

const Scroller = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  );
};
export default Scroller;
