import {
  Circle,
  Hud,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

let matrix = new THREE.Matrix4();

const Textrue = (props) => {
  return (
    <RenderTexture attach="map">
      <color attach="background" args={['white']} />
      <OrthographicCamera
        makeDefault
        left={-1}
        right={1}
        top={1}
        bottom={-1}
        position={[0, 0, 10]}
        zoom={0.5}
      />
      <Text color="red">{props.text}</Text>
    </RenderTexture>
  );
};
function Com() {
  const { camera, viewport } = useThree();
  const mesh = useRef();
  useEffect(() => {
    console.log(viewport, 'viewport', camera);
  }, []);
  useFrame(() => {
    matrix.copy(camera.matrix).invert();
    mesh.current.quaternion.setFromRotationMatrix(matrix);
  });

  return (
    <Hud>
      <PerspectiveCamera makeDefault position={[5, 3, 10]} />
      <ambientLight intensity={Math.PI} />
      <mesh ref={mesh}>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color="hotpink">
          <Textrue text="1" />
        </meshStandardMaterial>
      </mesh>
    </Hud>
  );
}

const Hub = () => {
  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
    >
      <OrbitControls />
      <ambientLight intensity={Math.PI} />
      <Com />
      <Circle material-color="hotpink"></Circle>
    </Canvas>
  );
};
export default Hub;
