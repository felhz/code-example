import { Sky } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
const Scene = () => {
  const { gl, camera, scene } = useThree();
  const { color, positionX } = useControls({ color: 'red', positionX: '' });
  console.log(color, positionX);
  const boxRef = useRef();
  useFrame(() => {
    // boxRef.current.rotateX(10);
  });
  useEffect(() => {
    boxRef.current.position.setX(positionX);
  }, [positionX]);
  const handleBoxClick = (e) => {
    console.log(e.point.X);
  };

  useEffect(() => {
    // gl.setSize(300, 300);
    scene.add(new THREE.AxesHelper(10));
    scene.background = new THREE.Color(0xffff00);
  }, []);
  return (
    <>
      <mesh
        ref={boxRef}
        onClick={handleBoxClick}
        onPointerMove={(e) => {
          boxRef.current.position.setX(e.point.x);
        }}
      >
        <boxGeometry args={[1, 1, 1]}></boxGeometry>
        <meshBasicMaterial color={0xff0000}></meshBasicMaterial>
      </mesh>
      <mesh position={[5, 0, 0]}>
        <sphereGeometry />
        <pointsMaterial color={0x00ff00} />
      </mesh>
      <Sky sunPosition={[100, 20, 100]} />
    </>
  );
};
export default Scene;
