import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Plane() {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, '/sprite/2.jpg');
  const { scene } = useThree();
  useFrame(() => {
    // texture.offset.x += 0.01;
  });
  useEffect(() => {
    console.log(texture);
    scene.background = new THREE.Color(0xff0000);
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set(1, 1);
  });
  return (
    <>
      <sprite scale={[5, 1, 0]}>
        <spriteMaterial ref={ref} attach="material" map={texture} />
      </sprite>
      <mesh></mesh>
    </>
  );
}

const Sprite = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <OrbitControls />
      <ambientLight intensity={Math.PI} />
      <Plane />
    </Canvas>
  );
};
export default Sprite;
