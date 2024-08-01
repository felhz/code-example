import {
  Box,
  Center,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Resize,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Plane() {
  const ref = useRef();
  const refC = useRef();
  const texture = useLoader(THREE.TextureLoader, '/sprite/1.jpg');

  const { scene } = useThree();
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2, -2, 0),
    new THREE.Vector3(0, 2, 0),
    new THREE.Vector3(2, -2, 0),
  ]);
  useFrame(() => {
    // texture.offset.x += 0.01;
  });
  useEffect(() => {
    console.log(texture);
    scene.add(new THREE.AxesHelper(10));
    scene.add(new THREE.BoxHelper(refC.current));
    // scene.background = new THREE.Color(0xff0000);
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);
    texture.offset.x = -1;
  }, []);
  return (
    <>
      <sprite scale={[2, 1, 1]} position={[5, 0, 0]}>
        <spriteMaterial ref={ref} attach="material" map={texture} />
      </sprite>
      {/* <mesh>
        <tubeGeometry ref={tubeRef} args={[path]} />
        <meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} />
      </mesh> */}
      {/* <mesh>
        <circleGeometry />
        <meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} />
      </mesh> */}
      {/* 相对于坐标点上下左右 */}
      <Center position={[3, 0, 0]} top ref={refC}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Center>
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <Resize height width depth>
        <Box args={[10, 10, 10]} position={[10, 0, 0]} />
      </Resize>
    </>
  );
}

const Sprite = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      <OrbitControls />
      <ambientLight intensity={Math.PI} />
      <Plane />
    </Canvas>
  );
};
export default Sprite;
