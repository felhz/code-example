import { Circle, PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const Controls = () => {
  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
    >
      <PointerLockControls />
      <ambientLight intensity={Math.PI} />
      <Circle material-color="hotpink"></Circle>
    </Canvas>
  );
};
export default Controls;
