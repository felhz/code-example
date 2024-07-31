import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Plane() {
  const ref = useRef();
  const refCube = useRef();
  useEffect(() => {
    const box3 = new THREE.Box3();
    const cubeBox3 = new THREE.Box3();
    box3.setFromObject(ref.current);
    cubeBox3.setFromObject(refCube.current);
    console.log(box3, 'box3', refCube.current);

    console.log(
      box3.intersectsBox(cubeBox3),
      'box3.intersectsBox(refCube.current)'
    );
  });
  return (
    <>
      <mesh
        ref={ref}
        onClick={(e) => {
          console.log(e);
        }}
      >
        <boxGeometry args={[1, 1]} />
        <meshLambertMaterial color="red" />
      </mesh>
      <mesh ref={refCube} position={[0.5, 0, 0]}>
        <boxGeometry args={[1, 1]} />
        <meshLambertMaterial color="hotpink" />
      </mesh>
    </>
  );
}

const Collision = () => {
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
export default Collision;
